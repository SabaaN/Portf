import React from 'react';
import './home.css'

import profileimg from '../../assets/profileimg.png';
import ShapeOne from '../../assets/shape-1.png';
import ShapeTwo from '../../assets/shape-2.png';

import { FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';



const Homee = () => {
    return (
        <section className='home' id='home'>
            <div className='home__wrapper'>
                <div className='home__container container'>
                    <p className='home__subtitle text-cs'>
                        Hello, <span>My Name Is</span>
                    </p>

                    <h1 className='home__title text-cs'>
                        <span>HARIS</span> IMRAN
                    </h1>

                    <p className='home__job'>
                        <span className='text-cs'> I Am a </span> <b>Graphic Designer & Brand Designer</b>
                    </p>

                    <div className='home__img-wrapper'>
                        <div className='home__banner'>
                            <img src={profileimg} alt='' className='home__profile' />
                        </div>

                        <p className='home__data home__data-one'>
                            <span className='text-lg'>
                                3 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                Years of <span>Experience</span>
                            </span>
                        </p>

                        <p className='home__data home__data-two'>
                            <span className='text-lg'>
                                100 <b>+</b>
                            </span>
                            <span className='text-sm text-cs'>
                                Completed <span>Projects</span>
                            </span>
                        </p>
                        <img src={ShapeOne} alt='' className='shape shape__1' />
                        <img src={ShapeTwo} alt='' className='shape shape__2' />
                        <img src={ShapeTwo} alt='' className='shape shape__3' />

                    </div>

                    <p className='home__text'>
                        From Multan, Pakistan. I have rich experience in graphic designing, and have expertise in brand designing too. I'm also good at video editing.
                    </p>

                    <div className='home__socials'>
                        <a href='https://twitter.com/harispsd?t=GV8SCsn3qk7j2hyDEZJouQ&s=09' target="_blank" rel="noopener noreferrer" className='home__socials-link'>
                            <FaTwitter />
                        </a>


                        <a href='https://www.instagram.com/harispsd/?igshid=YmMyMTA2M2Y=' target="_blank" rel="noopener noreferrer" className='home__socials-link'>
                            <FaInstagram />
                        </a>


                        <a href='https://www.behance.net/marsplays' target="_blank" rel="noopener noreferrer" className='home__socials-link'>
                            <FaBehance />
                        </a>
                    </div>


                </div>
            </div>

            <div className="section__deco deco__left">

            </div>

        </section>

    )
}

export default Homee
