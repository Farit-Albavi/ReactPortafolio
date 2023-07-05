import React from 'react'

function ServiceCard({ title, description, children }) {
    return (
        <div className='w-80 bg-white h-96 text-black p-10 rounded flex flex-col gap-4 border'>
            <div className='flex justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-200 flex justify-center items-center'>
                    <svg class="w-4 h-4 text-white dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                    </svg>
                    <svg class="w-4 h-4 text-white dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </div>
            </div>
            <h1 className='font-bold text-2xl text-center'>{title}</h1>
            <p>{description}</p>
        </div>)
}

export default ServiceCard