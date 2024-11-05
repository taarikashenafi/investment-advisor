import React from 'react';
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input.jsx';
import IconCloud from './ui/icon-cloud.jsx';
import { RainbowButton } from './ui/rainbow-button.jsx';
import { ArrowRightIcon } from '@radix-ui/react-icons';

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
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-center justify-center space-y-6 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
            <span className="bg-clip-text bg-gradient-to-b from-neutral-700 via-neutral-500 to-neutral-300">
              Invest Smarter.
            </span>
          </h1>
          <p className="mt-4 text-neutral-500 text-base md:text-xl max-w-full">
            Gain valuable insights on thousands of stocks in seconds.
          </p>
          <div className="w-full max-w-md" type="text">
            <PlaceholdersAndVanishInput
              placeholders={placeholders}
              onChange={handleChange}
              onSubmit={onSubmit}
            />
          </div>
          <RainbowButton className="mt-8" onClick={() => { window.location.href = "/dashboard"; }}>
            Try Now
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </RainbowButton>
        </div>

        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto flex justify-center">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
