import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

function Education() {
    return (
        <>
            <div name="Education" className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
                <h1 className='text-3xl font-bold mb-5'>Education Details</h1>
            </div>
            <VerticalTimeline className='md:mt-2 bg-gray-100 rounded-lg p-7 dark:bg-slate-600 dark:text-slate-100 '>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'orange', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2022 - 2025"
                    iconStyle={{ background: 'brown', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Computer Applications | CGPA 8.89</h3>
                    <h4 className="vertical-timeline-element-subtitle">Chitkara University | Patiala, Punjab</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'orange', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2020 - 2022"
                    iconStyle={{ background: 'brown', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Senior Secondary School Education | 88.8%</h3>
                    <h4 className="vertical-timeline-element-subtitle">Govt model senior secondary school (CBSE) Manimajra</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'orange', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  gray' }}
                    date="2009 - 2020"
                    iconStyle={{ background: 'brown', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Secondary School Education | 89.2%</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bhavan Vidyalaya (CBSE), Panchkula</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
        </>

    )
}

export default Education
