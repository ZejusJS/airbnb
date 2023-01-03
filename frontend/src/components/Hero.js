import React from 'react'
import PhotoGrid from '../images/photo-grid.png'
import Card from './Card'
import cardDetails from '../data'


const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
}

const Hero = () => {

    return (
        <section className='hero'>
            <img src={PhotoGrid} alt="" className='photo-grid' />
            <h2 className='hero-header'>Online Experiences</h2>
            <p className='hero-paragraph'>
                Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.
            </p>
            <div className={`menu-cards`}>
                {cardDetails.map(details => {
                    return <Card key={details.id} {...details} />
                })}
            </div>
        </section>
    )
}

export default Hero