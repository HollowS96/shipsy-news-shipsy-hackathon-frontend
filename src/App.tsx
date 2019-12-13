import React, { useState, useEffect } from "react";
import "./App.scss";

import { AppProvider } from "./context/app-context";
import Nav from "./components/Nav";
import Main from "./components/Main";
import ErrorBoundary from "./components/ErrorBoundary";

const App: React.FC = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://be001674.ngrok.io/news/getAll")
      .then(response => response.json())
      .then(data => {
        console.table(data);
        setNews(data);
      });
  }, []);

  return (
    <ErrorBoundary>
      <AppProvider value={{ news }}>
        <div className="shipsy-news">
          <Nav />
          <Main />
        </div>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
