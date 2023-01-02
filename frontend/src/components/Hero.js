import React from 'react'
import PhotoGrid from '../images/photo-grid.png'
import Card from './Card'

const Hero = () => {
    return (
        <section className='hero'>
            <img src={PhotoGrid} alt="" className='photo-grid' />
            <h2 className='hero-header'>Online Experiences</h2>
            <p className='hero-paragraph'>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <Card />
        </section>
    )
}

export default Hero