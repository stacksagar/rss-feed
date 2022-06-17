import React, { useRef, useEffect, useState } from "react";
import Content from "./components/Content";
import { useRootContext } from "./context";
import rssFeeds from "./utils/rssFeeds";
import axios from "axios";

const App = () => {
  const { state, dispatch } = useRootContext();

  useEffect(() => {
    const active = rssFeeds[state.active_category];
    const notFetched = state.currentNews[state.active_category]?.length < 1;
    if (notFetched) {
      dispatch({ type: "fetching_start" });
      active?.forEach((obj) => {
        axios
          .get(obj.link)
          .then(function (res) {
            dispatch({
              type: "set_currentnews",
              payload: {
                category: state.active_category,
                news: res.data?.items,
                title: obj.title,
              },
            });
            dispatch({ type: "fetching_end" });
          })
          .catch(function (error) {
            alert(error.message);
          });
      });
    }
  }, [state.active_category]);

  useEffect(() => {
    dispatch({ type: "set_active_category", payload: "blogs" });
  }, []);

  return <Content />;
};

export default App;
