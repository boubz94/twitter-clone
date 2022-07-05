import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Feed from "../components/Feed";
import SideBar from "../components/SideBar";
import Widget from "../components/Widget";

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone Boubou</title>
      </Head>

      <main className="grid grid-cols-9">
        <SideBar />
        <Feed />
        {/* Widgets */}
        <Widget />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const tweets = await fetchTweets();
  return {
    props: {}, // will be passed to the page component as props
  };
}
