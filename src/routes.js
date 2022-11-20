// pages
import { Home, Login, Catalog } from "./pages";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];

export default routes;
