import React from 'react'
import Switcher from '../components/Switcher'


function Header() {
    return (
        <nav className='container flex justify-between items-center w-full'>
            <ul className='flex justify-start sm:gap-5 py-6'>
                <li className='hover:underline hover:underline-offset-8'>Home</li>
                <li className='hover:underline hover:underline-offset-8'>Services</li>
                <li className='hover:underline hover:underline-offset-8'>Works</li>
                <li className='hover:underline hover:underline-offset-8'>Skills</li>
                <li className='hover:underline hover:underline-offset-8'>Contact</li>
                <li className='hover:underline hover:underline-offset-8'>Blog</li>
            </ul>
            <Switcher />
        </nav>
    )
}

export default Header