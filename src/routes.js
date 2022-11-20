// pages
import { Home, ErrorPage, Login, Catalog } from "./pages";

const routes = [
  {
    path: "/",
    errorElement: <ErrorPage />,
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
