import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
function Widget() {
  return (
    <div className=" col-span-2 px-2 mt-2 hidden lg:inline ">
      {/* searchBox */}
      <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-3 mt-2">
        <SearchIcon className="h-5 w-5 text-gray-400" />
        <input
          className=" flex-1 outline-none bg-transparent"
          type="text"
          placeholder="Search"
        />
      </div>

      {/* twitter timeline */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="IzBoubou"
        options={{ height: 1000 }}
        noScrollbar={true}
      />
    </div>
  );
}

export default Widget;
