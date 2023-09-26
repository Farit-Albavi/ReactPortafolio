import React from 'react'
import html from '../img/html1.svg'
import SkillCard from './SkillCard'
import HtmlSVGR from '../svgr/svgSkills/HtmlSVGR'
import CssSVGR from '../svgr/svgSkills/CssSVGR'
import JsSVGR from '../svgr/svgSkills/JsSVGR'
import ReactSVG from '../svgr/svgSkills/ReactSVG'
import JavaSVG from '../svgr/svgSkills/JavaSVG'
import DbSVGR from '../svgr/svgSkills/DbSVGR'
import Linux from '../svgr/svgSkills/Linux'
import Tailwind from '../svgr/svgSkills/Tailwind'


function Skills() {
    return (
        <div id='skills' className='container w-full h-full my-10 xl:my-10 flex flex-col justify-center items-center '>
            <div className='text-center mb-10'>
                <h1 className='font-bold text-3xl mb-1'>Skills Set</h1>
                <h6 className='bg-red-100 dark:bg-slate-100 inline px-4 rounded-xl dark:text-gray-700'>What i know</h6>
            </div>
            <section className='flex sm:flex-row gap-5 sm:gap-10 flex-wrap items-center justify-center max-w-3xl'>
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

                <SkillCard title='React'>
                    <ReactSVG />
                </SkillCard>

                <SkillCard title='SQL'>
                    <DbSVGR />
                </SkillCard>

                <SkillCard title='Linux'>
                    <Linux />
                </SkillCard>
                
                <SkillCard title='Tailwind'>
                    <Tailwind />
                </SkillCard>
            </section>
        </div>
    )
}

export default Skills