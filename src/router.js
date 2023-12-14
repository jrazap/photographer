import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Albums from "./pages/Albums.js";
import Portfolio from "./pages/Portfolio.js";
import Contact from "./pages/Contact.js";
import SingleAlbum from "./pages/Album.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage RequestNumber="404" RequestTitle="Not Found" />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
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

]);

export default router;
