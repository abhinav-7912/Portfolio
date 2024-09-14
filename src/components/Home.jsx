import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { ReactTyped } from "react-typed";

function Home() {
    return (
        <>
            <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <div className=' flex flex-col md:flex-row'>
                    <div className=' order-2 md:order-1 md:w-1/2 mt-12 md:mt-24'>
                        <div className='space-y-5 mt-17 text-xl'>
                            <span className=''>Welcome in my feed</span>
                            <div className='flex space-x-1 text-2xl md:text-4xl'>
                                <h1>Hello, I'm a</h1>
                                {/*<span > Developer</span>*/}
                                <ReactTyped
                                    className='text-orange-700 font-bold'
                                    strings={[" Developer", "Programmer", "Coder"]}
                                    typeSpeed={40}
                                    backSpeed={50}
                                    loop={true}
                                />
                            </div>
                            <p className='text-xl md:text-md'>
                               I abhinav bansal aspiring to leverage my academic background in computer applications, to secure an entry-level
                                position in a reputed company. Eager to contribute to a collaborative team environment and learn
                                from experienced professionals while applying my strong analytical and problem-solving skills.
                                Committed to continuous learning and professional growth, with a keen desire to learn and adapt to
                                new technologies.
                            </p>
                            <br></br>

                            {/*social media icons*/}
                            <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
                                <div className='space-y-2'>
                                    <h1 className='font-bold'>Available on</h1>
                                    <ul className='flex space-x-5'>
                                        <li>
                                            <a href="https://github.com/abhinav-7912" target='_blank'>
                                                <FaGithub className='text-2xl cursor-pointer' /></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/abhinavbansal1403" target='_blank'>
                                                <FaLinkedin className='text-2xl cursor-pointer' /></a>
                                        </li>
                                        <li>
                                            <a href="http://t.me/abhinavbansal1403" target="_blank">
                                                <FaTelegram className='text-2xl cursor-pointer' /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='space-y-2'>
                                    <h1 className='font-bold'>Currently working on</h1>
                                    <div className='flex space-x-5'>
                                        <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                        <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                        <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                        <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='order-1 md:w-1/2 md:ml-48 md:mt-20 mt-8 '>
                        <img className='rounded-full md:w-[450px] md:h-[450px]' src="public/Abhinav.jpeg" alt="banner"></img>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
        </>
    )
}

export default Home
