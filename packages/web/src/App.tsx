import ErrorBoundary from "./components/ErrorBoundary";
import { Route } from "wouter";
import SignUpPage from "./pages/auth/signup";
import TestPage from "./pages/auth/test";
import BrowseNewPage from "./pages/browse/new/page";
import PostPage from "./pages/post/page";
import SignInPage from "./pages/auth/signin";

export default function App() {
  return (
    <div className="text flex min-h-screen flex-col bg-neutral-200 dark:bg-neutral-900">
      <ErrorBoundary>
        <Route path="/" component={BrowseNewPage} />
        <Route path="/post/:postId" component={PostPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
        <Route path="/test" component={TestPage} />
      </ErrorBoundary>
    </div>
  );
}
