import React from 'react'


function ServiceCard({ title, description, children }) {


    return (

        <div id='container' className='w-80 bg-gray-100 sm:h-96 text-black p-10 rounded-xl flex flex-col gap-4 border
        dark:lg:hover:bg-blue-950 dark:lg:hover:text-white lg:hover:border-none lg:hover:bg-[#e8f0f2] lg:hover:text-black h-auto transition ease-out duration-300 ' >


            <div className='flex justify-center items-center '>
                <div id='grandchild' className='w-16 h-16 rounded-full bg-white dark:bg-slate-200 flex justify-center items-center '>
                    {children}
                </div>
            </div>
            <h1 className='font-bold text-2xl text-center'>{title}</h1>
            <p >{description}</p>

            <style>{`
                @media (min-width: 1024px) {
                    #container:hover #grandchild {
                      background-color: white;
                    }
                  }`
            }
            </style>
        </div>
    )
}

export default ServiceCard