import { createBrowserRouter } from "react-router-dom";
import { Error, Layout } from "./components";
import { Cart, Home, ItemDetail, ItemsDelivered, ItemsOrdered, Signin, Signup } from "./modules";
import { cartUrl, homeUrl, itemsDeliveredUrl, itemsDetailUrl, itemsOrderedUrl, signinUrl, signupUrl } from "./urls";





export const routerConfig = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: homeUrl,
                errorElement: <Error />,
                element: <Home />
            },
            {
                path: cartUrl,
                errorElement: <Error />,
                element: <Cart />
            },
            {
                path: itemsOrderedUrl,
                errorElement: <Error />,
                element: <ItemsOrdered />
            },
            {
                path: itemsDeliveredUrl,
                errorElement: <Error />,
                element: <ItemsDelivered />
            },
            {
                path: itemsDetailUrl,
                errorElement: <Error />,
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