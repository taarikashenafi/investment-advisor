import React from 'react'
import Layout from './Layout'
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';
import { ReaderIcon, InfoCircledIcon, BarChartIcon, StarIcon } from "@radix-ui/react-icons";

const features = [
  {
    Icon: InfoCircledIcon,
    name: 'Stock Information',
    description: 'Get basic information about stocks',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-1',
    background: <div className="absolute inset-0"><img src='./info.jpg' alt="Info" className="object-cover object-left w-full h-full" /></div>,
  },
  {
    Icon: BarChartIcon,
    name: 'Stock Sentiment',
    description: 'Analyze the sentiment of stocks',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-2',
    background: <div className="absolute inset-0"><img src='./sentiment.jpg' alt="Sentiment" className="object-cover object-top w-full h-full" /></div>,
  },
  {
    Icon: ReaderIcon,
    name: 'Stock News',
    description: 'Read the latest news articles about stocks',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-2 ',
    background: <div className="absolute inset-0"><img src='./news.jpg' alt="News" className="object-cover object-top w-full h-ful" /></div>,
  },
  {
    Icon: StarIcon,
    name: 'Favorite Stocks',
    description: 'Save your favorite stocks for quick access',
    href: '#',
    cta: 'Learn More',
    className: 'col-span-3 lg:col-span-1',
    background: <div className="absolute inset-0"><img src='./favorites.jpg' alt="Favorite" className="object-cover w-full h-full" /></div>,
  },
];

const Features = () => {
  return (
    <Layout>
    <div className="flex flex-col min-h-screen">
      <div id="features" className="flex-grow py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8">
            Key Features
          </h2>
          <BentoGrid className="mb-8">
            {features.map((feature, idx) => (
              <BentoCard key={idx} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Features