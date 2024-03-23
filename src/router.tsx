import { createBrowserRouter, Navigate } from "react-router-dom";
import { Error, Layout } from "./components";
import { Cart, Home, ItemDetail, ItemsDelivered, ItemsOrdered, Signin, Signup } from "./modules";
import { cartUrl, homeUrl, itemsDeliveredUrl, itemsDetailUrl, itemsOrderedUrl, signinUrl, signupUrl } from "./urls";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";



interface RouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<RouteProps> = ({
    children
}) => {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    return isAuthenticated ? <>{children}</> : <Navigate to={signinUrl} replace />
}



export const routerConfig = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: homeUrl,
                element: <Home />
            },
            {
                path: cartUrl,
                element: <Cart />
            },
            {
                path: itemsOrderedUrl,
                element: <ItemsOrdered />
            },
            {
                path: itemsDeliveredUrl,
                element: <ItemsDelivered />
            },
            {
                path: itemsDetailUrl,
                element: <ItemDetail />
            },
        ]
    },
    {
        path: signupUrl,
        errorElement: <Error />,
        element: <Signup />
    },
    {
        path: signinUrl,
        errorElement: <Error />,
        element: <Signin />
    }
])