import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import img from '../Images/people-free.webp'

function Why() {
    return (
        <div>
            <Navigation />
            <div className='why-enes'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='why-header'>
                    <h1>Why enesHR: Complete HR, Payroll, and Benefits for growing teams</h1>

                </div>
                <br />
               <div className='why-content'>
                 <p>Cut admin time, boost compliance, and get real-time insights with an HR platform teams actually use.</p>
               </div>
                <br />
                <br />
                <br />
                <br />

                <div className='people-flex'>
                    <div className='set-people-free'>
                        <h2>We set people free to do <br />great work</h2>
                        <p>People are the key to workplace excellence. If you give HR knowledge and time to work with people, they can build the kind of culture, policies, and people practices that set entire organizations free to be better at what they do. And when you give employees the power to help themselves, they feel more valued and capable as contributors rather than simple assets. BambooHR is designed to do both. That’s what makes us different.</p>
                    </div>
                    <div className='people-image'>
                        <img src={img} alt='people-free' className='people-free' />

                    </div>
                </div>

               

            </div>

            <Footer />
        </div>
    )
}

export default Why