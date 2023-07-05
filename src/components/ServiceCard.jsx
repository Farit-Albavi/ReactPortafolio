import React from 'react'


function ServiceCard({ title, description, children }) {
    return (
        <div className='w-80 bg-white h-96 text-black p-10 rounded flex flex-col gap-4 border
        lg:hover:bg-blue-950 lg:hover:text-white lg:hover:border-none'>
            <div className='flex justify-center items-center'>
                <div className='w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-200 flex justify-center items-center'>
                    {children}
                </div>
            </div>
            <h1 className='font-bold text-2xl text-center'>{title}</h1>
            <p>{description}</p>
        </div>)
}

export default ServiceCard