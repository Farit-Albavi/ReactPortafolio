import React from 'react'

function SkillCard({ title, children }) {
    return (
        <div className='max-w-sm border hover:shadow-2xl
            hover:shadow-gray-500 dark:hover:bg-blue-950
            hover:bg-red-50 text-gray-700 hover:scale-110 
            rounded w-36 '
        >
            <div className="px-6 py-4 flex flex-col items-center">
                <div className='w-16 h-16 rounded-full bg-red-300 dark:bg-white flex items-center justify-center'>
                    {children}
                </div>
                <div className="font-semibold text-xl mt-2 dark:text-white">{title}</div>
            </div>
        </div>
    )
}

export default SkillCard