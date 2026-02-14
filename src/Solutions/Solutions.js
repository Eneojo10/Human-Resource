import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import img from '../Images/hr discuss.webp'
import { BsTrophy } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";

function Solutions() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Navigation />

            <div className='home-page'>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='rated-hr'>
                    <h1>Everything You Need to Manage HR Better</h1>

                </div>
                <br/>
                <div>
                    <div className='sol-p'>
                        <p>Facing HR challenges you can't tackle alone? Overcome data challenges and drive your HR initiatives forward with targeted, hands-on assistance.</p>
                    </div>
                    <br/>

                    <div className='servicebutton'>
                        <button className='service-btn' onClick={() => setShowModal(true)}>Contact enesHR Services</button>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <div className='hr-discuss'>
                        <img src={img} alt="hr discuss" className='hr-discuss' />
                    </div>
                    <br/>
                </div>

            </div>
            <br/>
            <br/>
            <div>
                <div className='enesser'>
                    <h4>Why choose enesHR® Services?</h4>
                </div>
                <br/>
                <br/>
                <br/>

                <div className='sol-icons'>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <BsTrophy/>
                        </div>
                        <div className='e-one'>
                            <h4>Master EnesHR</h4>
                            <p>Get expert training for better adoption and efficiency, so you can reach your goals faster.</p>
                        </div>
                    </div>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <BsPersonCheckFill/>
                        </div>
                        <div className='e-one'>
                            <h4>Navigate HR confidently</h4>
                            <p>Consult with a dedicated expert for tailored guidance, in-depth insights, and peace of mind.</p>
                        </div>
                    </div>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <GiNetworkBars/>
                        </div>
                        <div className='e-one'>
                            <h4>Simplify data management</h4>
                            <p>Let our experts handle your thorniest data tasks, from data imports to account cloning.</p>
                        </div>
                    </div>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <BsTrophy/>
                        </div>
                        <div className='e-one'>
                            <h4>Level up payroll reporting</h4>
                            <p>Take your enesHR® Payroll insights up a notch with advanced reporting services.</p>
                        </div>
                    </div>
                    
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
              
            

                <div className='tackle'>
                    <h2>Let's tackle today's fast-paced HR challenges, together</h2>
                </div>
            </div>

            {showModal && (
                <div className='modal-overlay' onClick={() => setShowModal(false)}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <div className='modal-header'>
                            <h2>Contact enesHR Services</h2>
                            <span className='close-modal' onClick={() => setShowModal(false)}>&times;</span>
                        </div>
                        <div className='modal-body'>
                            <p>Get in touch with our team to learn more about enesHR Services.</p>
                            <form>
                                <input type='text' placeholder='Your Name' required />
                                <input type='email' placeholder='Your Email' required />
                                <input type='tel' placeholder='Phone Number' />
                                <textarea placeholder='Message' rows='4'></textarea>
                                <button type='submit' className='submit-btn'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Solutions