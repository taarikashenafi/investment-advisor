import React from 'react'

const socialMedia = [
  { id: 1, img: "/github.svg", url: "https://github.com/taarikashenafi" },
  { id: 2, img: "/linkedin.svg", url: "https://linkedin.com/in/taarik-ashenafi" },
];

const Footer = () => {
  return (
    <div className="w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <footer className="w-full py-10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
              Taarik Ashenafi © {new Date().getFullYear()}
            </p>

            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a href={info.url} target="_blank" rel="noopener noreferrer" key={info.id}>
                  <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img src={info.img} alt="social media icon" width={20} height={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
