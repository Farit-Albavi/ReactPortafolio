import React from 'react'
import 'animate.css';

export default function Presentacion() {
    return (
        <div className='container flex flex-col items-center sm:block mt-14 xl:pt-44 animate__animated animate__bounceInLeft w-full xl:h-screen'>
            {/* 
                agregue clases para que en movile se centre el texto de la presentacion, en caso de que no me guste deberia quitar las siguientes clases:
                    text-center sm:text-left
                    text-center sm:text-end
                    sm:items-end
                debo quitar de los h1 y los parrafos.
        
            */}
            <section className='w-full p-4 sm:p-0'>

                <h1 className="font-bold text-5xl md:text-6xl text-center sm:text-left">
                    Hello, I'm
                </h1>

                <h1 className="font-bold text-5xl md:text-6xl text-center sm:text-left">
                    a Front end Devloper
                </h1>

                <div className='sm:max-w-xl mt-8 '>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
                        Bienvenidos/as a mi portafolio, soy desarollador trainee, he trabajado con diversas tecnologías en el ámbito del desarrollo web,
                        tanto en el frontend como del backend. Estoy abierto a aprender, a superar desafíos y nuevos retos.
                    </p>
                </div>

                <aside className='flex justify-center sm:block mt-8 '>
                    <button className=" dark:bg-gray-300 bg-red-100 hover:bg-red-200 dark:hover:bg-blue-50 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download CV</span>
                    </button>
                </aside>

            </section>

            <aside className='flex flex-col sm:items-end  p-4 sm:p-0 animate__bounceInRight animate__animated'>
                <h1 className='font-bold text-5xl md:text-6xl text-center sm:text-end '>Me llamo Farit</h1>

                <div className='sm:max-w-xl mt-8'>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-start sm:text-end">
                        Soy un apasionado desarrollador trainee de software con conocimiento en diversas tecnologías.
                        Mi objetivo principal es crear soluciones eficientes y de alta calidad que impulsen el éxito de los proyectos en los que trabajo.
                    </p>
                </div>

            </aside>


        </div>
    )
}
