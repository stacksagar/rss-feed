import React from "react";
import { Link } from "react-scroll";
import ChevronDouble from "../svgs/ChevronDouble";

const HomeHero = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12">
      <div className="nav">
        <img
          src="https://uploads-ssl.webflow.com/624e7afdea5958e95b8be696/624ea02ae4e09051c5145f1b_Group%203.png"
          width="50"
          alt=""
          className="image"
        />
      </div>
      <div>
        <h1 className="heading">
          Get the latest buzz <br />
          without the fluff.
        </h1>
      </div>
      <p className="subheading">
        The world’s most important news, <br />
        from 100+ trusted global sources, in one place.
      </p>
      <div className="button-wrapper">
        <div className="button-item---brix">
          <a
            data-w-id="fecd478a-a7d8-d556-2e19-117968438a90"
            href="https://bulletinbrew.beehiiv.com/"
            target="_blank"
            className="button-v9---brix w-inline-block"
          >
            <div className="text-block">Get daily digest ⇢</div>
          </a>
        </div>
        <div className="button-item---brix">
          <a
            data-w-id="fecd478a-a7d8-d556-2e19-117968438a90"
            href="https://bulletinbrew.beehiiv.com/"
            target="_blank"
            className="button-v9---brix button-v5---brix w-button"
          >
            <div className="text-block">Get daily digest ⇢</div>
          </a>
        </div>
      </div>
      <div className="info">Become a part of the 1,000+ readers</div>
      <br />
      <Link
        spy={true}
        smooth={true}
        duration={500}
        to="all-news"
        className="w-full"
      >
        <div className="w-full cursor-pointer block animate-bounce">
          <button className="w-32 flex items-center justify-center text-center mx-auto">
            <ChevronDouble />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default HomeHero;
