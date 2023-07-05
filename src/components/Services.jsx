import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <div className='animate__bounceIn container w-full'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl mb-1'>Services</h1>
                <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i can do</h6>
            </div>
            <section className='flex gap-7 flex-wrap items-center justify-center'>


                <ServiceCard
                    title={'Web Development'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.'}
                >
                </ServiceCard>


                <div className='w-80 bg-white h-96 text-black p-10 rounded flex flex-col gap-4 border'>
                    <div className='flex justify-center items-center'>
                        <div className='w-16 h-16 rounded-full bg-slate-200 flex justify-center items-center'>
                            <svg class="w-6 h-6 text-gray-800 dark:text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                            </svg>
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl text-center'>Web Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.</p>
                </div>

                <div className='w-80 bg-white h-96 text-black p-10 rounded flex flex-col gap-4 border'>
                    <div className='flex justify-center items-center'>
                        <div className='w-16 h-16 rounded-full bg-slate-200 flex justify-center items-center'>
                            <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706" />
                            </svg>
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl text-center'>Web Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.</p>
                </div>

                <div className='w-80 bg-white h-96 text-black p-10 rounded flex flex-col gap-4 border'>
                    <div className='flex justify-center items-center'>
                        <div className='w-16 h-16 rounded-full bg-slate-200 flex justify-center items-center'>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 5 4 4-4 4m5 0h5M2 1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z" />
                            </svg>
                        </div>
                    </div>
                    <h1 className='font-bold text-2xl text-center'>Web Development</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.</p>
                </div>


            </section>


        </div>
    )
}

export default Services