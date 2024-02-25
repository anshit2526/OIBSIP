import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='p-10 '>
            <div className='text-xl flex items-center font-light text-my-theme mb-12'>Home <span className='h-[1px] w-[35dvw] bg-my-theme mx-10 rounded-xl' > </span></div>
            <p className='text-4xl font-light my-2'>Hello! I'm Anshit Krishan,</p>
            <p className='text-4xl font-light my-2'>a Full-stack Web Developer that</p>
            <p className='text-4xl font-light my-2'><span className='font-mono'>Build</span>, <span className='font-mono'>Create</span> and <span className='font-mono'>Deploy</span> Websites and Web Apps</p>
            <p className="font-light mt-10">Full-stack Development is a combination of various tasks </p>
            <p className="font-light ">but basicely, can be devided into two parts</p>
            <p className="font-light font-mono">Front-end and Back-end Development</p>
            <Link to='/About'>
                <button className='mt-10 h-max rounded-3xl bg-my-theme px-10 py-2'>More About me</button>
            </Link>
        </div>
    )
}
