import React from 'react'
import { Link } from 'react-router-dom'

const socialMedia = [
  { id: 1, img: "/github.svg", url: "https://github.com/taarikashenafi" },
  { id: 2, img: "/linkedin.svg", url: "https://linkedin.com/in/taarik-ashenafi" },
];

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
      <footer className="w-full bg-transparent bg-opacity-75 backdrop-filter backdrop-blur-lg border-t">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <p className="text-sm font-light">
            Taarik Ashenafi © {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-3">
            {socialMedia.map((info) => (
              <Link
                key={info.id}
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border bg-background hover:bg-muted transition-colors"
              >
                <img src={info.img} alt={`${info.url.split('.com/')[1]} icon`} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}