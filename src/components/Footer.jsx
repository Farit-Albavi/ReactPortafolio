import React from 'react'
import logo from '../img/icons8-github.svg'

function Footer() {
    return (

        <section className="bg-white rounded-lg shadow dark:bg-transparent w-full">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between lg:justify-center mb-7">
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4">
                        <li>
                            <a href="">

                                <img src={logo} alt="img" className='' />
                            </a>
                        </li>
                        <li>
                            <img src={logo} alt="img" className='' />
                        </li>
                        <li>
                            <img src={logo} alt="img" className='' />
                        </li>
                        <li>
                            <img src={logo} alt="img" className='' />
                        </li>
                    </ul>
                </div>
                <span className="block text-sm text-gray-500 sm:text-center mb-10 dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Farit Albavi</a>. All Rights Reserved.</span>
            </div>
        </section>

    )
}

export default Footer