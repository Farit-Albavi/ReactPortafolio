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


function Socialmedia() {

    const { theme } = useContext(ThemeContext);
    useEffect(() => {
    }, [theme])

    return (
        <ul className="flex items-center justify-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-4 pb-2">
            <li>
                {theme === false ?
                    <a href="https://github.com/Farit-Albavi" target="_blank">
                        <img src={lGithub} alt="facebook icon" /></a>
                    :
                    <a href="https://github.com/Farit-Albavi" target="_blank">
                        <img src={dGithub} alt="facebook icon" /></a>
                }
            </li>
            <li>
                {theme === false ?
                    <a href="https://www.linkedin.com/in/farit-albavi/" target="_blank">
                        <img src={linkedinL} alt="facebook icon" /></a>
                    :
                    <a href="https://www.linkedin.com/in/farit-albavi/" target="_blank">
                        <img src={linkedin} alt="facebook icon" /></a>
                }
            </li>
            <li>
                {theme === false ?
                    <a href="https://www.instagram.com/fariiit/" target="_blank">
                        <img src={instagramL} alt="facebook icon" /></a>
                    :
                    <a href="https://www.instagram.com/fariiit/" target="_blank">
                        <img src={instagram} alt="facebook icon" /></a>
                }
            </li>
            <li>
                {theme === false ?
                    <a href="https://www.facebook.com/farit.albavi/" target="_blank">
                        <img src={facebookL} alt="facebook icon" /></a>
                    :
                    <a href="https://www.facebook.com/farit.albavi/" target="_blank">
                        <img src={facebook} alt="facebook icon" /></a>
                }
            </li>
        </ul>

    )
}

export default Socialmedia