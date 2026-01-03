import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import ErrorProneComponent from "../components/ErrorProneComponent";

function App() {
  return (
    <ErrorBoundary>
      <ErrorProneComponent />
    </ErrorBoundary>
  );
}

export default App;


