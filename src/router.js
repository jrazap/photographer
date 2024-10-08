import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Albums from "./pages/Albums.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import SingleAlbum from "./pages/SingleAlbum.js";
import SingleWork from "./pages/SingleWork.js";
import NotFound from "./pages/NotFound.js";
import Layout from "./layout/layout.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:workSlug",
        element: <SingleWork />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/albums",
        element: <Albums />,
      },
      {
        path: "/albums/:albumSlug",
        element: <SingleAlbum />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
