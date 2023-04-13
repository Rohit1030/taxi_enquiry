import React from 'react'
import hero from "../data/hero.json"
import "./Services.css"

const Services = () => {
  return (
    <div className='services common-width' title='Services' id='services'>
        <h1>OUR SERVICES</h1>
        {hero.hero.map((item, index) => {
            return (
                <div key={index} className="service-container">
                    <div className="service-img-container">
                        <img src={item.image} alt={item.heading} className="service-img" />
                    </div>
                    <div className="about-service">
                        <h2>{item.heading}</h2>
                        <p className='common-para'>{item.aboutservice}</p>
                        <button className='btn-grad'>Read More</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Services