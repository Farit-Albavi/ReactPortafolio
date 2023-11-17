import React from 'react'
import 'animate.css';
import faritlogo from '../img/faritphoto.png'
import Socialmedia from '../components/Socialmedia'
import Header from '../components/Header'

export default function Presentacion() {
    return (

        <div className='container min-h-screen'>

            <header className='w-full flex justify-center dark:bg-transparent bg-white text-gray-700 dark:text-white'>
                <Header></Header>
            </header>



            <aside className='w-full border '>

                <img className='border-4 rounded-full border-black bg-black dark:bg-black dark:border-white w-64 h-64 md:w-80 md:h-80 m-auto ' src={faritlogo} alt="" />


                <div className='sm:max-w-xl lg:mt-8 mt-1 m-auto'>


                    <h1 className="font-bold md:my-5 text-2xl md:text-6xl sm:text-center">
                        Farit Albavi
                    </h1>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-left text-md">
                        Bienvenido a mi portafolio! Soy un apasionado de la tecnología con conocimientos en Linux, Java, SQL, JavaScript y
                        React. Mi enfoque meticuloso en el desarrollo y mi determinación para superar desafíos hacen que esté listo para asumir proyectos desafiantes.
                        Explora mi trabajo y cómo mi sólida base técnica puede ser un activo valioso para tu equipo.
                    </p>
                    <section className='flex  sm:flex justify-between mt-8 items-center'>
                        <aside className='flex gap-3'>
                            <Socialmedia />
                        </aside>
                    </section>
                </div>

            </aside>


        </div>
    )
}
