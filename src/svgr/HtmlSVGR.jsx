import * as React from "react"
const HtmlSVGR = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={50}
        height={50}
        style={{
            enableBackground: "new 0 0 50 50",
        }}
        viewBox="0 0 50 50"
        fill="none"
        className="dark:fill-slate-950 fill-white"
        {...props}
    >
        <path d="m40 41-14 4-14-4L9 7h34l-3 34zm.816-32H11.184l2.687 30.455L26 42.92l12.129-3.465L40.816 9z"
        //fill="#222"
        />
        <path d="m34.75 23-.99 12-7.77 2-7.76-2-.39-5h3.86l.18 2 4.12.62 4.17-.62.41-5H17.59l.96-12H34l.7 6H31l-.23-2h-8.36l-.32 4z"
        //fill="#222"
        />
    </svg>
)
export default HtmlSVGR
