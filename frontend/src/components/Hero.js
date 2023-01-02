import React from 'react'
import PhotoGrid from '../images/photo-grid.png'
import Card from './Card'
import CardImg from '../images/katie-zaferes.png'

const cardDetails = {
    img: CardImg,
    title: 'Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.',
    rating: '5.0',
    ratingCount: 6,
    country: 'USA',
    price: 136,
    per: 'person'
}

const Hero = () => {
    const { title, img, rating, ratingCount, country, price, per } = cardDetails
    return (
        <section className='hero'>
            <img src={PhotoGrid} alt="" className='photo-grid' />
            <h2 className='hero-header'>Online Experiences</h2>
            <p className='hero-paragraph'>
                {title}
            </p>
            <Card
                img={img}
                title={title}
                rating={rating}
                ratingCount={ratingCount}
                country={country}
                price={price}
                per={per}
            />
        </section>
    )
}

export default Hero