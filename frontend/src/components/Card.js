import Star from '../images/star.svg'

const Card = ({ title, description, coverImg, stats, ratingCount, location, price, openSpots, id }) => {
    return (
        <div className="card">
            <div className="card-image">
                {openSpots ? false : <span className="card-status">SOLD OUT</span>}
                <img src={window.location.origin + '/images/' + coverImg} alt="" />
            </div>
            <div className="card-info">
                <div className='card-info-1'>
                    <span className='card-rating-con'>
                        <img src={Star} alt="" className='card-star' />
                        <span className='card-rating'>{stats.rating}</span>
                        <span className='card-num-rating muted'>({stats.reviewCount})</span>
                    </span>
                    <span className='muted'>•</span>
                    <span className='muted'>{location}</span>
                </div>
                <div className='card-info-2'>
                    <p className='card-title'>{title}</p>
                </div>
                <div className='card-info-3'>
                    <span className='bold'>From </span>
                    <span className='bold'>${price} </span>
                    <span className='muted'>/ person</span>
                </div>
            </div>
        </div>
    )
}

export default Card