import React,{useState} from 'react'
import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegStopCircle } from "react-icons/fa";
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
        <div className="h-full flex flex-col pt-20 lg:flex-row px-4  sm:px-8 md:px-12 lg:px-20 xl:px-48">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
            {/* TITLE */}
            <h1 className="font-sans text-4xl md:text-6xl font-bold text-second_primary">
              Welcome to the new technology of the future.
            </h1>
            {/* DESC */}
            <p className=" font-sans md:text-xl">
              Vieo.io innovation and creativity converge with a
              Artificial intelligence, AI will be contact your customer.
            </p>
            {/* BUTTONS */}
            {/* <div className="w-full flex gap-4">
              <button className="p-4 rounded-lg ring-1 ring-primary  bg-primary text-white">
                Subscribe
              </button>
              <button className="p-4 rounded-lg ring-1 ring-black bg-background">
                View Feature
              </button>
            </div> */}
          </div>
         <div>
          
         </div>
              <div className='ml-32 pt-16 max-w-md flex flex-col justify-between  '>
                  <div className="h-1/2 lg:h-full lg:w-64 relative">
                      <div className='lg:col-span-2 col-span-1 bg-second_background flex w-full border p-4 rounded-lg align-middle justify-center'>
                      <div className='flex flex-row w-full pb-4 justify-between'>
                          <p clasname='font-sans text-gray-600'>Jason</p>
                          <button  onClick={() =>{ setJasonPlay(!jasonPlay),console.log("Jason speak UP!")}} >
                          {
                              jasonPlay ? (
                                <div>
                                  <FaRegStopCircle alt="CircleStop" size={32}/>
                                </div>
                              ): (
                                 <div>
                                  <FaRegCirclePlay alt="CirclePlay" size={32}/>
                                 </div>
                              )
                            }
                          </button>
                      </div>
                    </div>
                </div>

                <div className="h-1/2 lg:h-full lg:w-64 relative">
                      <div className='lg:col-span-2 col-span-1 bg-second_background flex w-full border p-4 rounded-lg align-middle justify-center'>
                      <div className='flex flex-row w-full pb-4 justify-between'>
                             <p clasname='font-sans text-gray-600'>Eric</p>
                          <button  onClick={() =>{setEricPlay(!ericPlay), console.log("Eric speak UP!")}} >
                          {
                              ericPlay ? (
                                <div>
                                  <FaRegStopCircle alt="CircleStop" size={32}/>
                                </div>
                              ): (
                                 <div>
                                  <FaRegCirclePlay alt="CirclePlay" size={32}/>
                                 </div>
                              )
                            }
                          </button>
                      </div>
                    </div>
                </div>
            </div>
            <div className=' ml-12 pt-16 max-w-md flex flex-col justify-between '>
            <div className="h-1/2 lg:h-full lg:w-64 relative">
                      <div className='lg:col-span-2 col-span-1 bg-second_background flex w-full border p-4 rounded-lg align-middle justify-center'>
                      <div className='flex flex-row w-full pb-4 justify-between'>
                          <p clasname='font-sans text-gray-600'>Cashe</p>
                          <button  onClick={() => {setCashePlay(!cashePlay), console.log("Cashe speak UP!")}} >
                          {
                              cashePlay ? (
                                <div>
                                  <FaRegStopCircle alt="CircleStop" size={32}/>
                                </div>
                              ): (
                                 <div>
                                  <FaRegCirclePlay alt="CirclePlay" size={32}/>
                                 </div>
                              )
                            }
                        
                          </button>
                      </div>
                    </div>
                </div>


                <div className="h-1/2 lg:h-full lg:w-64 relative">
                    <div className='lg:col-span-2 col-span-1 bg-second_background flex w-full border p-4 rounded-lg align-middle justify-center'>
                      <div className='flex flex-row w-full pb-4 justify-between'>
                          <p clasname=' font-sans text-gray-600'>Luna</p>
                          <button  onClick={() => {setLunaPlay(!lunaPlay), console.log("Luna speak UP!")}} >
                            {
                              lunaPlay ? (
                                <div>
                                  <FaRegStopCircle alt="CircleStop" size={32}/>
                                </div>
                              ): (
                                 <div>
                                  <FaRegCirclePlay alt="CirclePlay" size={32}/>
                                 </div>
                              )
                            }
                         
                          </button>
                      </div>
                    </div>
                </div>
            </div>
          {/* TEXT CONTAINER */}
        </div>
      </motion.div>
    </div>
  )
}
