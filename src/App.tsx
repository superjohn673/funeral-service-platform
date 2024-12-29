import React from "react";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./store";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ErrorBoundary>
          <Router>
            <Routes />
          </Router>
        </ErrorBoundary>
      </HelmetProvider>
    </Provider>
  );
};

export default App;
