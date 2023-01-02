import Star from '../images/star.svg'

const Card = ({ img, title, rating, ratingCount, country, price, per }) => {
    return (
        <div className="card">
            <div className="card-image">
                <span className="card-status">SOLD OUT</span>
                <img src={img} alt="" />
            </div>
            <div className="card-info">
                <div className='card-info-1'>
                    <span className='card-rating-con'>
                        <img src={Star} alt="" className='card-star' />
                        <span className='card-rating'>{rating}</span>
                        <span className='card-num-rating muted'>({ratingCount})</span>
                    </span>
                    <span className='muted'>•</span>
                    <span className='muted'>{country}</span>
                </div>
                <div className='card-info-2'>
                    <p className='card-title'>{title}</p>
                </div>
                <div className='card-info-3'>
                    <span className='bold'>From </span>
                    <span className='bold'>${price} </span>
                    <span className='muted'>/ </span>
                    <span className='muted'>{per}</span>
                </div>
            </div>
        </div>
    )
}

export default Card