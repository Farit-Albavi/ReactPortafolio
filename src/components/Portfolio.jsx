'use client';
import React from 'react'
import PortfolioCard from './PortfolioCard'

function Portfolio() {
  return (
    <div className='animate__bounceIn container w-full'>

      <div className='text-center mb-10'>
        <h1 className='font-bold text-3xl mb-1'>Portfolio</h1>
        <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>My projects</h6>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />

      </div>


    </div>
  )
}

export default Portfolio