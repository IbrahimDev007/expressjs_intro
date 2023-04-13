import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Layout/Main";
import Home from "./Component/Home/Home";
import Phones from "./Component/Phones/Phones";
import Phone from "./Component/Phones/Phone";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/phones",
				element: <Phones />,
				loader: () => fetch("http://localhost:5000/phone"),
			},
			{
				path: "/phones/:id",
				element: <Phone />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/phone/${params.id}`),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
