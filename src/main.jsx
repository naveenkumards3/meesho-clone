import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainBar from "./routes/MainBar.jsx";
import Bag from "./routes/Bag.jsx";
import { Provider } from "react-redux";
import meeshoStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainBar />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={meeshoStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
