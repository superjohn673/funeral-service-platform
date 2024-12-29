import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./store";
import ErrorBoundary from "./components/common/ErrorBoundary";
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ErrorBoundary>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </ErrorBoundary>
      </HelmetProvider>
    </Provider>
  );
};

export default App;
