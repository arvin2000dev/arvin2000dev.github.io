import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./routes/app";
import About from "./routes/about";
import Weeb from "./routes/weeb";
import Sigma from "./routes/sigma";
import Thief from "./routes/thief";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/weeb",
        element: <Weeb />,
    },
    {
        path: "/sigma",
        element: <Sigma />,
    },
    {
        path: "/thief",
        element: <Thief />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
