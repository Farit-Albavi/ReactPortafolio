import React, { useState } from 'react';
import Switcher from './Switcher'
import cv from '../assets/CV_FaritAlbavi.pdf'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 container flex flex-col sm:flex-row-reverse xl:relative xl:top-0 xl:z-10 ">

            <div className="container mx-auto flex items-center justify-between">

                <button
                    className="block sm:hidden border-gray-400 rounded px-2 py-1 border "
                    onClick={toggleNavbar}>
                    {isOpen ? 'Close' : 'Menu'}
                </button>
                <aside className='flex justify-end w-full'>
                    <Switcher />
                </aside>
                <aside>
                    <a href={cv} download={'Resume Farit-Albavi'} className=" dark:bg-gray-300 bg-[#e8f0f2] hover:bg-gray-500/20 dark:hover:bg-blue-50 text-gray-800 font-bold p-1 inline-flex items-center rounded-xl">
                        <span>Resume</span>
                    </a>
                </aside>
            </div>


            <div className={`w-full sm:flex flex justify-center sm:items-center sm:w-auto pt-10 sm:pt-0 ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col gap-5 sm:gap-0 sm:flex-row">
                    <li className="mb-2 sm:mb-0 sm:mr-4 hover:underline hover:underline-offset-8">
                        <a href="/" className="block">Home</a>
                    </li>
                    <li className="mb-2 sm:mb-0 sm:mr-4 hover:underline hover:underline-offset-8">
                        <a href="/services" className="block">Services</a>
                    </li>
                    <li className="mb-2 sm:mb-0 sm:mr-4 hover:underline hover:underline-offset-8">
                        <a href="/works" className="block ">Works</a>
                    </li>
                    <li className="mb-2 sm:mb-0 sm:mr-4 hover:underline hover:underline-offset-8">
                        <a href="#skills" className="block ">Skills</a>
                    </li>
                    <li className="mb-2 sm:mb-0 sm:mr-4 hover:underline hover:underline-offset-8">
                        <a href="#contact" className="block ">Contact</a>
                    </li>

                </ul>
            </div>

        </nav>
    );
}

export default Header;
