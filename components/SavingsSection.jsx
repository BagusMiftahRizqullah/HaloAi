import React from 'react'
import Image from 'next/image';
import AiChat from '@/images/AiChat.png';

function SavingsSection() {
  return (
    <div className="flex flex-col justify-center px-16 py-20 bg-white max-md:px-5">
    <div className="mt-8 max-md:mr-1 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
       
        <Image className="grow w-full aspect-[0.96] max-md:mt-10 max-md:max-w-full" src={AiChat} alt="AiChat"  />
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto text-zinc-900 max-md:mt-10 max-md:max-w-full">
            <div className="text-base font-semibold leading-6 text-center max-md:max-w-full">
              Savings
            </div>
            <div className="mt-4 text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Reduce Costs with AI Voice Assistant
            </div>
            <div className="mt-6 text-lg leading-7 max-md:max-w-full">
              Our AI voice assistant automates repetitive tasks, saving you
              time and money. Experience cost reduction like never before.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SavingsSection