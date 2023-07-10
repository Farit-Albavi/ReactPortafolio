import React from 'react'

function SkillCard({ title, children }) {
    return (

        <div className=" flex flex-col items-center justify-center w-40 h-40 max-w-sm text-gray-700">
            {children}
            <div className="font-semibold text-xl mt-1 dark:text-white">
                {title}
            </div>
        </div>
    )
}

export default SkillCard