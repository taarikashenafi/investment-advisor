import React from 'react';
import Layout from './Layout';
import { RainbowButton } from './ui/rainbow-button.jsx';
import TypingAnimation from './ui/typing-animation';
import { SparklesIcon, UsersIcon, ChartBarIcon } from 'lucide-react';
import { ArrowRightIcon } from '@radix-ui/react-icons';

const Mission = () => {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-white dark:from-gray-900 dark:to-gray-800 opacity-50" />
        
        {/* Main content */}
        <div className="relative px-4 py-20 sm:px-6 lg:px-8">
          {/* Header section */}
          <div className="text-center mb-16">
            <TypingAnimation
              className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8"
              text="Were on a mission to make investing accessible for all."
            /> 
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everyone and their mother will tell you to invest, but no one is willing to help
              you get your feet on the ground. That's where we come in.
            </p>
          </div>

          {/* Features grid */}
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
              {/* Card 1 */}
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center gap-x-4 mb-4">
                  <SparklesIcon className="h-6 w-6 text-purple-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Simple & Intuitive</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Clear, jargon-free guidance that makes investing approachable for beginners.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center gap-x-4 mb-4">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Community Focused</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Join a supportive community of like-minded investors at all experience levels.
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <div className="flex items-center gap-x-4 mb-4">
                  <ChartBarIcon className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Data-Driven</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Make informed decisions with our comprehensive market analysis tools.
                </p>
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-20 text-center">
            <RainbowButton className="mt-8" onClick={() => navigate('/dashboard')}>
              Try Now
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </RainbowButton>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;