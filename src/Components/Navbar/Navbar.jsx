import React, { useState, useEffect } from "react";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useLocation, Link } from "react-router-dom";
import "./style.scss";
import logo from "./../../images/logo-footer.png"

// const links = [
//   { title: "Home", to: "/" },
//   { title: "Games", to: "/games" },
//   { title: "About", to: "/about" },
//   { title: "Contact", to: "/contact" },
// ]


const Navbar = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();
  const { pathname } = window.location


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setMobileMenu(false);
      }
    });
  }, []);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY && !mobileMenu) {
          setShow("hide");
        } else {
          setShow("show");
        }
      } else {
        setShow("top");
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  return (
    <header className={`header px-5 ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <div className="container flex justify-between items-center">
        <div className="logo">
          <Link to={"/"} className="flex items-center justify-center gap-1 select-none">
            <img src={logo} alt="" className="w-12 h-12" />
            <h1 className='text-[40px] sm:text-5xl font-bold font-luckiest text-transparent bg-clip-text tracking-wide bg-gradient-to-r from-white to-second text-clip'>MatriX</h1>
          </Link>
        </div>
        <ul className={`menuItems hidden md:flex items-center list-none`}>
          {/* {links.map((link, i) => <li key={i} className="menuItem text-light">
            <Link to={link.to} onClick={() => setActiveNav(link.title)} className={`${activeNav} w-full hover:text-second p-3 `}>{link.title}</Link>
          </li>)} */}
          <li className="menuItem text-light">
            <Link to="/" className={`${pathname === "/" ? "border-b-2 border-second text-second" : "hover:text-second"} w-full py-2 px-0.5`}>Home</Link>
          </li>
          <li className="menuItem text-light">
            <Link to="/games" className={`${pathname === "/games" ? "border-b-2 border-second text-second" : "hover:text-second"} w-full py-2 px-0.5`}>Games</Link>
          </li>
          <li className="menuItem text-light">
            <Link to="/about" className={`${pathname === "/about" ? "border-b-2 border-second text-second" : "hover:text-second"} w-full py-2 px-0.5`}>About</Link>
          </li>
          <li className="menuItem text-light">
            <Link to="/contact" className={`${pathname === "/contact" ? "border-b-2 border-second text-second" : "hover:text-second"} w-full py-2 px-0.5`}>Contact</Link>
          </li>
        </ul>
      </div>

      <div className="mobileMenuItems flex md:hidden gap-5 items-center text-light text-xl">
        {mobileMenu ? (
          <VscChromeClose onClick={() => setMobileMenu(false)} />
        ) : (
          <SlMenu onClick={() => setMobileMenu(true)} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
