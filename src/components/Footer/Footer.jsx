import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexEnd f-container">

            <div className="flexColStart f-left">
                <img src="./logoBA.png" alt="" width={120} />
                <span className="secondaryText">
                    Our vision is to make all people <br />
                    the best place to live for them.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span>
                <span className='secondaryText'>KIIT University, Bhubaneswar, Odisha, 751024</span>

                <div className="flexStart f-menu">
                    <span>Property</span>
                    <span>Services</span>
                    <span>Product</span>
                    <span>AboutUs</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer