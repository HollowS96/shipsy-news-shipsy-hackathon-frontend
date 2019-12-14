import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AppProvider } from "./context/app-context";
import Nav from "./components/Nav";
import Main from "./components/Main";
import ErrorBoundary from "./components";
import Chatbot from "./components/Chatbot";
import updateHeadlines from "./utils/Divider/methods/updateHeadlines";

const App: React.FC = () => {
  const [news, setNews] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [headlines, setHeadlines] = useState([]);
  const [popularNews, setPopularNews] = useState([]);
  const [isFetchingNews, setIsFetchingNews] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchHeadlines();
    fetchNews();
    fetchPopularNews();
  }, []);

  const fetchHeadlines = async () => {
    try {
      const { data: news } = await axios.get(
        "https://shipodailyapi.shipsy.in/news/headlines"
      );
      const headlines = updateHeadlines(news);
      setHeadlines(headlines);
    } catch (err) {
      errorHandler(err);
    }
  };

  const fetchNews = async () => {
    setIsFetchingNews(true);
    try {
      const { data: articles } = await axios.get(
        "https://shipodailyapi.shipsy.in/news/getAll",
        {
          params: {
            currentPageNumber: pageIndex
          }
        }
      );
      const newsList: any = [...news, ...articles];
      setIsFetchingNews(false);
      setPageIndex(pageIndex + 1);
      setNews(newsList);
    } catch (err) {
      errorHandler(err);
    }
  };

  const fetchPopularNews = async () => {
    try {
      const { data: news } = await axios.get(
        "https://shipodailyapi.shipsy.in/news/popular"
      );
      setPopularNews(news);
    } catch (err) {
      errorHandler(err);
    }
  };

  const errorHandler = (err: any) => console.log(err);

  const likeAndShareHandler = (type: any, id: number) => () => {
    axios
      .post("https://shipodailyapi.shipsy.in/comments/updateLikesAndShare", {
        articleId: id,
        type
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  return (
    <ErrorBoundary>
      <AppProvider
        value={{
          news,
          headlines,
          popularNews,
          likeAndShareHandler,
          isSigningIn,
          isFetchingNews,
          fetchNews,
          setIsSigningIn,
          setIsLoggedIn
        }}
      >
        <Router>
          <div className="shipsy-news">
            <Nav />
            <Switch>
              <Route exact path="/">
                <Main />
              </Route>
            </Switch>
            <Chatbot />
          </div>
        </Router>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
