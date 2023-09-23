import React from 'react'


function ServiceCard({ title, description, children }) {


    return (

        <div id='container' className='w-80 bg-white sm:h-96 text-black p-10 rounded flex flex-col gap-4 border
        dark:lg:hover:bg-blue-950 dark:lg:hover:text-white lg:hover:border-none lg:hover:bg-red-400 lg:hover:text-white h-auto transition ease-out duration-300 ' >


            <div className='flex justify-center items-center '>
                <div id='grandchild' className='w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-200 flex justify-center items-center '>
                    {children}
                </div>
            </div>
            <h1 className='font-bold text-2xl text-center'>{title}</h1>
            <p>{description}</p>

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