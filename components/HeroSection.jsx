import React,{useState} from 'react'
import { motion } from "framer-motion";
import { FaCircleStop } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
export default function HeroSection() {
  const [lunaPlay, setLunaPlay] = useState(false);
  const [cashePlay, setCashePlay] = useState(false);
  const [jasonPlay, setJasonPlay] = useState(false);
  const [ericPlay, setEricPlay] = useState(false);


  return (
    <div>
        <motion.div
          className="h-full"
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1 }}
        >
      <div className="flex overflow-hidden relative flex-col items-center p-20 min-h-[795px] max-md:px-5">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/527a461000ec5bd847d33bddeb6b2423ce56e34b4c05a5c9a26302a2fe4c0197?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative mt-24 text-6xl font-black text-center text-orange-400 bg-clip-text leading-[67px] w-[846px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        24/7 Customer Support AI <span className="text-orange-400">Voices</span>{" "}
        like a human
      </div>
      <div className="relative mt-6 text-lg leading-7 text-center text-neutral-700 w-[846px] max-md:max-w-full">
        Imagine an AI agent working tirelessly to answer customer questions,{" "}
        <br />
        handle inquiries, and boost sales.
      </div>
      <div className="flex relative gap-4 pt-4 mt-6 text-base font-bold leading-6 whitespace-nowrap">
       <button
            onClick={()=>  console.log("GET Start You Free Trial")}
            >
          <div className="grow justify-center px-6 py-3 text-white rounded-md border-2 border-fuchsia-500 border-solid bg-zinc-900 max-md:px-5">
            Start You Free Trial
          </div>
        </button>

        <button
            onClick={()=>  console.log("GET SIGNUP")}
            >
            <div className="grow justify-center px-6 py-3 bg-white rounded-md border border-solid border-zinc-900 text-zinc-900 max-md:px-5">
              Sign Up
            </div>
        </button>
      </div>
      <div className="flex relative justify-center items-center px-16 py-3.5 mt-6 max-w-full w-[846px] max-md:px-5">
        <div className="flex gap-5 justify-between max-w-full w-[600px] max-md:flex-wrap">
        <button  onClick={() =>{ setJasonPlay(!jasonPlay),console.log("Jason speak UP!")}} >
                          {
                              jasonPlay ? (
                                <div>
                                  <FaCircleStop alt="CirclePlay" size={93}/>
                                 </div>
                              ): (
                                <div>
                                  <FaPlayCircle alt="CircleStop" size={93}/>
                                </div>
                                
                              )
                            }
          </button>
          <button  onClick={() =>{ setEricPlay(!ericPlay),console.log("Jason speak UP!")}} >
                          {
                              ericPlay ? (
                                <div>
                                  <FaCircleStop alt="CirclePlay" size={93}/>
                                 </div>
                              ): (
                                <div>
                                <FaPlayCircle alt="CircleStop" size={93}/>
                              </div>
                                
                              )
                            }
          </button>
          <button  onClick={() =>{ setCashePlay(!cashePlay),console.log("Jason speak UP!")}} >
                          {
                              cashePlay ? (
                                <div>
                                  <FaCircleStop alt="CirclePlay" size={93}/>
                                 </div>
                              ): (
                                  <div>
                                  <FaPlayCircle alt="CircleStop" size={93}/>
                                </div>
                              )
                            }
          </button>
          <button  onClick={() =>{ setLunaPlay(!lunaPlay),console.log("Jason speak UP!")}} >
                          {
                              lunaPlay ? (
                                <div>
                                <FaCircleStop alt="CirclePlay" size={93}/>
                               </div>
                              ): (
                                   <div>
                                   <FaPlayCircle alt="CircleStop" size={93}/>
                                 </div>
                              )
                            }
          </button>
        </div>
      </div>
    </div>
      </motion.div>
    </div>
  )
}
