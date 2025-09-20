import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
// import { GiTrumpet } from "react-icons/gi";
import image from '../Images/megaphone-panda.png'
import imag2 from '../Images/onboard.webp'
import img1 from '../Images/employee.webp'
import img2 from '../Images/time.webp'
import img3 from '../Images/reporting.webp'
import img4 from '../Images/performance.webp'
import img5 from '../Images/benefits.webp'
import img6 from '../Images/two.webp'
import img7 from '../Images/stars.webp'
import img8 from '../Images/hire.webp'
import img9 from '../Images/dash.webp'
import img0 from '../Images/build.webp'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import image1 from '../Images/dashboard.webp'
import image2 from '../Images/hire image.webp'
import image3 from '../Images/turnover.webp'
import user from '../Images/user2.jpg'
import logo from '../Images/logo-removebg-preview.png'
import Footer from '../Footer/Footer'

function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpens, setIsOpens] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [isShows, setIsShows] = useState(false)
    const [isDisplay, setIsDisplay] = useState(false)
    const [openIndex, setOpenIndex] = useState(null);


    const [index, setIndex] = useState(0);
    const slides = [1, 2, 3];

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % 3);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + 3) % 3);
    };




    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What does EnesHR do?",
            answer:
                "EnesHR is the complete HR platform that brings all your employee data together in one place, giving you the data accuracy, security, and coordination you need to make data-driven decisions."
        },
        {
            question: "How much does EnesHR cost?",
            answer:
                "EnesHR pricing varies depending on the number of employees at your organization and the features you select. To get a free price quote, call 07062304776 or visit our pricing page."
        },
        {
            question: "Is your support team outsourced?",
            answer:
                "No, our support team is entirely in-house to ensure you receive the best service possible."
        },
        {
            question: 'How does BambooHR comply with data security regulations?',
            answer: 'With global data centers strategically located in Nigeria, we can ensure compliance with -specific regulations and provide peace of mind for all our customers, no matter where they are located.'

        },

    ];


    return (
        <div>
            <Navigation />

            <div className='homepage'>
                <div className='trumpet'>
                    <div className='trump-icon'>
                        <img src={image} alt='' />
                    </div>
                    <div className='trump-text'>
                        <p>
                            Expand Worldwide Effortlessly: Presenting EnesHR Employer of Record (EOR), powered by Remote!</p>
                    </div>
                </div>


            </div>
            <div className='home-page'>
                <br />
                <br />
                <div className='home-white-bg'>

                </div>
                <div className='home-green-bg'></div>
                <div className='rated-hr'>
                    <h1>#1 Rated HR Software 2025</h1>
                </div>
                <div className='rated--hr'>
                    <h1>#1 Rated HR<br/> Software</h1>
                </div>
                <div className='hr-p'>
                    <p><p>One Easy-to-Use Platform for Everything HR</p></p>
                </div>
                <br />
                <br />

                <div className='all-flex'>
                    <div className='onboard-image'>
                        <img src={imag2} alt='' />
                        <p>Hiring &  Onboarding</p>
                    </div>
                    <div className='onboard-image'>
                        <img src={img1} alt='' />
                        <p>Employee Experience</p>
                    </div>
                    <div className='onboard-image'>
                        <img src={img2} alt='' />
                        <p>Time & Attendance</p>
                    </div>
                    <div className='onboard-image'>
                        <img src={img3} alt='' />
                        <p>HR Data & Reporting</p>
                    </div>
                    <div className='onboard-image'>
                        <img src={img4} alt='' />
                        <p>Performance management</p>
                    </div>
                    <div className='onboard-image'>
                        <img src={img5} alt='' />
                        <p>Benefits</p>
                    </div>
                </div>
                <br />
                <div className='demo-color'>
                    <h4>Get My Free Demo</h4>
                </div>

                <div className='remark'>
                    <div className='re-mark'>
                        <h1>
                            See why 50 businesses love working with EnesHR</h1>
                    </div>
                    <div className='re-marks'>
                        <h1>
                            50 businesses, from startups to enterprises</h1>
                    </div>
                    <br />
                    <br />
                    <br />


                    <div className='slide-section'>
                        <div className='allstars'>
                            <div className='two-image'>
                                <img src={img6} alt='' />

                            </div>
                            <div className='two-star'>
                                <img src={img7} alt='' />

                            </div>
                            <p>4.4 (20 reviews)</p>
                        </div>

                        <div className="sliders">
                            <div
                                className="d-slider"
                                style={{ transform: `translateX(-${index * 100}%)` }}
                            >
                                <div className="slide-one">
                                    <div className='c_text'>
                                        <h3>The hiring and onboarding features are so intuitive and I love the templates!</h3>

                                    </div>
                                    <div className='flex-card'>
                                        <div className='cards-image'>
                                            <img src={user} alt='' />
                                        </div>
                                        <div className='fc'>
                                            <h4>Ameh Sunday</h4>
                                            <p>HR Manager at Dangote</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-one">
                                    <div className='c_text'>
                                        <h3>Onboarding and offboarding is automated. Performance Management reviews are simple. It makes us look great in HR ;)</h3>
                                    </div>
                                    <div className='flex-card'>
                                        <div className='cards-image'>
                                            <img src={user} alt='' />
                                        </div>
                                        <div className='fc'>
                                            <h4>Ameh Sunday</h4>
                                            <p>HR Manager at Dangote</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-one">
                                    <div className='c_text'>
                                        <h3>If you are looking for a product that is very clean and easy to use then BambooHR would be great.</h3>
                                    </div>
                                    <div className='flex-card'>
                                        <div className='cards-image'>
                                            <img src={user} alt='' />
                                        </div>
                                        <div className='fc'>
                                            <h4>Ameh Sunday</h4>
                                            <p>HR Manager at Dangote</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />

                            <div className="controls">
                                <button className='prev' onClick={prevSlide}>Prev</button>
                                <button className='prev' onClick={nextSlide}>Next</button>
                            </div>
                        </div>
                    </div>

                </div>
                <br />
                <br />
                <br />



            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='announcement'>
                <div className='ments'>
                    <h1>EnesHR announcements</h1>
                </div>
                <br />
                <br />
                <br />
                <br />

                <div className='all-announcement'>
                    <div className='hire'>
                        <img src={img8} alt='' />
                        <h4>Hire Globally, Confidently—with EnesHR® Employer of Record</h4>
                        <p>Expand your talent pool and pay a diverse, global workforce with accuracy, compliance, and peace-of-mind.</p>
                    </div>
                    <div className='hire'>
                        <img src={img9} alt='' />
                        <h4>Make smarter workforce decisions with advanced insights</h4>
                        <p>Our new Custom Dashboards and HR Benchmarks give you the trends and context to drive more strategic people decisions.</p>
                    </div>
                    <div className='hire'>
                        <img src={img0} alt='' />
                        <h4>Build a Smarter Compensation Strategy</h4>
                        <p>Simplify your entire pay process—from benchmarking to planning and approvals—with EnesHR® Compensation Management.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />

                <div>
                    <h1>Combine all your HR systems into one platform.</h1>
                </div>
                <br />
                <br />
                <br />

                <div className='d-line_'>
                </div>
                <br />
                <div className="icon-image">
                    <div className="time-attendance">
                        <div className="iconflex">
                            <div>
                                <h4>Time & Attendance</h4>
                            </div>

                            <div className="if" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                        </div>

                        {/* Show content only when isOpen = true */}

                    </div>
                    {isOpen && (
                        <div className="content-flex">
                            <div className="text-side">
                                <p>
                                    Track hours, manage multi-rate pay and simplify time off
                                    requests <br /> all from a single platform. No more data double entry
                                    or manual approval processes—just an easy time and attendance
                                    experience for you and your employees.
                                </p>
                                <br />
                                <div>
                                    <button>Get a Demo</button>
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="image-side">
                                <img src={image1} alt="time & attendance" />
                            </div>
                        </div>
                    )}
                </div>
                <div className='d-line_'>
                </div>
                <br />
                <div className="icon-image">
                    <div className="time-attendance">
                        <div className="iconflex">
                            <div>
                                <h4>Hire & Onboarding</h4>
                            </div>

                            <div className="if" onClick={() => setIsOpens(!isOpens)}>
                                {isOpens ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                        </div>

                        {/* Show content only when isOpen = true */}

                    </div>
                    {isOpens && (
                        <div className="content-flex">
                            <div className="text-side">
                                <p>
                                    Find, hire, and onboard the best talent quickly. With the powerful EnesHR applicant tracking system and proactive onboarding tasks, you can create a compelling candidate experience and better first days for new hires.
                                </p>
                                <br />
                                <div>
                                    <button>Get a Demo</button>
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="image-side">
                                <img src={image2} alt="time & attendance" />
                            </div>
                        </div>
                    )}
                </div>
                <div className='d-line_'>
                </div>
                <br />
                <div className="icon-image">
                    <div className="time-attendance">
                        <div className="iconflex">
                            <div>
                                <h4>HR Data & Reporting</h4>
                            </div>

                            <div className="if" onClick={() => setIsShow(!isShow)}>
                                {isOpens ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                        </div>

                        {/* Show content only when isOpen = true */}

                    </div>
                    {isShow && (
                        <div className="content-flex">
                            <div className="text-side">
                                <p>

                                    Enjoy your one-stop shop for data management, with instant, pre-built reports, automated workflows, an AI-powered HR assistant, and in-depth analytics to get the answers you need, fast.
                                </p>
                                <br />
                                <div>
                                    <button>Get a Demo</button>
                                    <button>Learn More</button>
                                </div>
                            </div>

                            <div className="image-side">
                                <img src={image3} alt="time & attendance" />
                            </div>
                        </div>
                    )}
                </div>


                <div className='d-line_'>
                </div>
                <br />
                <div className="icon-image">
                    <div className="time-attendance">
                        <div className="iconflex">
                            <div>
                                <h4>Benefits</h4>
                            </div>

                            <div className="if" onClick={() => setIsShows(!isShows)}>
                                {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                        </div>

                        {/* Show content only when isOpen = true */}
                        {isShows && (
                            <div className="content">
                                <p>
                                    Track hours, manage multi-rate pay and simplify time off requests
                                    all from a single platform. No more data double entry or manual
                                    approval processes—just an easy time and attendance experience for
                                    you and your employees.
                                </p>
                                <br />
                                <div>
                                    <button>Get a Demo</button>
                                    <button>Learn More</button>
                                </div>
                                {/* <div className="time-image">
                                    <img src={image1} alt="" />
                                </div> */}
                            </div>
                        )}
                    </div>
                </div>
                <div className='d-line_'>
                </div>
                <br />
                <div className="icon-image">
                    <div className="time-attendance">
                        <div className="iconflex">
                            <div>
                                <h4>Employee Experience & Performance</h4>
                            </div>

                            <div className="if" onClick={() => setIsDisplay(!isDisplay)}>
                                {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                        </div>

                        {/* Show content only when isOpen = true */}
                        {isDisplay && (
                            <div className="content">
                                <p>
                                    Build the kind of workplace where your people know you’re invested in their happiness and development. Get the tools you need to gather feedback, strengthen employee satisfaction, and grow your people.
                                </p>
                                <br />
                                <div>
                                    <button>Get a Demo</button>
                                    <button>Learn More</button>
                                </div>

                            </div>
                        )}
                    </div>
                </div>


            </div>
            <br />
            <br />
            <br />
            <div className='home-page'>
                <div className='hr-cost'>
                    <h1>EnesHR customers save hundreds of hours and reduce HR costs by 40%</h1>
                </div>

                <br />
                <br />
                <br />

                <div className='amounts'>
                    <div className='aone'>
                        <p>Saved N10,000,000 a year in time-savings using pre-built and custom reports.</p>
                    </div>
                    <hr className='hr-'></hr>
                    <div className='vertical'></div>
                    <div className='aone'>
                        <p>Saved N10,000,000 a year in time-savings using pre-built and custom reports.</p>
                    </div>
                    <hr className='hr-'></hr>
                    <div className='vertical'></div>
                    <div className='aone'>
                        <p>Saved N10,000,000 a year in time-savings using pre-built and custom reports.</p>
                    </div>

                </div>
                <br />
                <br />
                <br />

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='integration'>
                <h2>15+ Integrations</h2>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='home-page'>
                <div className='customers'>
                    <h1>Hear From Our Customers</h1>
                </div>
                <br />
                <br />
                <br />

                <div className='customers-cards'>
                    <div className='card-one'>
                        <div className='c-text'>
                            <h4>I’d absolutely recommend EnesHR Time Tracking. It’s a great system that does exactly what you need it to do.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-two'>
                        <div className='c-text'>
                            <h4>EnesHR and I are a package deal. If you hire me, I’m making the case for EnesHR.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-three'>
                        <div className='c-text'>
                            <h4>The way EnesHR has designed the product has been very thoughtful — they’ve really, genuinely understood the needs of the employee as well as the needs of HR. It’s been great. We’re so lucky that we found EnesHR. I still thank my lucky stars that we didn’t land with anyone but them.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-four'>
                        <div className='c-text'>
                            <h4>You don’t even worry about it. EnesHR has support that’s there to make it so you succeed.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-five'>
                        <div className='c-text'>
                            <h4>EnesHR saves us from having an entire team of HR people. It saves time in training employees or supervisors and managers — half-hour increments here and there versus days compiling information.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-six'>
                        <div className='c-text'>
                            <h4>We have been using Performance Management for 3.5 years, and we have seen an average of 95.5% compliance with employees, and 95.25% compliance with managers…It is so easy to complete performance assessments with EnesHR, and you get so much data right at your fingertips.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-sv'>
                        <div className='c-text'>
                            <h4>EnesHR is easy to use, and the support is excellent. And that's what HR professionals want.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>
                    <div className='card-eight'>
                        <div className='c-text'>
                            <h4>I love EnesHR Time Tracking because it saves time for me to be able to do other things. It allows me to be more accurate on our time sheets, and since time sheets for hourly employees are done automatically, we don’t have to go back and correct anything.</h4>
                        </div>
                        <div className='flex-card'>
                            <div className='cards-image'>
                                <img src={user} alt='' />
                            </div>
                            <div className='fc'>
                                <h4>Ameh Sunday</h4>
                                <p>HR Manager at Dangote</p>
                            </div>
                        </div>

                    </div>

                </div>
                <br />
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

            <div className='home-page'>
                <div className='rush'>
                    <h1>Short on time? Get started with EnesHR today!</h1>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>


            <Footer />

        </div>
    )
}

export default Home