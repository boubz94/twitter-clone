import React, { useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";

function TweetBox() {
  const [input, setInput] = useState<string>("");

  return (
    <div className="flex space-x-2 p-5">
      <img
        className=" object-cover h-14 w-14 rounded-full mt-4"
        src="https://links.papareact.com/gll"
        alt=""
      />

      <div className="flex  flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder="What's up"
          />
          <div className="flex items-center ">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon className="twBoxButton" />
              <SearchCircleIcon className="twBoxButton" />
              <EmojiHappyIcon className="twBoxButton" />
              <CalendarIcon className="twBoxButton" />
              <LocationMarkerIcon className="twBoxButton" />
            </div>
            <button
              disabled={!input}
              className="bg-twitter rounded-full px-5 py-2 text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
