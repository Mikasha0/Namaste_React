import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { AboutUs } from "./src/components/AboutUs";
import { ErrorPage } from "./src/components/ErrorPage";
import { RestaurantMenu } from "./src/components/RestaurantMenu";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

//createBrowserRouter is a configuration for making routes. It ia an array of objects.
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//RouterProvider is a component.
