import { createBrowserRouter } from "react-router-dom";

import { App } from "src/App";

import { AdminPanel } from "src/pages";

// Here will be a few more options such as errorElement, loader
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   index: true,
      //   element: <Main />
      // },
      // {
      //   path: "game",
      //   element: <Game />
      // },
      {
        index: true,
        // path: "admin-panel",
        element: <AdminPanel />
      }
    ]
  }
]);
