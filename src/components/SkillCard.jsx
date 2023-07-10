import React from 'react'

function SkillCard({ title, children }) {
    return (
        <div className='max-w-sm flex
             text-gray-700
            '
        >
            <div className=" flex flex-col items-center justify-center w-40 h-40">
                {children}
                <div className="font-semibold text-xl mt-1 dark:text-white">
                    {title}
                </div>
            </div>
        </div>
    )
}

export default SkillCard