import React, { useState, SVGProps } from "react";
import {
  BellIcon,
  HashtagIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
  BookmarkIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import SideBarRow from "./SideBarRow";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  // const [mode, setMode] = useState<boolean>(false);

  // const renderThemeChanger = () => {
  //   const currentTheme = theme === "system" ? systemTheme : theme;

  //   if (currentTheme === "dark") {
  //     return (
  //       <SunIcon
  //         className="col-span-2 flex flex-col items-center px-4 md:items-start text-yellow-500 w-20 h-10  "
  //         role="button"
  //         onClick={() => setTheme("light")}
  //       />
  //     );
  //   } else {
  //     return (
  //       <MoonIcon
  //         className="col-span-2 flex flex-col items-center px-4 md:items-start text-gray-900 w-20 h-10"
  //         role="button"
  //         onClick={() => setTheme("dark")}
  //       />
  //     );
  //   }
  // };

  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      {/* {renderThemeChanger()} */}

      <SideBarRow Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={HashtagIcon} title="Explore" />
      <SideBarRow Icon={BellIcon} title="Notification" />
      <SideBarRow Icon={MailIcon} title="Messages" />
      <SideBarRow Icon={BookmarkIcon} title="Bookmark" />
      <SideBarRow Icon={CollectionIcon} title="Lists" />
      <SideBarRow
        // onClick={session ? signIn() : signOut()}
        Icon={UserIcon}
        title={session ? "Sign Out" : "Sign In"}
      />

      <SideBarRow Icon={DotsCircleHorizontalIcon} title="More" />
    </div>
  );
}

export default SideBar;
