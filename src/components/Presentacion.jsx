import React from 'react'
import 'animate.css';
import faritlogo from '../img/faritphoto.png'
import Socialmedia from '../components/Socialmedia'
import Header from '../components/Header'

export default function Presentacion() {
    return (

        <div className='w-full flex flex-col items-center mx-5 '>
            <div className='container min-h-screen flex flex-col md:items-center md:justify-center pt-20 sm:pt-0'>

                <section >
                    <img className='border-2 rounded-full border-black bg-black dark:bg-slate-500 dark:border-slate-500 w-64 h-64 md:w-80 md:h-80 m-auto ' src={faritlogo} alt="Farit Albavi Photo" />
                    <div className='sm:max-w-xl m-auto text-center'>
                        <h1 className="text-3xl md:my-5 my-3 md:text-5xl sm:text-center text-white poppins">
                            Farit Albavi
                        </h1>
                        <h2 className='underline underline-offset-4'>Full Stack Developer</h2>

                        <p className="font-normal text-gray-700 dark:text-gray-400 text-md text-center m-5">
                            Desarrollador con una sólida trayectoria de entrega de aplicaciones web de alta calidad, escalables y confiables, utilizando una amplia variedad de tecnologías.                        </p>
                        <aside className='flex sm:flex justify-center items-center'>
                            <aside className='flex gap-3'>
                                <Socialmedia />
                            </aside>
                        </aside>
                    </div>
                </section>


            </div>
        </div>
    )
}
