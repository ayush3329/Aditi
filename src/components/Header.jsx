import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../assets/images/A-logo.png";
import userImg from "../assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";


function Header() {
  // NAVIGATION LINKS
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Our Doctors', path: '/doctors' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const headRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headRef.current.classList.add('sticky_header');
      } else {
        headRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener('scroll', handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => {
    menuRef.current.classList.toggle('show_menu');
  };
  return (
    <header className="header flex items-center bg-white shadow-md" ref={headRef}>
      <div className="container flex justify-between items-center">
        <div>
          <img src={logo} alt="ADITI LOGO" />
        </div>
        <div className=" navigation" ref={menuRef} onClick={toggleMenu}>
          <ul className="menu flex justify-center lg:gap-10 lg:m-0.5">
            {navLinks.map((link, index) => (
              <li className=" m-[0.5rem] "key={index}>
                {/* Use NavLink instead of a regular anchor tag */}
                <NavLink to={link.path} className={navClass => navClass.isActive ? "text-primaryColor text-[17px] leading-7 font-[900]" : "text-textColor text-[18px] leading-7 font-[500] hover:text-primaryColor"}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* nav right */}
        <div className='flex items-center gap-4 '>
          <div className="hidden">
            <Link to='/'>
              <figure className='w-[35px] h-[35px] rounded-full'>
                <img src={userImg} className="w-full rounded-full" alt="phto hai user ka" />
              </figure>
            </Link>
          </div>
          <Link to='/login'>
            <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">Login</button>
          </Link>
          <span className='md:hidden'  onClick={toggleMenu}>
            <BiMenu className='w-6 h-6 cursor-pointer' />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
