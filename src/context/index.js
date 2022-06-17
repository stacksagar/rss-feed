import { createContext, useReducer, useContext } from "react";
import { MergeNews } from "./utilities";

const State = {
  darktheme: false,
  categorie_names: [
    "blogs",
    "news",
    "education",
    "tech",
    "tv_programs",
    "business",
    "entertainment",
    "politics",
    "investing",
    "science",
  ],
  active_category: "",
  currentNews: {
    news: [],
    blogs: [],
    education: [],
    tech: [],
    tv_programs: [],
    business: [],
    entertainment: [],
    politics: [],
    investing: [],
    science: [],
  },
  fetching: false,
  navOpen: false,
};

const reducer = (state = State, action) => {
  const { type, payload } = action;
  switch (type) {
    case "fetching_start":
      return { ...state, fetching: true };
    case "fetching_end":
      return { ...state, fetching: false };

    case "toggle_nav":
      return { ...state, navOpen: !state.navOpen };

    case "set_currentnews":
      return {
        ...state,
        currentNews: MergeNews(state.currentNews, payload),
      };
    case "toggle_theme":
      return { ...state, darktheme: !state.darktheme };
    case "set_active_category":
      return { ...state, active_category: payload };
    default:
      return state;
  }
};

const RootContext = createContext();

const RootProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, State);
  return (
    <RootContext.Provider value={{ state, dispatch }}>
      {children}
    </RootContext.Provider>
  );
};

const useRootContext = () => useContext(RootContext);

export { RootProvider, useRootContext };
