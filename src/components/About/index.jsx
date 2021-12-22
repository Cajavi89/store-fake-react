import React from 'react'
import './styles.scss'
import picture from '../../assets/images/miFoto.png'

const About = () => {
  return (
    <section className='about-wrapper'>
      <h2 className='about-wrapper__title'>About</h2>
      <p className='about-wrapper__description'>This is challenge webpage, for practice all learned in the program TOP of Make It Real Camp.</p>
      <p className='about-wrapper__concepts'>Here we put in practice all concepts like:</p>
      <ul className='about-wrapper__list'>
        <li>Istalling and starting a React js Project</li>
        <li>Management of libreries like React-router, sass, etc</li>
        <li>Reading and rendering in a pretty presentation of API info</li>
        <li>Concepts to work with Git and GitHub</li>
      </ul>

      <section className='about-wrapper__info-wrapper'>
        <section className='about-wrapper__info-wrapper__name-and-info'>
          <article className='about-wrapper__info-wrapper__name-and-info--name'>Carlos Jaramillo</article>
          <article className='about-wrapper__info-wrapper__name-and-info--github'>
            <a href={'https://github.com/Cajavi89'} target={'_blank'} rel="noreferrer">https://github.com/Cajavi89 </a></article>
        </section>
        <figure className='about-wrapper__info-wrapper__picture'>
          <img className='about-wrapper__info-wrapper__picture--image' src={picture} alt='picture of Carlos Jaramillo' />
        </figure>
      </section>
    </section>
  )
}

export default About
