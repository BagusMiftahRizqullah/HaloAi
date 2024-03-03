import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import { login, logout } from "@/redux/reducers/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import HeroLanding from "@/images/HeroLanding.png";
function landing() {
  const [isAuth, setIsAuth] = useState(false);
  // const dispatch = useDispatch();

  // const handleLogin = () => {
  //   dispatch(login("admin"));
  //   setIsAuth(true);
  // };

  const getAuthStatus = useSelector((state) => state.AuthReducer.isAuth);
  console.log("getAuthStatus", getAuthStatus);
  // useEffect(() => {}, []);

  return (
    <div className="w-full h-screen bg-white">
      {/* Header */}
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        <div className="h-full flex flex-col lg:flex-row px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 relative">
            <Image src={HeroLanding} alt="" fill className="object-contain" />
          </div>
          {/* TEXT CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="text-4xl md:text-6xl font-bold">
              Make your contract with AI
            </h1>
            {/* DESC */}
            <p className="md:text-xl">
              Welcome to AI, where innovation and creativity converge with a
              Artificial intelligence, AI will be contact your customer.
            </p>
            {/* BUTTONS */}
            <div className="w-full flex gap-4">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                Subscribe
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black">
                View Feature
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default landing;
