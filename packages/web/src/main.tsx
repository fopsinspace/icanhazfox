import React from "react";
import ReactDOM from "react-dom/client";
import { Route } from "wouter";

import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import PostPage from "./pages/post/page.tsx";
import BrowseNewPage from "./pages/browse/new/page.tsx";
import SignUpPage from "./pages/auth/signup.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="text flex min-h-screen flex-col bg-neutral-200 dark:bg-neutral-900">
      <ErrorBoundary>
        <Route path="/" component={BrowseNewPage} />
        <Route path="/post/:postId" component={PostPage} />
        <Route path="/signup" component={SignUpPage} />
      </ErrorBoundary>
    </div>
  </React.StrictMode>,
);
