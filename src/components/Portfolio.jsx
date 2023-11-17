'use client';
import React from 'react'
import PortfolioCard from './PortfolioCard'
import portafolio from '../img/portafolio.png'
import portafolio2 from '../img/portafolio2.png'
import stockimage from '../img/943shots_so.png'



function Portfolio() {
  return (
    <div className='animate__bounceIn container w-full'>

      <div className='text-center mb-10'>
        <h1 className='font-bold text-3xl mb-1'>Portfolio</h1>
        <h6 className='bg-[#e8f0f2] dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>My projects</h6>
      </div>


      <div className="flex flex-col sm:flex-row p-4 xl:p-0 gap-8 xl:gap-16 justify-center flex-wrap">

        <PortfolioCard
          title={'Control de stock'}
          descript={'Proyecto personal para simular la interfaz y la lógica de negocio de un control de stock de productos.'}
          image={stockimage}
          link={'https://sprightly-khapse-de0885.netlify.app'}
          techn={'html - css - bootstrap - javascript'}
          github={'https://github.com/Farit-Albavi/Inventario'}
        />

        <PortfolioCard
          title={'Portafolio web'}
          descript={'Mi portafolio web, diseñado con react y estilizado con tailwind css'}
          image={portafolio}
          link={'https://farit-albavi.netlify.app'}
          techn={'react - tailwind - node'}
          github={'https://github.com/Farit-Albavi/ReactPortafolio'}
        />

        <PortfolioCard
          title={'Landing Page'}
          descript={''}
          image={portafolio2}
          link={'https://sprightly-khapse-de0885.netlify.app'}
          techn={'react - talwind - springboot'}
        />

      </div>


    </div>
  )
}

export default Portfolio