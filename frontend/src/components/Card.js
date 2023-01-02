import CardImg from '../images/katie-zaferes.png'
import Star from '../images/star.svg'

const Card = () => {
    return (
        <div className="card">
            <div className="card-image">
                <span className="card-status">SOLD OUT</span>
                <img src={CardImg} alt="" />
            </div>
            <div className="card-info">
                <div className='card-info-1'>
                    <span className='card-rating-con'>
                        <img src={Star} alt="" className='card-star' />
                        <span className='card-rating'>5.0</span>
                        <span className='card-num-rating muted'>(6)</span>
                    </span>
                    <span className='muted'>•</span>
                    <span className='muted'>USA</span>
                </div>
                <div className='card-info-2'>
                    <p className='card-title'>Life lessons with Katie Zaferes</p>
                </div>
                <div className='card-info-3'>
                    <span className='bold'>From </span>
                    <span className='bold'>$136 </span>
                    <span className='muted'>/ </span>
                    <span className='muted'>person</span>
                </div>
            </div>
        </div>
    )
}

export default Card