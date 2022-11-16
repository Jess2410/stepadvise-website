import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Services from "../components/Services/Services";
import Head from "next/head";
import Engagements from "../components/Engagements/Engagements";

import "../styles/Home.module.css";
import { useEffect } from "react";

// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

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
      <Services />
      <Engagements />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
