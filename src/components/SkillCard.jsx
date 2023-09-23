import React from 'react'

function SkillCard({ title, children }) {
    return (
        <div className='flex-col items-center group w-28 h-28 sm:w-32 sm:h-32 justify-center'>

            <div className=" flex flex-col items-center justify-center w-28 h-28 sm:w-32 sm:h-32 sm:max-w-sm text-gray-700 dark:bg-gray-800 rounded-2xl">
                {children}
                <div className="font-semibold text-xl mt-1 dark:text-white"></div>
            </div>

            <div className='w-0 group-hover:px-10 bg-gray-200 inset-x-0 mx-auto left-0 right-0 hidden rounded-lg relative -top-3 text-center text-black group-hover:flex justify-center '>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default SkillCard