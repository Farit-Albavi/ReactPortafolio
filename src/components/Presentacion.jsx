import React from 'react'
import 'animate.css';

export default function Presentacion() {
    return (
        <div className='container flex flex-col items-center sm:block mt-14 sm:pt-44 animate__animated animate__bounceInLeft w-full h-screen'>
            {/* 
                agregue clases para que en movile se centre el texto de la presentacion, en caso de que no me guste deberia quitar las siguientes clases:
                    text-center sm:text-left
                    text-center sm:text-end
                    sm:items-end    
                debo quitar de los h1 y los parrafos.
        
            */}
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

            <aside className='flex flex-col sm:items-end  p-4 xl:p-0 animate__bounceInRight animate__animated'>
                <h1 className='font-bold text-2xl md:text-6xl text-end '>My name is ...</h1>

                <div className='sm:max-w-xl lg:mt-8 mt-1'>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-end">
                        Mi nombre es Farit Albavi, tengo 24 años, soy desarollador de software y estudiante del quinto semestre de la carrera de Licenciatura en ciencias informaticas 
                        en la Universidad Nacional de Asunción. 
        
                        
                    </p>
                </div>

            </aside>


        </div>
    )
}
