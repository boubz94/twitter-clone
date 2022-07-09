import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widget from "../components/Widget";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets);

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone Boubou</title>
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
        <SideBar />
        <Feed tweets={tweets} />
        {/* Widgets */}
        <Widget />
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    }, // will be passed to the page component as props
  };
};
