import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

const router = createBrowserRouter([
	{
		path: "/portfolio-mm-24/",
		element: <App />,
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
		<RouterProvider router={router} />
	</React.StrictMode>
);
