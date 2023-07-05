import * as React from "react"
const dbSVGR = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        className="w-9 h-9 text-gray-800 dark:text-orange-800"
        viewBox="0 0 18 20"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 4c0 1.657-3.582 3-8 3S1 5.657 1 4m16 0c0-1.657-3.582-3-8-3S1 2.343 1 4m16 0v6M1 4v6m0 0c0 1.657 3.582 3 8 3s8-1.343 8-3M1 10v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"
        />
    </svg>
)
export default dbSVGR
