import React from 'react'

function SkillCard({ title, children }) {
    return (
        <div className=" flex flex-col items-center justify-center w-28 h-28 sm:w-40 sm:h-40 sm:max-w-sm text-gray-700">
            {children}
            <div className="font-semibold text-xl mt-1 dark:text-white">
                {title}
            </div>
        </div>
    )
}

export default SkillCard