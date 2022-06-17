import React, { useEffect, useRef } from "react";
import HeadNavbar from "../components/HeadNavbar";
import { useRootContext } from "../context";
import Loading from "../svgs/Loading";
import HomeHero from "./HomeHero";
import { Element } from "react-scroll";

function Single({ news }) {
  return (
    <a href={`${news.link}`} target="_blank">
      <div className="group m-2 p-2 rounded">
        <p className="text-base font-medium text-blue-600 dark:text-blue-300 group-hover:underline">
          {news.title}
        </p>
        {!news.content?.includes("<") && (
          <p className="text-xs group-hover:underline w-full truncate text-gray-600 dark:text-gray-400">
            {news.content || news.description}.....
          </p>
        )}
        <p className="flex justify-end text-xs text-gray-800 font-medium dark:text-gray-400">
          <span>{(news?.pubDate).split(" ")[0]}</span>
        </p>
      </div>
    </a>
  );
}

function Category({ obj }) {
  return (
    <div className="w-full md:w-6/12 lg:w-4/12 2xl:w-3/12 ">
      <div className="bg-gray-300 dark:bg-black bg-opacity-20 dark:bg-opacity-20 mb-6 mx-3">
        <h2 className="text-xl font-bold px-4 py-3 bg bg-gray-300 dark:bg-gray-900 bg-opacity-50 dark:bg-opacity-10 text-black dark:text-orange-400">
          {obj?.title}
        </h2>
        <div id="news" className="w-full overflow-y-auto">
          {obj?.news?.map((news, i) => (
            <Single key={i} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Content = () => {
  const { state } = useRootContext();
  const activeCategory = state.currentNews[state.active_category];

  return (
    <div className="bg-white w-full min-h-screen overflow-y-auto text-gray-800 dark:bg-gray-900 dark:text-gray-200">
      <HeadNavbar />
      {state.active_category === "blogs" && <HomeHero />}
      <Element name="all-news">
        <div className="w-full min-h-screen py-6 px-3 flex flex-wrap justify-start items-start">
          {state.fetching && (
            <div className="fixed w-full h-screen inset-0 z-10 m-auto flex items-center justify-center">
              <Loading />
            </div>
          )}
          {activeCategory?.map((obj, i) => (
            <Category obj={obj} key={i} />
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Content;
