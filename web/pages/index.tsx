import Head from "next/head";
import BackgroundCircles from "../components/BackgroundCircles";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeroAlt from "../components/HeroAlt";

const Home = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory overflow-scroll">
      <Head>
        <title className="">Hanne's portfolio</title>
      </Head>
      <Header />
      <Hero />
      <HeroAlt />
    </div>
  );
};

export default Home;
