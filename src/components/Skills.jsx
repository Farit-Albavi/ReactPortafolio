import React from 'react'
import html from '../img/html1.svg'
function Skills() {
    return (
        <div className='container w-full h-full'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl mb-1'>Skills Set</h1>
                <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i can do</h6>
            </div>
            <section className='flex sm:flex-row gap-16 flex-wrap items-center justify-center w-full mt-10'>
                <div className='max-w-sm border hover:shadow-2xl hover:shadow-gray-500 hover:bg-red-50 text-gray-700 hover:scale-110 rounded w-36'>
                    <div className="px-6 py-4 flex flex-col items-center">
                        <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white flex items-center justify-center'>
                            <img src={html} alt="logo" />
                        </div>
                        <div className="font-semibold text-xl mt-2 dark:text-white">HTML</div>
                    </div>
                </div>
                <div className='max-w-sm border hover:shadow-2xl hover:shadow-gray-500 hover:bg-red-50 text-gray-700 hover:scale-110 rounded w-36'>
                    <div className="px-6 py-4 flex flex-col items-center">
                        <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white  flex items-center justify-center'>
                            <p className='text-base'> Logo </p>
                        </div>
                        <div className="font-semibold text-xl mt-2 dark:text-white">CSS</div>
                    </div>
                </div>
                <div className='max-w-sm border hover:shadow-2xl hover:shadow-gray-500 hover:bg-red-50 text-gray-700 hover:scale-110 rounded w-36'>
                    <div className="px-6 py-4 flex flex-col items-center">
                        <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white  flex items-center justify-center'>
                            <p className='text-base'> Logo </p>
                        </div>
                        <div className="font-semibold text-xl mt-2 dark:text-white">Javascript</div>
                    </div>
                </div>
                <div className='max-w-sm border hover:shadow-2xl hover:shadow-gray-500 hover:bg-red-50 text-gray-700 hover:scale-110 rounded w-36'>
                    <div className="px-6 py-4 flex flex-col items-center">
                        <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white  flex items-center justify-center'>
                            <p className='text-base'> Logo </p>
                        </div>
                        <div className="font-semibold text-xl mt-2 dark:text-white">Typescript</div>
                    </div>
                </div>
                <div className='max-w-sm border hover:shadow-2xl hover:shadow-gray-500 hover:bg-red-50 text-gray-700 hover:scale-110 rounded w-36'>
                    <div className="px-6 py-4 flex flex-col items-center">
                        <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white  flex items-center justify-center'>
                            <p className='text-base'> Logo </p>
                        </div>
                        <div className="font-semibold text-xl mt-2 dark:text-white">ReactJS</div>
                    </div>
                </div>
                <div className='max-w-sm border hover:shadow-2xl hover:shadow-gray-500 hover:bg-red-50 text-gray-700 hover:scale-110 rounded w-36'>
                    <div className="px-6 py-4 flex flex-col items-center">
                        <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white  flex items-center justify-center'>
                            <p className='text-base'>logo</p>
                        </div>
                        <div className="font-semibold text-xl mt-2 dark:text-white">Node.js</div>
                    </div>
                </div>



            </section>
        </div>
    )
}

export default Skills