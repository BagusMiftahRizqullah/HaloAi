import React from 'react'
import FlatList from 'flatlist-react';


function TrustedCompanies() {
    const companies = [
        {
            name: "Google",
            logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/79dc252b0f779a07e87c845c905ad37ae85230a53c066452f769c4fe1b6e7f6a?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        },
        {
            name: "Facebook",
            logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/39702597a94ee12986afc46a215075a6cf892431cb8e165ce47ff7f87a6b8d33?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        },
        {
            name: "Hayuq",
            logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/79dc252b0f779a07e87c845c905ad37ae85230a53c066452f769c4fe1b6e7f6a?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        },
        {
            name: "Taxi",
            logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/39702597a94ee12986afc46a215075a6cf892431cb8e165ce47ff7f87a6b8d33?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        },
        {
            name: "Twitter",
            logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/79dc252b0f779a07e87c845c905ad37ae85230a53c066452f769c4fe1b6e7f6a?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        },
        {
            name: "Instagram",
            logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/39702597a94ee12986afc46a215075a6cf892431cb8e165ce47ff7f87a6b8d33?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        },
        // {
        //     name: "LinkedIn",
        //     logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/79dc252b0f779a07e87c845c905ad37ae85230a53c066452f769c4fe1b6e7f6a?apiKey=8420c0a8e03b459ea0bb22c2073ccc25&",
        // }
    ]


 const  renderCompanies = (value, index) => {
        return (
            <img
                key={index}
                loading="lazy"
                src={value.logo}
                className="shrink-0 max-w-full aspect-[3.57] w-[200px]"
            />
        );
      }

  return (
    
    <div className="flex flex-col py-20 bg-white">       
      <div className="self-center text-xl font-medium leading-8 text-zinc-900 max-md:max-w-full">
        Trusted by leading companies around the globe
      </div>

      <div className="flex gap-5 justify-between px-5 mt-12 max-md:flex-wrap max-md:mt-10">
      <FlatList
        className="flex gap-5"
          keyExtractor={(item, index) => index}
          list={companies}
          renderItem={renderCompanies}
          renderWhenEmpty={() => <div>List is empty!</div>}
        />
      </div>
    </div>

  )
}

export default TrustedCompanies