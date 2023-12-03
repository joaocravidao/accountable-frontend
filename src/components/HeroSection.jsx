import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../index.css'

function HeroSection() {
  return (
    <div className='hero-container'>
        <img src='./src/assets/background-image.jpeg' />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER<i className='far fa-play-circle'/></Button>
        </div>
    </div>
  )
}

export default HeroSection