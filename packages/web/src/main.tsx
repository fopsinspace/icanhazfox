import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import routes from "./routes.tsx";
import Navbar from "./components/Navbar.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="text flex min-h-screen flex-col bg-neutral-200 dark:bg-neutral-900">
      <ErrorBoundary>
        <Navbar />

        <div className="h-full w-full p-12">
          <RouterProvider router={router} />
        </div>
      </ErrorBoundary>
    </div>
  </React.StrictMode>,
);
