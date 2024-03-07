import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import {motion} from 'framer-motion'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="circle"/>
            <motion.h1 initial={{y: "2rem", opacity: 0}} animate={{y: 0, opacity: 1}} transition={{duration: 2, type: "spring"}}>
            Home: where memories <br /> are made and <br /> dreams take flight
              </motion.h1>
          </div>
          <div className="flexColStart hero-desc">
          <span className='secondaryText'>Imagine laughter echoing through sun-drenched rooms, <br/> quiet moments by the fireplace, and a haven that reflects your unique story.</span>
          <span className='secondaryText'>At BelleAire, we understand the power of "home."</span>
          <span className='secondaryText'>We're passionate about connecting you with properties that spark joy, <br/>inspire comfort, and become the backdrop for your most cherished memories.</span>
          <span className='secondaryText'>Let's find your BelleAire.</span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type='text' />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Premium Products
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1980} end={2000} duration={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Happy Customers
              </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>
                Award Winning
              </span>
            </div>
          </div>
        </div>
        <div className="flexCenter hero-right">
          <motion.div initial={{x:"7rem", opacity: 0}} animate={{x:0, opacity: 1}} transition={{duration: 2, type: "spring"}} className='image-container'>
            <img src='./img1.jpg' alt=''/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero