import PropTypes from 'prop-types'
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import './styles.scss'

const ProductDetail = ({ data }) => {
  const { productId } = useParams()

  const product = data.find(product => product.id === Number(productId))

  const { image, title, category, description, price, rating } = product
  const { rate, count } = rating

  return (
    <>
      <section className="product-wrapper">
        <figure className="product-wrapper__figure">
          <img className='product-wrapper__figure--image' src= {image} alt= {title} />
        </figure>
        <section className="product-wrapper__details">
          <article className="product-wrapper__details--category">
            <span>Category: </span> {category} </article>
          <article className="product-wrapper__details--title"> <span>Product: </span>{title} </article>
          <article className="product-wrapper__details--description"> <span>Description: </span>{description} </article>
          <article className="product-wrapper__details--price"><span>Price: </span>{`$${price}`}</article>
          <section className="product-wrapper__details__rating">

            <article className="product-wrapper__details__rating--rate "><span>Rate: </span>{rate} stars!</article>
            <article className="product-wrapper__details__rating--count"><span>Count: </span>{count}</article>
          </section>
        </section>
      </section>
      <Link to="/" className="back">Back</Link>
    </>
  )
}

ProductDetail.propTypes = {
  data: PropTypes.array
}

export default ProductDetail
