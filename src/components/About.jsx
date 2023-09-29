import React from 'react'

function About() {
    return (
        <aside className='flex flex-col sm:items-end  px-4 xl:p-0 animate__bounceInRight animate__animated'>
            <Photo />

            <h1 className='font-bold text-2xl md:text-6xl lg:text-end lg:mt-10'>My name is ...</h1>
            <div className='sm:max-w-xl lg:mt-8 mt-1'>
                <p className="font-normal text-gray-700 dark:text-gray-400 lg:text-end">
                    Mi nombre es Farit Albavi, tengo 24 años, soy desarollador de software y estudiante del quinto semestre de la carrera de Licenciatura en ciencias informaticas
                    en la Universidad Nacional de Asunción.


                </p>
            </div>

        </aside>)
}

export default About