import React from 'react'
import WordPullUp from "/Users/taarik/Desktop/CodingProjects/investment-advisor/src/components/ui/word-pull-up.jsx";
// Import the BentoGrid component from Magic UI
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'; // Replace 'magic-ui-library' with the actual package name if different
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

const About = () => {
  const features = [
    { name: 'Feature 1', description: 'Description for feature 1', Icon: BellIcon, href: '#', cta: 'Learn More' },
    { name: 'Feature 2', description: 'Description for feature 2', Icon: Share2Icon, href: '#', cta: 'Learn More' },
    // Add more features as needed
  ];

  return (
    <div>
      <WordPullUp
        className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8"
        words="About Us"
      />
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  )
}

export default About
