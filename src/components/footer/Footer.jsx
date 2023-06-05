import React from 'react'
import './footer.css'

import { FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container grid">
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

                <p className='footer__copyright text-cs'>
                    Developed By <span>Saba N</span>
                </p>
            </div>

        </footer>

    )
}

export default Footer