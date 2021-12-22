import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

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

      <Link className='about-wrapper__button' role='button' to='/'>Go To Home</Link>
    </section>
  )
}

export default About
