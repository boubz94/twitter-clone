import { Comment } from "../typings";

export const fetchComment = async (tweetId: string) => {
  const res = await fetch(`/api/getComments?tweetId=${tweetId}`);
  const comments: Comment[] = await res.json();
  return comments;
};
