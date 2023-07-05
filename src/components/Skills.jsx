import React from 'react'
import html from '../img/html1.svg'
import SkillCard from './SkillCard'
import HtmlSVGR from '../svgr/svgSkills/HtmlSVGR'
import CssSVGR from '../svgr/svgSkills/CssSVGR'
import JsSVGR from '../svgr/svgSkills/JsSVGR'
import ReactSVG from '../svgr/svgSkills/ReactSVG'
import JavaSVG from '../svgr/svgSkills/JavaSVG'
import DbSVGR from '../svgr/svgSkills/DbSVGR'


function Skills() {
    return (
        <div id='skills' className='container w-full h-full my-5 xl:my-10 flex flex-col justify-center items-center'>
            <div className='text-center'>
                <h1 className='font-bold text-3xl mb-1'>Skills Set</h1>
                <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i know</h6>
            </div>
            <section className='flex sm:flex-row gap-16 flex-wrap items-center justify-center max-w-2xl mt-10'>
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
                    <DbSVGR />
                </SkillCard>
            </section>
        </div>
    )
}

export default Skills