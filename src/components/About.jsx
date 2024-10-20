import React from 'react';
import RetroGrid from "@/components/ui/retro-grid";

const About = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-center">
            About Our Investment Advisor App
          </h1>
          <p className="mt-4 text-neutral-500 text-lg md:text-2xl max-w-2xl text-center">
            Our app helps you make smarter investment decisions by providing relevant information on stocks. 
            Search for a stock to see if it's bullish or bearish, and read the latest news articles about it.
          </p>
          <div className="mt-8 text-left">
            <h2 className="text-3xl font-semibold">Sentiment Score Definition:</h2>
            <p className="mt-2 text-neutral-500 text-lg">
              x &lt;= -0.35: Bearish; -0.35 &lt; x &lt;= -0.15: Somewhat-Bearish; -0.15 &lt; x &lt; 0.15: Neutral; 
              0.15 &lt;= x &lt; 0.35: Somewhat-Bullish; x &gt;= 0.35: Bullish
            </p>
            <h2 className="text-3xl font-semibold mt-6">Relevance Score Definition:</h2>
            <p className="mt-2 text-neutral-500 text-lg">
              0 &lt; x &lt;= 1, with a higher score indicating higher relevance.
            </p>
          </div>
          <div className="mt-8 text-left">
            <h2 className="text-3xl font-semibold">Example News Feed:</h2>
            <div className="mt-4">
              <h3 className="text-2xl font-bold">2 Dividend Stocks to Double Up On Right Now</h3>
              <p className="mt-2 text-neutral-500 text-lg">
                More is better when it comes to these dividend giants.
              </p>
              <p className="mt-2 text-neutral-500 text-lg">
                <strong>Source:</strong> Motley Fool
              </p>
              <p className="mt-2 text-neutral-500 text-lg">
                <strong>Published:</strong> 2024-10-20
              </p>
              <p className="mt-2 text-neutral-500 text-lg">
                <strong>Sentiment:</strong> Somewhat-Bullish
              </p>
              <p className="mt-2 text-neutral-500 text-lg">
                <strong>Tickers:</strong> AAPL (Somewhat-Bullish), COST (Somewhat-Bullish)
              </p>
            </div>
          </div>
        </div>
      </div>
      <RetroGrid />
    </div>
  );
}

export default About;