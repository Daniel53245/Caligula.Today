import React from 'react'
import './Navigation.scss'
import PersonalIcon from '../../assets/img/g-HOfy7k_400x400.jpg'

export const Navigation = () => {
  return (
    <div className='navigation'>
        <div className='icon'>
                <img src={PersonalIcon} alt='logo for Boyu Dai'></img>
        </div>
        <div className="links">
                <a>About</a>
                <a>Blog</a>
                <a>Portfolio</a>
                <a>Contact</a>
        </div>
    </div>
  )
}