import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Contact } from "./src/components/Contact";
import { ErrorPage } from "./src/components/ErrorPage";
import { RestaurantMenu } from "./src/components/RestaurantMenu";
import { Provider } from "react-redux";
import { Cart } from "./src/components/Cart";
import appStore from "./src/utils/appStore";
import Footer from "./src/components/Footer";
import CommentContainer from "./src/components/CommentContainer";

const App = () => {
  // const [username, setUserName] = useState();
  // useEffect(() => {
  //   //fetching the username from backend and now showing it
  //   const data = {
  //     username: "Ankita",
  //   };
  //   setUserName(data.username);
  // }, []);
  return (
    <Provider store={appStore}>
      <div id="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
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
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/comment", element: <CommentContainer /> },
      { path: "restaurants/:resId", element: <RestaurantMenu /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//RouterProvider is a component.
