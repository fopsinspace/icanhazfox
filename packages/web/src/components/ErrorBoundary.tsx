import { Component, ErrorInfo, ReactNode } from "react";
import ErrorComponent from "./Error";

interface ErrorState {
  error?: Error;
}

interface ErrorProps {
  children: ReactNode;
}

export default class ErrorBoundary extends Component<ErrorProps> {
  public state: ErrorState;

  public constructor(props: ErrorProps) {
    super(props);
    this.state = {};
  }

  // FIXME: Fix this eslint error. Variables prefixes with `_` shouldn't error.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  /* public static getDerivedStateFromError(_error: unknown) {
    return { hasError: true }
  } */

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public componentDidCatch(_error: Error, _errorInfo: ErrorInfo): void {
    // Sentry??? /j
    return;
  }

  public render() {
    if (this.state.error) {
      return (
        <ErrorComponent
          title="Rendering Error"
          message="An error occurred while trying to render that page. Please try again later."
          details={String(this.state.error)}
        />
      );
    }

    return this.props.children;
  }
}
