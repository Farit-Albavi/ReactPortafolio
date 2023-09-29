import React from 'react'
import 'animate.css';
import Photo from './Photo'

export default function Presentacion() {
    return (
        // flex flex-col  sm:block items-center

        <div className='container flex flex-col-reverse lg:grid lg:grid-cols-2 xl:pt-44  animate__animated animate__bounceInLeft w-full lg:h-screen '>
            <section className='w-full p-4 xl:p-0'>

                <h1 className="font-bold text-2xl md:text-6xl sm:text-left">
                    Hello, I'm
                </h1>

                <h1 className="font-bold text-2xl md:text-6xl sm:text-left">
                    a Front end Devloper
                </h1>


                <div className='sm:max-w-xl lg:mt-8 mt-1'>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left">
                        Bienvenido a mi portafolio! Soy un apasionado de la tecnología con conocimientos en Linux, Java, SQL, JavaScript y
                        React. Mi enfoque meticuloso en el desarrollo y mi determinación para superar desafíos hacen que esté listo para asumir proyectos desafiantes.
                        Explora mi trabajo y cómo mi sólida base técnica puede ser un activo valioso para tu equipo.
                    </p>
                </div>

                <aside className='flex  sm:block mt-8 '>
                    <button className=" dark:bg-gray-300 bg-red-100 hover:bg-red-200 dark:hover:bg-blue-50 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <span>Download CV</span>
                    </button>
                </aside>

            </section>


        </div>
    )
}
