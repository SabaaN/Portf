import React, {useState} from 'react'
import './portfolio.css'
import Items from './Items'
import { projimgs } from '../../Data';




const Portfolio = () => {
    const [projectItems] = useState(projimgs)
    return (

        <section className='portfolio section' id='work'>
            <h2 className="section__title text-cs">Portfolio </h2>
            <p className="section__subtitle">

                My <span>Work</span>
            </p>
            <div className='portfolio__container container grid'>
                <Items projectItems={projectItems} />
            </div>
            <div className="section__deco deco__right">
            </div>

        </section>

    )
}

export default Portfolio