import React from 'react'

function PricingOptions() {
  return (
    <div className="flex flex-col items-center px-16 py-20 bg-white max-md:px-5">
      <div className="mt-8 text-base font-semibold leading-6 text-center text-zinc-900 max-md:max-w-full">
        Affordable
      </div>
      <div className="mt-4 text-5xl font-bold text-center leading-[57.6px] text-zinc-900 max-md:max-w-full max-md:text-4xl">
        Pricing Options
      </div>
      <div className="mt-6 text-lg leading-7 text-center whitespace-nowrap text-neutral-700">
        Choose the plan that suits your needs and budget.
      </div>
      <div className="flex gap-0 mt-12 text-base leading-6 whitespace-nowrap max-md:mt-10">
        <div className="grow justify-center px-6 py-2 text-white bg-zinc-900 max-md:px-5">
          Monthly
        </div>
        <div className="grow justify-center px-6 py-2 border border-solid border-zinc-900 text-zinc-900 max-md:px-5">
          Yearly
        </div>
      </div>
      <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch p-8 border border-solid border-zinc-900 max-md:px-5 max-md:mt-8">
              <div className="flex flex-col px-20 font-bold text-center whitespace-nowrap max-md:px-5">
                <div className="self-center text-xl leading-7 text-neutral-700">
                  Basic Plan
                </div>
                <div className="mt-2 text-6xl leading-[67.2px] text-zinc-900 max-md:text-4xl">
                  $19/mo
                </div>
              </div>
              <div className="flex gap-4 mt-10 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">24/7 Support</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Personalized Assistance</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Fast Response Time</div>
              </div>
              <div className="justify-center items-center px-16 py-3 mt-32 text-base leading-6 text-white whitespace-nowrap rounded-md bg-zinc-900 max-md:px-5 max-md:mt-10">
                Get Started
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow self-stretch p-8 border border-solid border-zinc-900 max-md:px-5 max-md:mt-8">
              <div className="flex flex-col px-20 font-bold text-center whitespace-nowrap max-md:px-5">
                <div className="self-center text-xl leading-7 text-neutral-700">
                  Business Plan
                </div>
                <div className="mt-2 text-6xl leading-[67.2px] text-zinc-900 max-md:text-4xl">
                  $29/mo
                </div>
              </div>
              <div className="flex gap-4 mt-10 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Advanced Analytics</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">CRM Integration</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Priority Support</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Customizable Features</div>
              </div>
              <div className="justify-center items-center px-16 py-3 mt-20 text-base leading-6 text-white whitespace-nowrap bg-violet-600 rounded-md max-md:px-5 max-md:mt-10">
                Get Started
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-8 border border-solid border-zinc-900 max-md:px-5 max-md:mt-8">
              <div className="flex flex-col px-20 font-bold text-center whitespace-nowrap max-md:px-5">
                <div className="self-center text-xl leading-7 text-neutral-700">
                  Enterprise Plan
                </div>
                <div className="mt-2 text-6xl leading-[67.2px] text-zinc-900 max-md:text-4xl">
                  $49/mo
                </div>
              </div>
              <div className="flex gap-4 mt-10 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Dedicated Account Manager</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Advanced Security Features</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Custom API Integration</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">24/7 Priority Support</div>
              </div>
              <div className="flex gap-4 mt-4 text-base leading-6 text-neutral-700">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c699b2471c3e9c13e8d65d231f46de4ddaa64ae744bf2f729fb7552b45cf028d?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&"
                  className="shrink-0 w-6 aspect-square"
                />
                <div className="flex-auto">Customizable Branding</div>
              </div>
              <div className="justify-center items-center px-16 py-3 mt-10 text-base leading-6 text-white whitespace-nowrap bg-red-400 rounded-md max-md:px-5">
                Get Started
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingOptions