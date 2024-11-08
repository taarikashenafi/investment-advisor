import React from 'react'
import Layout from './Layout'
import TypingAnimation from './ui/typing-animation'

const Mission = () => {
  return (
    <Layout>
    <div id="mission" className="mb-16 mt-20"> 
      <TypingAnimation
        className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem] mb-8"
        text="Were on a mission to make investing accessible for all."
      />    
      <p className="mt-4 text-neutral-500 text-base md:text-xl max-w-full">
        Everyone and their mother will tell you to invest, but no one is willing to help 
        you get your feet on the ground.  Thats where we come in.
      </p>

    </div>
    </Layout>
  )
}

export default Mission

