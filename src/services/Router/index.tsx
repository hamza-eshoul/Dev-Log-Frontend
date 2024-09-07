import { createBrowserRouter } from "react-router-dom";

// pages
import Homepage from "@pages/Homepage";
import RootLayout from "@/RootLayout";
import BlogPost from "@/pages/BlogPost";
import AboutPage from "@/pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/post/:id",
        element: <BlogPost />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
