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
    return isAuthenticated ? <>{children}</> : <Navigate to={homeUrl} replace />
}



export const routerConfig = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <Layout />,
        children: [
            {
                path: homeUrl,
                element: <Home />
            },
            {
                path: cartUrl,
                element: (
                    <ProtectedRoute>
                        <Cart />
                    </ProtectedRoute>
                )
            },
            {
                path: itemsOrderedUrl,
                element: (
                    <ProtectedRoute>
                        <ItemsOrdered />
                    </ProtectedRoute>
                )
            },
            {
                path: itemsDeliveredUrl,
                element: (
                    <ProtectedRoute>
                        <ItemsDelivered />
                    </ProtectedRoute>
                )
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