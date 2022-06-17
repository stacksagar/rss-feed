import React, { useEffect } from "react";
import { useRootContext } from "../context";
import themeToggle from "../utils/themeToggle";
import MenuIcon from "../svgs/MenuIcon";
import RemoveIcon from "../svgs/Remove";

function NavButton({ title, active }) {
  const { dispatch } = useRootContext();
  return (
    <button
      onClick={() => dispatch({ type: "set_active_category", payload: title })}
      className={`${
        active && "font-semibold border-b-2 "
      } w-fit p-4 capitalize border-black dark:border-white`}
    >
      {title.split("_").join(" ")}
    </button>
  );
}

const HeadNavBar = () => {
  const { state, dispatch } = useRootContext();
  function themeChanger() {
    dispatch({ type: "toggle_theme" });
  }
  useEffect(() => {
    themeToggle();
  }, [state.darktheme]);
  return (
    <div className="sticky flex justify-center items-start md:items-center sm:pl-3 sm:pr-12 lg:pl-10 lg:pr-10 top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-lg">
      <div className="w-full px-5 relative h-14 flex justify-between items-center sm:hidden">
        <img
          className="w-8 h-8 rounded"
          src="https://cdn-icons-png.flaticon.com/512/124/124033.png"
          alt=""
        />
        <button onClick={() => dispatch({ type: "toggle_nav" })}>
          {state.navOpen ? <RemoveIcon /> : <MenuIcon />}
        </button>
        {state.navOpen && (
          <div className="absolute right-0 pl-3 pb-3 z-40 top-full flex flex-col shadow-md bg-gray-100 dark:bg-gray-800 w-fit max-h-screen overflow-y-auto">
            {state.categorie_names.map((name) => (
              <NavButton
                active={state.active_category === name}
                key={name}
                title={name}
              />
            ))}
          </div>
        )}
      </div>

      <div className="hidden sm:flex justify-center flex-wrap">
        {state.categorie_names.map((name) => (
          <NavButton
            active={state.active_category === name}
            key={name}
            title={name}
          />
        ))}
      </div>
      <div
        style={{ minWidth: "56px" }}
        onClick={themeChanger}
        className="group fixed z-20 bottom-5 right-5 cursor-pointer px-0.5 h-6 rounded-full flex justify-between items-center bg-gray-500 dark:bg-white"
      >
        <div
          style={{
            transition: "all .4s",
            width: "23px",
            height: "23px",
            left: `${state.darktheme ? "32px" : "1px"}`,
          }}
          className={`transform group-hover:scale-75 absolute bg-gray-900 rounded-full inset-y-0 my-auto`}
        />
        <span className="text-sm">🌜</span>
        <span className="text-sm">🌞</span>
      </div>
    </div>
  );
};

export default HeadNavBar;
