import React from 'react'

function Contact() {

    const src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9185124462!2d2.347035!3d48.85885484999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2zUGFyw61zLCBGcmFuY2lh!5e0!3m2!1ses-419!2spy!4v1688597809067!5m2!1ses-419!2spy'

    return (
        <section id='contact' className='container mt-20 flex flex-col sm:flex-row'>

            <iframe src={src}
                className='w-full h-96 sm:h-full sm:block'
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <form className='container p-5 sm:max-w-xl flex flex-col lg:border dark:border-blue-950 rounded m-auto lg:py-20 gap-5'>

                <div className='mb-5 m-auto'>
                    <h1 className='text-center font-bold'>Contact Me</h1>
                    <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>have something to say?</h6>
                </div>

                {/* Nombre */}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-transparent dark:border-blue-950 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joe Natale" />
                    </div>
                </div>

                {/* Correo electronico */}

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                </path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <input type="email" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-transparent dark:border-blue-950 dark:placeholder-gray-400 dark:text-white
                 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@email.com" />
                    </div>
                </div>

                {/* Texto */}
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <textarea id="message" rows="4" className="resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500
                dark:bg-transparent dark:border-blue-950 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a message...">
                    </textarea>
                </div>
                <button type="button" className="text-blue-700 mt-5 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
            text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-950 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Send</button>
            </form >
        </section>


    )
}

export default Contact