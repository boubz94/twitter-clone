import React, { useEffect, useState } from "react";
import { Comment, Tweet } from "../typings";
import TimeAgo from "react-timeago";
import {
  ChatAltIcon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { fetchComment } from "../utils/fetchComments";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);

  const refreshComment = async () => {
    const comments: Comment[] = await fetchComment(tweet._id);
    setComments(comments);
  };

  useEffect(() => {
    refreshComment();
  }, []);
  console.log(comments);

  return (
    <div className="flex flex-col space-x-3 border-y p-5 border-gray-100">
      <div className="flex space-x-3">
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt=""
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, " ").toLowerCase()} .
            </p>
            <TimeAgo
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>

          <p className="pt-1">{tweet.text}</p>

          {tweet.image && (
            <img
              src={tweet.image}
              alt=""
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        <div className="but">
          <ChatAltIcon className="h-5 w-5 " />
          <p>5</p>
        </div>

        <div className="but">
          <SwitchHorizontalIcon className="h-5 w-5 " />
        </div>

        <div className="but">
          <HeartIcon className="h-5 w-5 " />
        </div>

        <div className="but">
          <UploadIcon className="h-5 w-5 " />
        </div>
      </div>
    </div>
  );
}

export default Tweet;