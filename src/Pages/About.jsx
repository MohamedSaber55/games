import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { SiJavascript, SiReact, SiReactrouter, SiRedux, SiTailwindcss } from "react-icons/si"
import { ImHtmlFive, ImCss3 } from "react-icons/im"
import { FaSass } from "react-icons/fa6"
const About = () => {

    const Technologies = [
        { name: "HTML5", icon: <ImHtmlFive size={44} className='text-[#e34c26]' /> },
        { name: "CSS3", icon: <ImCss3 size={44} className='text-[#264de4]' /> },
        { name: "Sass", icon: <FaSass size={44} className='text-[#cc6699]' /> },
        { name: "TailwindCss", icon: <SiTailwindcss size={44} className='text-[#38B2AC]' /> },
        { name: "JavaScript", icon: <SiJavascript size={44} className='text-[#F7DF1E]' /> },
        { name: "ReactJS", icon: <SiReact size={44} className='text-[#61DAFB]' /> },
        { name: "Redux Toolkit", icon: <SiRedux size={44} className='text-[#764ABC]' /> },
        { name: "React Router", icon: <SiReactrouter size={44} className='text-[#CA4245]' /> },
    ]

    return (
        <HelmetProvider>
            <Helmet>
                <title>About</title>
            </Helmet>
            <section className='py-16' >
                <div className='container px-4'>
                    <div className='text-center p-5 mb-8'>
                        <h2 className='text-3xl mb-3 font-bold text-second'>About</h2>
                        <p className='text-light'>More info about this project</p>
                    </div>
                    <div className='p-5 flex flex-col gap-5 border border-light-gray rounded'>
                        <h3 className='text-xl font-lobster'>Summary :</h3>
                        <p className='text-sm text-light-gray leading-6'>
                            <span className='text-xl font-medium mr-1 font-luckiest'>Matrix</span>
                            is a Front-End project to get and explore free to play games, you can show them and classify them to many categories
                        </p>
                        <h3 className='text-xl font-lobster'>Used Technologies :</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                            {Technologies.map((item, i) => <div key={i} className="item flex flex-col gap-2 items-center justify-center shadow shadow-black p-5 border border-light-gray rounded">
                                {item.icon}
                                <h5 className='text-base text-center xxs:text-lg'>{item.name}</h5>
                            </div>)}
                        </div>
                    </div>
                </div>
            </section >
        </HelmetProvider>
    )
}

export default About