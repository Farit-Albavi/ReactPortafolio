function PortfolioCard({ title, descript, image, link, techn, github }) {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <img className="rounded-t-lg" src={image} alt="" />

            <div className="p-5">
                <div className="h-40 sm:h-32">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{descript}</p>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-blue-700 text-left">
                    {techn}
                </p>

                <aside className='flex gap-4'>

                    <a href={link} target='_blank' className="inline-flex items-center px-3 py-2 gap-1 text-sm font-medium text-center  rounded-lg focus:ring-4 dark:hover:bg-blue-50 text-gray-800 focus:outline-none focus:ring-blue-300 dark:bg-gray-300 bg-red-100 hover:bg-red-200 dark:focus:ring-blue-800">
                        <p>Demo</p>
                        <svg class="w-3 h-3 text-white-800 dark:gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                        </svg>
                    </a>

                    <a href={github} target='_blank' className="">
                        <svg class="h-full w-6  text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </aside>

            </div>
        </div>

    )
}

export default PortfolioCard


