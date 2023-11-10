import { type RouteObject, Navigate } from "react-router-dom";
import Error from "./components/Error.tsx";

import BrowseNewPage from "./pages/browse/new/page.tsx";
import postLoader from "./pages/post/loader.tsx";
import PostPage from "./pages/post/page.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/browse/new" />,
  },
  {
    path: "/browse/new",
    element: <BrowseNewPage />,
  },
  {
    path: "post/:postId",
    element: <PostPage />,
    loader: postLoader,
  },
];

// 404 Page
routes.push({
  path: "*",
  element: (
    <Error
      title="Not Found"
      message="No page was found for that path. Check the URL."
    />
  ),
});

// Export Routes
export default routes;
