import React from 'react'
import '../../styles/NotFound.css'
import ErrorImage from '../../assets/images/not-found.png'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='not-found'>
        <img className='not-found-img' src={ErrorImage} alt="error" />
        <span className='not-found-msg'>Opps, can't fint the page you looking for..</span>
        <Link to='/'>Go to Home page</Link>
    </div>
  )
}
