import React, { useContext, useEffect } from "react";
import lGithub from '../img/icons8-github.svg'
import dGithub from '../img/githubBlackTheme.svg'
import linkedin from '../img/icons8-linkedin.svg'
import linkedinL from '../img/icons8-linkedinLight.svg'
import facebook from '../img/icons8-facebook.svg'
import facebookL from '../img/icons8-facebookLight.svg'
import instagram from '../img/icons8-instagram.svg'
import instagramL from '../img/icons8-instagramLight.svg'
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