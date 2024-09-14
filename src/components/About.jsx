import React from 'react'

function About() {
    return (
        <>
            <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 md:flex-row my-16'>
                <h1 className='text-3xl font-bold mb-5'>About</h1>
                <div className=' mt-5 md:mt-10 my-5 py-5 border-[2px] rounded-xl bg-base-200  dark:bg-slate-600 dark:text-white'>
                    <div className="collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">Skills</div>
                        <div className="collapse-content">
                            <h1 className='text-xl underline'>Technical Skills:<br></br></h1>
                            <p className='mt-2'> * Programming Languages: React.js, Javacript, HTML, CSS (Talwind CSS), C++, Java, Python <br></br>
                                * Database Management Systems: MySQL, MongoDB, Firebase<br></br>
                                * Software Proficiency: Windows OS, MS-Office (Word, Excel, PowerPoint)<br></br></p>
                            <h1 className='text-xl mt-3 underline'> Other Skills:</h1><p> * Communication skills, Data Analysis, Teamwork</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">Certification</div>
                        <div className="collapse-content">
                            <p> * Certification in react bootcamp (LetsUpgrade)<br></br>
                                * Certification in Data Science with Pyhton (LetsUpgrade)<br></br>
                                * Certification in Microsoft Copilot (Skills Nation)<br></br>
                                * Certification in Chatgpt Bootcamp (LetsUpgrade)</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">Language Proficiency</div>
                        <div className="collapse-content">
                            <p>* English, Hindi and Punjabi </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">Leadership</div>
                        <div className="collapse-content">
                            <p className='text-medium'>Database Team Head, Matrix Club (2023 present)<br></br>
                                Chitkara University | Patiala, Punjab<br></br></p>
                               <p className='mt-2'> Led the team to full potential fulfilling our duty as members of Matrix Club making the events<br></br>
                                successful and contributing in team’s success.  </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow  ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">Hobbies</div>
                        <div className="collapse-content">
                            <p>* Listening to music which gives a mood enhancement<br></br>
                                * Playing games—whether video games, board games, or sports which gives problem-solving skill and Creativity
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-2xl font-medium">Mission Statement</div>
                        <div className="collapse-content">
                            <p>My mission is to leverage my skills and creativity to deliver innovative soltions that exceed cleint expectation
                                and contribute postively to the digital landscape. I am committed to contnuos learning and growth, always seking new challenges
                                and opportunities to expand my horizons
                            </p>
                        </div>
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

export default About
