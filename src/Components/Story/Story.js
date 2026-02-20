import React from 'react'
import Navigation from '../../Navigation/Navigation'
import Footer from '../../Footer/Footer'
import hrimage from '../../Images/lady-smiling.jpg'
import free from '../../Images/set-people.webp'
import img2 from '../../Images/succeed.jpg'
import img3 from '../../Images/do right.webp'
import img4 from '../../Images/life.webp'
import img5 from '../../Images/best.webp'
import img6 from '../../Images/open.webp'
import img7 from '../../Images/count.webp'
import img8 from '../../Images/lead.webp'
import img9 from '../../Images/grow.webp'

function Story() {
  return (
    <div>
      <Navigation />

      <div>
        <div className='home-page'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className='our-story'>
            <h1>Our Story</h1>
          </div>

          <div className='story-image-flex'>
            <div className='about-image'>
              <img src={hrimage} alt='hr' className='hr-image' />
            </div>
            <div className='lorem-ipsum'>
              <h1>It's always been about people.</h1>
              <p>We are a team of passionate individuals dedicated to making HR management easier and more efficient for businesses of all sizes. Our journey began with a simple idea: to empower organizations with tools that help them attract, retain, and develop their most valuable asset – their people.</p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />



        </div>
        <br />
        <br />
        <br />

        <div className='freflex'>
          <div className='free'>
            <img src={free} alt='people-free' className='people-free' />
          </div>

          <div className='lorem-ipsum'>
            <h1>We set people free to do great<br /> work</h1>
            <p>People are the key to workplace excellence. If you give HR knowledge and time to work with people, they can build the kind of culture, policies, and people practices that set entire organizations free to be better at what they do. And when you give employees the power to help themselves, they feel more valued and capable as contributors rather than simple assets. BambooHR is designed to do both. That’s what makes us different.</p>
          </div>

        </div>

        <div className='story-image-flex'>

          <div className='lorem-ipsum'>
            <h1>How we succeed matters.</h1>
            <p>Our success is measured not just in the tools we build, but in the positive impact we have on organizations and their people. We believe that when HR teams are empowered with the right tools and insights, they can create environments where people thrive and businesses flourish.</p>
          </div>
          <div className='about-image'>
            <img src={img2} alt='hr' className='hr-image' />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className='story-grid'>
          <div className='hr-img-one'>
            <img src={img3} alt='do-right' className='hr-image' />
          </div>
          <div>
            <img src={img4} alt='do-right' className='hr-image' />
          </div>
          <div>
            <img src={img5} alt='do-right' className='hr-image' />
          </div>
          <div>
            <img src={img6} alt='do-right' className='hr-image' />
          </div>

        </div>
        <br />
        <div className='grow-grid'>
          <div className='hr-img-one'>
            <img src={img7} alt='count' className='hr-image' />
          </div>
          <div>
            <img src={img8} alt='lead' className='hr-image' />
          </div>
          <div>
            <img src={img9} alt='grow' className='hr-image' />
          </div>
        </div>
        <div>

        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default Story