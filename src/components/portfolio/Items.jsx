import React from 'react'

const Items= ({projectItems}) => {
    
    return (
        <>
        {projectItems.map((projectItems) => {
            const {id, img} = projectItems;
            return (
                <div className='portfolio_items card card-two'>
                    <div className='portfolio__img-wrapper'>
                        <img src = {img} alt='' className='portfolio__img' />

                    </div>
                </div>
        )
    })}
    </>

    
)
}

export default Items
