import React from 'react'

function PortfolioCard() {
    return (
        <div className='flex flex-col items-center'>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
            <div className='relative -top-12 flex gap-2'>
                <button className='bg-blue-700 rounded-md p-2'>Github</button>
                <button className='bg-blue-700 rounded-md p-2'>Preview</button>
            </div>
        </div>)
}

export default PortfolioCard