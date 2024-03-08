import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import { login, logout } from "@/redux/reducers/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { Microphone } from "@/components/Microphone";
import HeroSection from "@/components/HeroSection";
import TrustedCompanies from "@/components/TrustedCompanies";
import SavingsSection from "@/components/SavingsSection";
import Revolutionize from "@/components/Revolutionize";
import RevolutionizeAsistans from "@/components/RevolutionizeAsistans";
import Simplify from "@/components/Simplify";
import CSSection from "@/components/CSSection";
import PricingOptions from "@/components/PricingOptions";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";

function landing() {
  const [isAuth, setIsAuth] = useState(false);
  // const dispatch = useDispatch();

  // const handleLogin = () => {
  //   dispatch(login("admin"));
  //   setIsAuth(true);
  // };

  const getAuthStatus = useSelector((state) => state.AuthReducer.isAuth);
  console.log("getAuthStatus", getAuthStatus);

  // function getLocalStream() {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: false, audio: true })
  //     .then((stream) => {
  //       window.localStream = stream; // A
  //       window.localAudio.srcObject = stream; // B
  //       window.localAudio.autoplay = true; // C
  //     })
  //     .catch((err) => {
  //       console.error(`you got an error: ${err}`);
  //     });
  // }

  // useEffect(() => {
  //   getLocalStream();
  // }, []);

  return (
    <div className="w-full h-screen bg-white">
      <Head>
        <title>Vieo.io</title>
      </Head>
      <HeroSection />
      <TrustedCompanies />
      <SavingsSection />
      <Revolutionize />
      <RevolutionizeAsistans />
      <Simplify />
      <CSSection />
      <PricingOptions />
      <Faqs />
      <Footer />
    </div>
  );
}

export default landing;
