import React, { useContext, useEffect } from "react";
import ThemeContext from '../context/ThemeContext'
import Socialmedia from '../components/Socialmedia'


function Footer() {
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
    }, [theme])
    return (

        <section className="bg-white dark:bg-transparent w-full">
            <div className="w-full max-w-screen-xl mx-auto sm:py-4">
                <div className="lg:flex sm:items-center sm:justify-between lg:justify-center sm:m-4">
                    <Socialmedia />
                </div>
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© 2023 <a href="" className="hover:underline">Farit Albavi</a>. All Rights Reserved.</span>
            </div>
        </section>

    )
}

export default Footer