import * as React from "react"
const CssSVGR = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width={50}
        height={50}
        className="fill-white dark:fill-black"
        {...props}>
        <path
            fillRule="evenodd"
            d="m39 40-14 4-14-4L8 6h34l-3 34Zm.816-32H10.184l2.687 30.453L25 41.922l12.129-3.469ZM16.801 28h4l.097 2.5L25 31.898l4.102-1.398.296-4.5h-8.796l-.204-4h9.204l.296-4H16.102l-.301-4h18.3l-.5 8-.703 11.5L25 36.102 17.102 33.5Z"
        />
    </svg>
)
export default CssSVGR
