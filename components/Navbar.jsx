'use client'

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavBarToggle = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="border-b-1 border-gray-200">
      <div className="container mx-auto grid grid-cols-2 px-4 md:px-0 md:grid-cols-3">
        <div className="flex items-center justify-end md:justify-center md:py-8 order-1 md:order-0">
          <Image src="/logo.webp" alt="Logo" width={480} height={480} className="w-28 h-14 md:h-7 md:w-56 " />
        </div>
        <button
          className="md:hidden flex items-center justify-start text-gray-400"
          onClick={handleNavBarToggle}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <ul
          className={`${isMenuOpen ? "block" : "hidden"
            }   md:flex md:text-lg shadow-lg md:gap-4 md:shadow-none items-center justify-center font-semibold absolute md:static top-14 left-0 w-full bg-white md:bg-transparent md:w-auto uppercase`}
        >
          <li className="py-4 pl-4 md:py-0 md:pl-0">
            <a href="#Factory" >Factory</a>
          </li>
            <li className="py-4 md:py-0 pl-4 md:pl-0">
              <a href="#technology" >Technology</a>
            </li>
            <li className="py-4 md:py-0 pl-4 md:pl-0">
              <a href="#aboutMe" >Our story</a>
            </li>
          <div className="md:hidden">
          </div>

        </ul>
        <div className="hidden md:flex md:items-center md:justify-center ">
          <a href="#contact" className="underline text-blue-600 font-semibold">CONTACT</a>
        </div>
      </div>
    </nav>
  )
}