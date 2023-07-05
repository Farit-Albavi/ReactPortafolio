import * as React from "react"
const DevSVGR = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        aria-hidden="true"
        className="w-6 h-6 text-gray-800 dark:text-dark"
        viewBox="0 0 20 16"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
        />
    </svg>
)
export default DevSVGR