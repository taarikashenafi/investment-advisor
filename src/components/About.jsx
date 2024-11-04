import React from 'react'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid'; // Replace 'magic-ui-library' with the actual package name if different
import { ReaderIcon, InfoCircledIcon, BarChartIcon, StarIcon } from "@radix-ui/react-icons";
const features = [
  {
    Icon: InfoCircledIcon,
    name: 'Stock Information',
    description: 'Get basic information about stocks',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-1',
  },
  {
    Icon: BarChartIcon,
    name: 'Stock Sentiment',
    description: 'Analyze the sentiment of stocks',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-2',
  },
  {
    Icon: ReaderIcon,
    name: 'Stock News',
    description: 'Read the latest news articles about stocks',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-2',
  },
  {
    Icon: StarIcon,
    name: 'Favorite Stocks',
    description: 'Save your favorite stocks for quick access',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-1',
  },
];

const About = () => {
  return (
    <div className="mb-16"> {/* Added margin-bottom to create spacing */}
      <div className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8">
        About Us
      </div>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </div>
  )
}

export default About
