import React from 'react'
import ServiceCard from './ServiceCard'
import DevSVGR from '../svgr/svgServices/DevSVGR'
import TerminalSVGR from '../svgr/svgServices/TerminalSVGR'
import LearnSVGR from '../svgr/svgServices/LearnSVGR'

function Services() {
    return (
        <div className='animate__bounceIn container w-full'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl mb-1'>Services</h1>
                <h6 className='bg-[#e8f0f2] dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i can do</h6>
            </div>
            <section className='flex gap-14 flex-wrap items-center justify-center'>
                <ServiceCard
                    title={'Frontend'}
                    description={
                        'Maquetado de sitios web con HTML, CSS, JavaScript, React para añadir dinamismo de forma mas sencilla, Bootstrap y Tailwind para estilizar el sitio web de manera sencilla y productiva. Como resultado se tiene experiencias digitales atractivas y funcionales.'}
                >
                    <DevSVGR />
                </ServiceCard>

                <ServiceCard
                    title={'Databases'}
                    description={'Conocomiento en Bases de datos modelo relacional con enfoque en PostgreSQL. Aprendizaje del diseño de estructuras y relaciones para una gestión de datos efectiva. Almacenamiento y recuperación de datos sencillos y eficientes.'}
                >
                    <LearnSVGR />
                </ServiceCard>

                <ServiceCard
                    title={'Backend'}
                    description={'Desarrollo backend robusto y eficiente para sitios web. Creación de API RESTful para gestionar datos de manera efectiva. Implementación de tecnologías modernas para garantizar un rendimiento óptimo. '}
                >
                    <TerminalSVGR />
                </ServiceCard>
            </section>
        </div>
    )
}

export default Services