import React from 'react';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input.jsx';
import IconCloud from './ui/icon-cloud.jsx';

const Hero = () => {
    const placeholders = [
        "AAPL", "NVDA", "MSFT", "TSLA", "GOOG", "AMZN","META",
    ];
    
    const iconSlugs = [
        "apple", "nvidia", "tesla", "google", "amazon", "meta", "microsoft", "paypal",
        "spotify", "twitter", "uber", "roblox", "snapchat", "tiktok", "netflix", "intel",
        "amd", "visa", "mastercard", "intel", "cisco", "qualcomm", "adobe", "salesforce",
    ];
     
    const handleChange = (e) => {
        console.log(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    };    

    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 antialiased">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl space-y-8 lg:space-y-0 lg:space-x-10">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center space-y-6 lg:space-y-8">

            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">                
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
                  Invest Smarter.
                </span>
              </h1>

              <p className="mt-3 text-neutral-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Gain valuable insights on thousands of stocks in seconds.
              </p>
            </div>
            
            <div className="max-w-md w-full">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>

          <div>
            <IconCloud iconSlugs={iconSlugs} />
          </div>
          
        </div>
      </div>    
      );
}

export default Hero;