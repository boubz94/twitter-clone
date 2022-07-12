import React, { useState, SVGProps, useEffect } from "react";
import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import SideBarRow from "./SideBarRow";
import { signIn, signOut, useSession } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  console.log(" session :" + session);

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      {/* {renderThemeChanger()} */}
      {session ? (
        <p className="font-bold text-lg">Welcome {session?.user?.name}</p>
      ) : (
        <p className="font-bold text-lg">Welcome to the Twitter Clone</p>
      )}

      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notification" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmark" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow
        Icon={UserIcon}
        onClick={session ? signOut : signIn}
        title={session ? "Sign Out" : "Sign In"}
      />
      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default SideBar;
