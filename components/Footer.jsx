import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col px-16 py-20 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
        <div className="text-2xl font-black leading-9 text-zinc-900">Vieo</div>
        <div className="flex gap-5 justify-between my-auto max-md:flex-wrap">
          <div className="flex flex-auto gap-5 justify-between text-base font-semibold leading-6 text-zinc-900">
            <div className="grow">Pricing</div>
            <div>Contact Us</div>
            <div>FAQs</div>
            <div className="grow">Developers </div>
          </div>
          <div className="flex flex-auto gap-3 justify-end pl-20 max-md:flex-wrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/807fb89856820dce9e9b9ec80834c875dbb9a46f09461f113597b081249855f1?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e2d82e463a2b12a258670bc2489bf153eec902d66f4ad5a3fdd69f1ece061e47?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a3c2f5ce8f1400a448e043dcd0b27cc3bbce98987a1ac4fab1bf8a641dc7e2?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a86d65ac9314859e7bfc9289d8913a8ba9a2b660f772776f52b283766eebc72e?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
              className="shrink-0 w-6 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a9b0a946aa3585cff9ab44b8beddf8fa4c996e6686f8ea28aba8fc93e3d1238?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
              className="shrink-0 w-6 aspect-square"
            />
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-20 h-px border border-solid bg-zinc-900 border-zinc-900 max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-5 justify-between self-center mt-8 text-sm leading-5 max-md:flex-wrap">
        <div className="grow whitespace-nowrap text-zinc-900">
          © 2024 Vieo. All rights reserved.
        </div>
        <div className="flex flex-auto gap-5 justify-between text-neutral-700">
          <div className="grow underline whitespace-nowrap">Privacy Policy</div>
          <div className="flex-auto underline">Terms and Conditions</div>
          <div className="grow underline whitespace-nowrap">Cookie Policy</div>
        </div>
      </div>
    </div>
  )
}

export default Footer