import React from 'react'


function ServiceCard({ title, description, children }) {


    return (

        <div id='container' className='w-80 md:w-[450px] m-auto bg-gray-100 sm:h-[500px] text-black p-10 rounded-xl flex flex-col gap-4 
        dark:lg:hover:bg-blue-950 dark:lg:hover:text-white lg:hover:border-none lg:hover:bg-[#e8f0f2] lg:hover:text-black  transition ease-out duration-300 ' >


            <div className='flex justify-center items-center '>
                <div id='grandchild' className='w-16 h-16 rounded-full bg-white dark:bg-slate-200 flex justify-center items-center '>
                    {children}
                </div>
            </div>
            <h1 className='font-bold text-2xl text-center'>{title}</h1>
            <p className='w-full sm:h-36 text-center'>{description}</p>

            <div className='text-center'>
                <p>Tecnologías</p>
                <ul className='flex w-[200px] m-auto gap-3 flex-wrap'>
                    <li className='bg-red-200 px-2 rounded-md'>React</li>
                    <li className='bg-yellow-300  px-2 rounded-md'>React</li>
                    <li className='bg-blue-500  px-2 rounded-md'>React</li>
                    <li className='bg-blue-500  px-2 rounded-md'>React</li>

                </ul>
            </div>
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