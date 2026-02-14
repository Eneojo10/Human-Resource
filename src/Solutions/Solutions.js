import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import img from '../Images/hr discuss.webp'
import { BsTrophy } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import img1 from '../Images/solutions.webp'
import img2 from '../Images/hr lady.webp'
import img3 from '../Images/hr lady2.webp'
import img4 from '../Images/hr lady 4.webp'
import Footer from './../Footer/Footer';
import logo from '../Images/logo-removebg-preview.png'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

function Solutions() {
    const [showModal, setShowModal] = useState(false);
      const [openIndex, setOpenIndex] = useState(null);



    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What does enesHR do?",
            answer:
                "enesHR is the complete HR platform that brings all your employee data together in one place, giving you the data accuracy, security, and coordination you need to make data-driven decisions."
        },
        {
            question: "How much does enesHR cost?",
            answer:
                "enesHR pricing varies depending on the number of employees at your organization and the features you select. To get a free price quote, call 07062304776 or visit our pricing page."
        },
        {
            question: "Is your support team outsourced?",
            answer:
                "No, our support team is entirely in-house to ensure you receive the best service possible."
        },
        {
            question: 'How does enesHR comply with data security regulations?',
            answer: 'With global data centers strategically located in Nigeria, we can ensure compliance with-specific regulations and provide peace of mind for all our customers, no matter where they are located.'

        },

    ];

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
                <br />
                <div>
                    <div className='sol-p'>
                        <p>Facing HR challenges you can't tackle alone? Overcome data challenges and drive your HR initiatives forward with targeted, hands-on assistance.</p>
                    </div>
                    <br />

                    <div className='servicebutton'>
                        <button className='service-btn' onClick={() => setShowModal(true)}>Contact enesHR Services</button>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='hr-discuss'>
                        <img src={img} alt="hr discuss" className='hr-discuss' />
                    </div>
                    <br />
                </div>

            </div>
            <br />
            <br />
            <div>
                <div className='enesser'>
                    <h4>Why choose enesHR® Services?</h4>
                </div>
                <br />
                <br />
                <br />

                <div className='sol-icons'>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <BsTrophy />
                        </div>
                        <div className='e-one'>
                            <h4>Master EnesHR</h4>
                            <p>Get expert training for better adoption and efficiency, so you can reach your goals faster.</p>
                        </div>
                    </div>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <BsPersonCheckFill />
                        </div>
                        <div className='e-one'>
                            <h4>Navigate HR confidently</h4>
                            <p>Consult with a dedicated expert for tailored guidance, in-depth insights, and peace of mind.</p>
                        </div>
                    </div>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <GiNetworkBars />
                        </div>
                        <div className='e-one'>
                            <h4>Simplify data management</h4>
                            <p>Let our experts handle your thorniest data tasks, from data imports to account cloning.</p>
                        </div>
                    </div>
                    <div className='sol-icon-one'>
                        <div className='sol-icon-one-'>
                            <BsTrophy />
                        </div>
                        <div className='e-one'>
                            <h4>Level up payroll reporting</h4>
                            <p>Take your enesHR® Payroll insights up a notch with advanced reporting services.</p>
                        </div>
                    </div>

                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />



                <div className='tackle'>
                    <h2>Let's tackle today's fast-paced HR challenges, together</h2>
                </div>
                <br />
                <br />
                <br />

                <div className='sol--colour'>
                    <div className='sol-colour'>
                        <div className='sol-colour-one'>
                            <h4>PRODUCT TRAINING SERVICES</h4>

                        </div>

                    </div>

                    <div className='sl-img'>
                        <img src={img1} alt="hr discuss" className='sol-colour-img' />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className='sol--colour'>
                    <div className='sl-img'>
                        <img src={img2} alt="hr discuss" className='sol-colour-img' />
                    </div>
                    <div className='sol-colour'>
                        <div className='sol-colour-one'>
                            <h4>HR CONSULTING SERVICES</h4>

                        </div>

                    </div>


                </div>
                <br />
                <br />
                <br />
                <div className='sol--colour'>
                    <div className='sol-colour'>
                        <div className='sol-colour-one'>
                            <h4>DATA INTEGRITY SERVICES</h4>

                        </div>

                    </div>

                    <div className='sl-img'>
                        <img src={img3} alt="hr discuss" className='sol-colour-img' />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className='sol--colour'>
                    <div className='sl-img'>
                        <img src={img4} alt="hr discuss" className='sol-colour-img' />
                    </div>
                    <div className='sol-colour'>
                        <div className='sol-colour-one'>
                            <h4>PAYROLL REPORTING SERVICES</h4>

                        </div>

                    </div>


                </div>
                <br />
                <br />
                <br />

                <div className='how_we_work'>
                    <div className='how-we-work'>
                        <p>HOW WE WORK WITH YOU</p>
                        <h1>HR is hard - we're here to make it easier, every step of the way</h1>

                    </div>
                    <br />

                    <div className='sol-border-flex'>
                        <div className='sol-border'>

                        </div>
                        <div className='sol-border'>

                        </div>
                        <div className='sol-border'>

                        </div>
                    </div>
                    <br />
                </div>

                <div>
                    <div className='leaf-flex'>
                        <div>
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <div className='leaf'>
                            <img src={logo} alt='' />
                        </div>


                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div className="d-line__"></div>
                            <br />
                            <div className="icon-image-">
                                <div className="time--attendance">
                                    <div className="iconflex">
                                        <h2>{faq.question}</h2>

                                        <div className="if" onClick={() => toggleSection(index)}>
                                            {openIndex === index ? (
                                                <MdKeyboardArrowUp />
                                            ) : (
                                                <MdKeyboardArrowDown />
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {openIndex === index && (
                                    <div className="content-flex">
                                        <div className="text--side">
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <br />
                        </div>
                    ))}
                    <br />


                </div>

            </div>

            <Footer />

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