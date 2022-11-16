import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import Quality from "../components/Quality/Quality";
import Services2 from "../components/Services2/Services2";
import Head from "next/head";
import "../styles/Home.module.css";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Head>
        <title>StepAdvise</title>
      </Head>
      <Header />
      <Banner />
      <Services2 />
      <Quality />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
