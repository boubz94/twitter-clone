import React, { Dispatch, SetStateAction, useState } from "react";
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { Tweet, TweetBody } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import toast from "react-hot-toast";

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
}

function TweetBox({ setTweets }: Props) {
  const { data: session } = useSession();
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const imageInputRef = useRef<HTMLInputElement>(null);

  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setImageUrlBoxIsOpen((prev) => !prev);
  };
  /**
   * If the image input value is not empty, set the image state to the image input value, clear the image
   * input value, and close the image url box.
   * @param e - React.MouseEvent<HTMLButtonElement, MouseEvent>
   * @returns the value of the imageInputRef.current.value.
   */
  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault;
    if (!imageInputRef.current?.value) return;

    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";
    setImageUrlBoxIsOpen(false);
  };

  /**
   * PostTweet is a function that takes no arguments and returns a promise that resolves to a value of
   * type void.
   */
  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || "Unknown user",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      image: image,
    };

    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });

    const json = await result.json();

    console.log("HERE tweetInfo" + JSON.stringify(tweetInfo));

    const newTweets = await fetchTweets();
    // console.log("newTweets" + JSON.stringify(newTweets));

    setTweets(newTweets);

    toast("Tweet posted !", {
      icon: "🚀",
    });
    return json;
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault;

    // create a function to post the tweet
    postTweet();
    setInput("");
    setImage("");
    setImageUrlBoxIsOpen(false);
  };

  return (
    <div className="flex space-x-2 p-5">
      <img
        className=" object-cover h-14 w-14 rounded-full mt-4"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt=""
      />

      <div className="flex  flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            placeholder={`What'up ${session?.user?.name}`}
          />
          <div className="flex items-center ">
            <div className="flex flex-1 space-x-2 text-twitter">
              <PhotographIcon onClick={handleOpen} className="twBoxButton" />
              <SearchCircleIcon className="twBoxButton" />
              <EmojiHappyIcon className="twBoxButton" />
              <CalendarIcon className="twBoxButton" />
              <LocationMarkerIcon className="twBoxButton" />
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input || !session}
              className="bg-twitter rounded-full px-5 py-2 text-white disabled:opacity-40"
            >
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className="mt-5 flex rounded-lg bg-twitter/80 py-2 px-4">
              {" "}
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter image url"
              />
              <button
                onClick={addImageToTweet}
                type="submit"
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}
          {image && (
            <img
              className="mt-10 rounded-xl object-contain h-40 w-full shadow-lg"
              src={image}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
