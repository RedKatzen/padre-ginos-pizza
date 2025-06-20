import { Link } from "@tanstack/react-router";
import { Component } from "react";

// catch errors from it children, not error from itself
// cannot use hooks with class components (hack: put hook in a function component, and pass to class component as a prop)
class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // send to TrackJS/Sentry, or do in a silly way...
    console.error("ErrorBoundary caugh some error", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            There was an error with this page. <Link to="/">Click here</Link> to
            go back to the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
