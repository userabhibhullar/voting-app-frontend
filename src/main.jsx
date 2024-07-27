import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Polls from "./components/polls/Polls";
import store from "./store/store";
import { Provider } from "react-redux";
import CreatePolls from "./components/polls/createPolls/CreatePolls";
import UpdatePolls from "./components/polls/updatePolls/UpdatePolls";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Polls />,
      },
      {
        path: "/create",
        element: <CreatePolls />,
      },
      {
        path: "/edit/:id",
        element: <UpdatePolls />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
