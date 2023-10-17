import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { LiaFacebookMessenger } from "react-icons/lia"
import { Helmet, HelmetProvider } from 'react-helmet-async'
import saberImg from "./../images/saber.jpg"
const Contact = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <section className='pt-16' >
                <div className='container px-4'>
                    <div className='text-center p-5 mb-8'>
                        <h1 className='text-3xl mb-3 font-bold text-second'>Contact</h1>
                        <p className='text-light'>You can contact me via links & phone number below</p>
                    </div>
                    <div className='pb-10 p-5 flex flex-col bg-main-lighter border border-light-gray rounded'>
                        <div className='about flex gap-4 mb-5 items-center'>
                            <img src={saberImg} alt={"Mohamed Saber"} width="120" className='rounded-full p-1 border-2 border-second-light' />
                            <div className='flex flex-col'>
                                <span className='name block text-second text-base capitalize font-luckiest tracking-wider'>Mohamed Saber Abd-Eltawab</span>
                                <span className='job block text-sm text-light font-lobster'>MERN Stack Developer</span>
                            </div>
                        </div>
                        <p className='text-sm text-light-gray mb-3 leading-6'><span className='text-light text-base font-medium font-lobster'>MERN Stack</span> Developer with two years of experience developing web, and business
                            intelligence solutions using React.JS, Node.JS, Express.JS, MongoDB and SQL
                            Server. Expertise in requirements analysis, design, development, testing,
                            maintenance, enhancement, and production support of business applications.
                            Certified Web Development Professional with a deep passion for technology,
                            extensive technological expertise, and well-developed teamwork abilities
                        </p>
                        <p className='text-sm text-light-gray mb-3 leading-6'><span className='text-second'>Experience : </span> 2 Years</p>
                        <p className='text-sm text-light-gray mb-6 leading-6'><span className='text-second'>E-mail : </span> mohamed.saber.abdeltawab@gmail.com</p>
                        <div className='team_social flex flex-wrap gap-2 xxs:gap-3'>
                            <a href={"https://www.linkedin.com/in/mohamedsaber5050"} className='p-4 text-second-light bg-light rounded cursor-pointer hover:bg-second-light hover:text-white transition duration-300'><FaLinkedinIn /></a>
                            <a href={"https://www.facebook.com/mo7amedsaber5050/"} className='p-4 text-second-light bg-light rounded cursor-pointer hover:bg-second-light hover:text-white transition duration-300'><FaFacebook /></a>
                            <a href={"https://github.com/MohamedSaber55"} className='p-4 text-second-light bg-light rounded cursor-pointer hover:bg-second-light hover:text-white transition duration-300'><FaGithub /></a>
                            <a href={"https://api.whatsapp.com/send?phone=+201210529969&text=Hello!"} className='p-4 text-second-light bg-light rounded cursor-pointer hover:bg-second-light hover:text-white transition duration-300'><FaWhatsapp /></a>
                            <a href={"https://m.me/100014025102184/"} className='p-4 text-second-light bg-light rounded cursor-pointer hover:bg-second-light hover:text-white transition duration-300'><LiaFacebookMessenger /></a>
                            <a href={"https://www.instagram.com/mo7amedsaber5050/"} className='p-4 text-second-light bg-light rounded cursor-pointer hover:bg-second-light hover:text-white transition duration-300'><FaInstagram /></a>
                        </div>
                    </div>
                </div>
            </section >
        </HelmetProvider>
    )
}

export default Contact