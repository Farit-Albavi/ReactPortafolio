import React from 'react'

function SkillCard({ title, children }) {
    return (
        <div className='max-w-sm h-32 border hover:shadow-2xl
            hover:shadow-gray-500 dark:hover:bg-blue-950
            hover:bg-red-50 text-gray-700 hover:scale-110 
            rounded w-36 '
        >
            <div className="px-6 py-6 flex flex-col items-center">
                {children}
                <div className="font-semibold text-xl mt-1 dark:text-white">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default SkillCard