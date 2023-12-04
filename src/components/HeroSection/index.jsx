import React, { useState } from 'react'
import Video from '/src/videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

function HeroSection() {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Digital To-do List Made Easy</HeroH1>
            <HeroP>Don't waste more time and sign up today.</HeroP>
            <HeroBtnWrapper>
              <Button to='/signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                Get Started {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection