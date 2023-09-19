import React from 'react'
import ServiceCard from './ServiceCard'
import DevSVGR from '../svgr/svgServices/DevSVGR'
import TerminalSVGR from '../svgr/svgServices/TerminalSVGR'
import LearnSVGR from '../svgr/svgServices/LearnSVGR'

function Services() {
    return (
        <div className='animate__bounceIn container w-full'>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl mb-1'>Services</h1>
                <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i can do</h6>
            </div>
            <section className='flex gap-14 flex-wrap items-center justify-center'>
                <ServiceCard
                    title={'Web Development'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.'}
                >
                    <DevSVGR />
                </ServiceCard>

                <ServiceCard
                    title={'Constant learning'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.'}
                >
                    <LearnSVGR />
                </ServiceCard>

                <ServiceCard
                    title={'Backend'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos repudiandae, consectetur distinctio molestiae veniam dolor iure exercitationem ex aperiam, ipsa porro inventore quia similique laboriosam id cumque corrupti? Modi, iusto.'}
                >
                    <TerminalSVGR />
                </ServiceCard>
            </section>
        </div>
    )
}

export default Services