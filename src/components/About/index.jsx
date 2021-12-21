import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

const About = () => {
  useEffect(() => {

  }, [])
  return (
    <>
      <h2>About</h2>
      <p>This is challenge webpage, for practice all learned in the program TOP of Make It Real Camp.</p>
      <p>Here we put in practice all concepts like:</p>
      <ul>
        <li>Istalling and starting a React js Project</li>
        <li>Management of libreries like React-router, sass, etc</li>
        <li>Reading and rendering in a pretty presentation of API info</li>
        <li>Concepts to work with Git and GitHub</li>
      </ul>

      <Link to='/'>Go To Home</Link>
    </>
  )
}

export default About
