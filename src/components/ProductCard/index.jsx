import {useState} from 'react'
import {Link} from 'react-router-dom'
import Countdown from 'react-countdown'
import './styles.scss'


const randomNumber=()=>{
  return Math.random()*(240000-20000)+20000
}

const renderer = ({ hours, minutes, seconds }) => {
  return (
    <>
      {hours > 9 ? null : 0}
      {hours}:{minutes > 9 ? null : 0}
      {minutes}:{seconds > 9 ? null : 0}
      {seconds}
    </>
  );
}

const ProductCard = ({product}) =>{
const [counterComplete,setCounterComplete] = useState(false)

  return(
    <li className='all-products__article-container' key={product.id}>
      <img src={product.image} alt={product.title} className='all-products__article-container--image' />
      <h3>{product.title}</h3>
      <div className='all-products__article-container__timerAndButton'>
        {!counterComplete
          ? <>
              <Countdown
                date={Date.now() + randomNumber()}
                renderer={renderer}
                onComplete={()=>setCounterComplete(true)}
                className='all-products__article-container__timerAndButton--timer'
              />
              <div className='all-products__article-container__timerAndButton--button'>
                <Link to={`/product/${product.id}`} key={product.id} type='button' role='button'>Go To Detail</Link>
              </div>
            </>
          :
            <p>Offer is closed!</p>
        }
      </div>
    </li>
  )

}

export default ProductCard;
