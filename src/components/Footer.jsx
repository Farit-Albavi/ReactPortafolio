import React from 'react'
import logo from '../img/icons8-github.svg'
import bGithub from '../img/githubBlackTheme.svg'

function Footer() {
    let x = 2
    return (

        <section className="bg-white shadow dark:bg-transparent w-full">
            <div className="w-full max-w-screen-xl mx-auto sm:py-4">
                <div className="sm:flex sm:items-center sm:justify-between lg:justify-center sm:m-4">
                    <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4 mb-2">
                        <li>
                            <a href="">
                                <object data={logo} type="image/svg+xml"></object>
                            </a>
                        </li>
                        <li>
                            <img src={logo} alt="img" className='' />
                        </li>
                        <li>
                            <img src={logo} alt="img" className='' />
                        </li>
                        <li>
                            {x === 0 ? <img src={logo} alt="img" className='' /> : <img src={bGithub} alt="img" className='' />}
                        </li>
                    </ul>
                </div>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Farit Albavi</a>. All Rights Reserved.</span>
            </div>
        </section>

    )
}

export default Footer