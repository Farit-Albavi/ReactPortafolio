'use client';
import React from 'react'
import PortfolioCard from './PortfolioCard'
import portafolio from '../img/portafolio.png'
import stockimage from '../img/943shots_so.png'



function Portfolio() {
  return (
    <div className='animate__bounceIn container w-full'>

      <div className='text-center mb-10'>
        <h1 className='font-bold text-3xl mb-1'>Portfolio</h1>
        <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>My projects</h6>
      </div>


      <div className="flex flex-col sm:flex-row p-4 xl:p-0 gap-8 xl:gap-16 justify-center flex-wrap">

        <PortfolioCard
          title={'Control de stock.'}
          descript={''}
          image={stockimage}
          link={'https://sprightly-khapse-de0885.netlify.app'}
          techn={'html - css - javascript'}
          github={'https://github.com/Farit-Albavi/Inventario'}
        />

        <PortfolioCard
          title={'Portafolio web'}
          descript={''}
          image={portafolio}
          link={'https://farit-albavi.netlify.app'}
          techn={'react - talwind - node'}
          github={'https://github.com/Farit-Albavi/ReactPortafolio'}
        />

        <PortfolioCard
          title={'Portafolio web'}
          descript={''}
          image={stockimage}
          link={'https://sprightly-khapse-de0885.netlify.app'}
          techn={'react - talwind - node'}
        />

      </div>


    </div>
  )
}

export default Portfolio