import React, { useEffect, useState } from 'react'
import './header.css'
import { links } from '../../Data';
import ShapeOne from '../../assets/shape-2.png';

import { FaTwitter, FaBehance, FaInstagram, FaBars } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';

import logo from '../../assets/mainlogo.png';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrollNav, setScrollNav] = useState(false);
    const [theme, setTheme] = useState('dark-theme');


    const scrollTop = () => {
        animateScroll.scrollToTop();
    };

    const changeNav = () => {
        if (window.scrollY > 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme')
        }

    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    useEffect(() => {
        document.documentElement.className = theme;
    }, [theme]);




    useEffect(() => {
        document.body.classList.toggle('no-scroll', showMenu);

    }, [showMenu]);

    return (

        <header className={`${scrollNav ? 'scroll-header' : ''} header`}>

            <nav className='nav'>

                <Link to='/' onClick={scrollTop} className='nav__logo'>

                    <img src={logo} alt='' className='main__logo' />
                </Link>
                <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
                    <div className='nav__data'>
                        <ul className='nav__list'>
                            {links.map(({ name, path }, index) => {
                                return (
                                    <li className='nav__item' key={index}>
                                        <Link className='nav__link text-cs' to={path} spy={true} smooth={true} offset={-80} hashSpy={true} duration={500} onClick={() => setShowMenu(!showMenu)}>
                                            {name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <div className='footer__socials'>
                            <a href='https://twitter.com/harispsd?t=GV8SCsn3qk7j2hyDEZJouQ&s=09' target="_blank" rel="noopener noreferrer" className='footer__socials-link'>
                                <FaTwitter />
                            </a>

                            <a href='https://www.instagram.com/harispsd/?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer" className='footer__socials-link'>
                                <FaInstagram />
                            </a>


                            <a href='https://www.behance.net/marsplays' target="_blank" rel="noopener noreferrer" className='footer__socials-link'>
                                <FaBehance />
                            </a>
                        </div>
                    </div>

                    <div className="section__deco deco__left header__deco">
                        <img src={ShapeOne} alt = '' className='shape' />
                    </div>
                </div>

                <div className="nav__btns">
                    <div className="theme__toggler" onClick={toggleTheme}>
                        {theme === 'light-theme' ? <BsMoon /> : <BsSun />}
                    </div>
                    <div className={`${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`} onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span></span>


                    </div>
                </div>

            </nav>
        </header>

    )
}

export default Header