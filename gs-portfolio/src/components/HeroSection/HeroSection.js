import React from 'react'
import Button from '../Button/Button'
import { FaPlayCircle } from "react-icons/fa";
import './HeroSection.css'
import '../../App.css'
// import Video from '../../videos/video-2.mp4'

function HeroSection() {
    return (
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
           WATCH TRAILER <FaPlayCircle/>
          </Button>
        </div>
      </div>
    );
  }
  
  export default HeroSection;
  