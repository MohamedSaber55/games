import React from 'react'
import ScrollToTopBTN from '../ScrollToTopBTN/ScrollToTopBTN'
import { Link } from 'react-router-dom'
import logo from "./../../images/logo-footer.png"
import { CiMail } from "react-icons/ci"
import { PiPhoneThin } from "react-icons/pi"
const Footer = () => {
    return (
        <footer>
            <ScrollToTopBTN />
            <div className="bg-main-light mt-10 text-light text-center">
                <div className="container py-5">
                    <div className="flex flex-col items-center gap-5">
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="links">
                            <div className="navs flex gap-5">
                                <Link to={"/"} className='hover:text-second p-2'>Home</Link>
                                <Link to={"/games"} className='hover:text-second p-2'>Games</Link>
                                <Link to={"/about"} className='hover:text-second p-2'>About</Link>
                                <Link to={"/contact"} className='hover:text-second p-2'>Contact</Link>
                            </div>
                            <div className="copyright">
                                <p className="container text-sm leading-10 m-auto py-5">
                                    Copyright © 2023 <a href="https://mohamed-saber-portfolio.onrender.com/" target='_blank' className='text-second' rel="noreferrer">Mohamed Saber.</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer