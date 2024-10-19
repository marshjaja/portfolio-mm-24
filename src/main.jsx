import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Layout from "./layout/Layout.jsx";

const router = createBrowserRouter([
	{
		path: "/portfolio-mm-24/",
		element: <Layout />,
		children: [
			{
				path: "/portfolio-mm-24/home",
				element: <Home />,
			},
			{
				path: "/portfolio-mm-24/contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			{" "}
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);
