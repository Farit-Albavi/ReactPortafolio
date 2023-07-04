import React from 'react'
import html from '../img/html1.svg'
import SkillCard from './SkillCard'
import HtmlSVGR from '../svgr/HtmlSVGR'
import CssSVGR from '../svgr/CssSVGR'
import JsSVGR from '../svgr/JsSVGR'
import ReactSVG from '../svgr/ReactSVG'
import JavaSVG from '../svgr/JavaSVG'


function Skills() {
    return (
        <div id='skills' className='container w-full h-full my-5 xl:my-0'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl mb-1'>Skills Set</h1>
                <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i can do</h6>
            </div>
            <section className='flex sm:flex-row gap-16 flex-wrap items-center justify-center w-full mt-10'>
                <SkillCard title='Html'>
                    <HtmlSVGR />
                </SkillCard>

                <SkillCard title='CSS'>
                    <CssSVGR />
                </SkillCard>

                <SkillCard title='Javascript'>
                    <JsSVGR></JsSVGR>
                </SkillCard>

                <SkillCard title='Java'>
                    <JavaSVG />
                </SkillCard>

                <SkillCard title='ReactJs'>
                    <ReactSVG />
                </SkillCard>

                <SkillCard title='SQL'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" width={40} height={40} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2zm0 3h18M3 14h18M3 9h18" />
                    </svg>

                </SkillCard>
            </section>
        </div>
    )
}

export default Skills