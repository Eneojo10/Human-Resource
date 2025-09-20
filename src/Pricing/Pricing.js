import React, { useState,useRef } from 'react'
import Navigation from '../Navigation/Navigation'
import { FaRegCheckCircle } from "react-icons/fa";
import { IoCheckmarkOutline } from "react-icons/io5";
import Footer from '../Footer/Footer';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import logo from '../Images/logo-removebg-preview.png'

function Pricing() {
    const [openIndex, setOpenIndex] = useState(null);
    const formRef = useRef(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
    };



    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'How much does EnesHR cost?',
            answer: 'For companies with more than 25 employees, our HR software is priced on a per-employee, per-month basis. For companies with 25 employees or fewer, our HR software is charged at a monthly flat rate starting at $360 USD/mo. We never require an annual contract, and we automatically apply volume discounts as your employee count rises. All this means you receive a great price for our HR software with no hassle on your end. Reach out to one of our account executives for a price quote.'
        },
        {
            question: 'What payment methods do you accept?',
            answer: 'We accept wire transfers and checks from customers interested in monthly and annual prepayment.'
        },
        {
            question: 'Do you offer discounts?',
            answer: 'Yes! Volume discounts are automatically applied to all accounts based on headcount. Your discount will increase as your headcount increases—no need to request it or negotiate new pricing. We also offer an additional 5% off to registered nonprofit organizations.'
        },
        {
            question: 'How many countries is BambooHR in?',
            answer: 'Our customers (and their companies) are based in Nigeria for now.'
        }
    ]
    return (
        <div>
            <Navigation />
            <div className='home-page-price'>
                <div className='price-plan'>
                    <div className='plans'>
                        <h1>Get EnesHR Plans <br /> and Pricing</h1>
                        <br />
                        <br />
                        <br />

                        <div className='comprehensive'>
                            <div className='com-icon'>
                                <FaRegCheckCircle />
                            </div>
                            <div>
                                <p><span className='com'>Comprehensive.</span> Manage all of your HR tasks in one place.</p>
                            </div>
                        </div>
                        <div className='comprehensive'>
                            <div className='com-icon'>
                                <FaRegCheckCircle />
                            </div>
                            <div>
                                <p><span className='com'>Flexible.</span> Find the perfect fit with multiple plan options and add-ons.</p>
                            </div>
                        </div>
                        <div className='comprehensive'>
                            <div className='com-icon'>
                                <FaRegCheckCircle />
                            </div>
                            <div>
                                <p><span className='com'>One low monthly payment.</span> Cancel at any time.</p>
                            </div>
                        </div>
                    </div>
                    <div className='pricing-form'ref={formRef} >
                        <div className='get-pricing'>
                            <div className='gp'>
                                <h2>Get Pricing</h2>
                            </div>
                            <br />
                            <div className='pricing_form'>
                                <div className='p-inputs'>
                                    <div className='p_input'>
                                        <input placeholder='First Name*'></input>
                                    </div>
                                    <div className='p_input'>
                                        <input placeholder='Last Name*'></input>
                                    </div>
                                </div>
                                <div className='email'>
                                    <input placeholder='Work Email*'></input>
                                </div>
                                <div className='email'>
                                    <input placeholder='Job Title*'></input>
                                </div>
                                <div className='email'>
                                    <input placeholder='Company Name*'></input>
                                </div>

                                <div className='p-inputs'>
                                    <div className='p_input'>
                                        <input placeholder='Phone Number*'></input>
                                    </div>
                                    <div className="p_input">
                                        <select id="employeeCount" required>
                                            <option value="" disabled selected>Select...</option>
                                            <option value="1-10">1 - 10</option>
                                            <option value="11-50">11 - 50</option>
                                            <option value="51-100">51 - 100</option>
                                            <option value="101-500">101 - 500</option>
                                            <option value="500+">500+</option>
                                        </select>
                                        <label htmlFor="employeeCount">Employee Count*</label>
                                        {/* <span className="error">This field is required.</span> */}
                                    </div>

                                </div>
                                <div className="country_input">
                                    <select id="employeeCount" required>
                                        <option value="" disabled selected>Select...</option>
                                        <option value="1-10">1 - 10</option>
                                        <option value="11-50">11 - 50</option>
                                        <option value="51-100">51 - 100</option>
                                        <option value="101-500">101 - 500</option>
                                        <option value="500+">500+</option>
                                    </select>
                                    <label htmlFor="employeeCount">Country*</label>
                                    {/* <span className="error">This field is required.</span> */}
                                </div>
                                <div className='form-footer'>
                                    <p>I authorize EnesHR to keep me informed about its products,<br /> services and events through emails and phone calls. My data will be handled according to the Privacy Notice.</p>
                                </div>
                                <br />
                                <br />
                                <button className='form-submit'>Submit</button>
                            </div>
                            <br />
                            <br />
                        </div>


                    </div>

                </div>


                <div className='price-info'>
                    <h1>EnesHR plans start at just $14.40 USD/mo per employee</h1>
                    <p>Volume and non-profit discounts are available</p>

                </div>

                <div className='core'>
                    <div className='co-re'>
                        <div className='core-details'>
                            <h1>Core</h1>
                            <p>Foundational HR automation and insights to move your business forward.</p>
                            <br />
                            <br />
                            <br />

                            <h3>Plan Includes:</h3>
                            <br />

                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>HR Data & Reporting</h3>
                                </div>
                            </div>
                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>Hiring & Onboarding</h3>
                                </div>
                            </div>
                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>Time Tracking</h3>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='co-re'>
                        <div className='core-details'>
                            <h1>Pro</h1>
                            <p>People-focused solutions to elevate the employee experience</p>
                            <br />
                            <br />
                            <br />

                            <h3>Everything in Core, plus:</h3>
                            <br />

                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>Performance Management</h3>
                                </div>
                            </div>
                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>Employee Community</h3>
                                </div>
                            </div>
                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>Benefits</h3>
                                </div>
                            </div>
                            <div className='checkmark'>
                                <div className='checkicon'>
                                    <IoCheckmarkOutline />
                                </div>
                                <div>
                                    <h3>Custom Dashboard & Analytics</h3>
                                </div>
                            </div>

                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                    <div className='core-red'>
                        <h3>NEW!</h3>
                        <div className='core-inside'>
                            <div className='core-details'>
                                <h1>Elite</h1>
                                <p>Powerful insights and data benchmarks to inform smarter decisions for your business.</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                                <div className='soon'>
                                    <h1>Coming Soon !!!</h1>
                                </div>



                            </div>

                        </div>

                    </div>


                </div>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </div>

            <div className='add-ons'>
                <div className='solutions'>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1>Add-on solutions</h1>
                    <br />
                    <p>Accomplish even more with additional capabilities.</p>
                    <br />
                    <br />
                    <div>
                        <button className='nigeria'>Nigeria</button>
                    </div>
                </div>
                <br />
                <br />

                <div className='addflex'>
                    <div className='add-one'>
                        <div className='spend'>
                            <h2>Time Tracking</h2><br />
                            <p>Spend minutes tracking hours.</p>
                            <br />
                            <br />

                            <div className='m-d'>
                                <div>
                                    <p>. Mobile & Desktop Time Clock</p>
                                </div>
                                <div>
                                    <p>. Project Tracking & Billable Hours</p>
                                </div>
                                <div>
                                    <p>. View & Edit Employee Timesheets</p>
                                </div>
                            </div>

                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                    <div className='add-one'>
                        <div className='spend'>
                            <h2>Employer of Record</h2><br />
                            <p>Hire employees worldwide.</p>
                            <br />
                            <br />

                            <div className='m-d'>
                                <div>
                                    <p>. Hire employees worldwide</p>
                                </div>
                                <div>
                                    <p>. Managed Payroll and Benefits</p>
                                </div>
                                <div>
                                    <p>. View & Edit Employee Timesheets</p>
                                </div>
                            </div>

                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className='calculator'>
                    <div className='quote' onClick={scrollToForm} style={{ cursor: "pointer" }}>
                        <h3>Get a Free Price Quote</h3>
                    </div>
                    <div className='qu-ote'>
                        <h3>Explore the ROI Calculator</h3>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


            </div>
            <div className='company-count'>
                <h1>Trusted by [companyCount] companies in Nigeria</h1>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <div className='home-page'>
                <div className='real'>
                    <h1>Real stories, real impact</h1>
                    <br />
                    <p>See how businesses succeed with our HR software. Read our customer stories</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='amounts'>
                        <div className='aone'>
                            <p><span className='saved'>Saved</span> N10,000,000 a year in time-savings using pre-built and custom reports.</p>
                        </div>
                        <hr className='hr-'></hr>
                        <div className='aone'>
                            <p><span className='saved'>Saved</span> N5,000,000 a year in time-savings using pre-built and custom reports.</p>
                        </div>
                        <hr></hr>
                        <div className='aone'>
                            <p>Saved <span className='saved'>hours of manual work every week</span> with automated data pulls and custom reporting.</p>
                        </div>

                    </div>
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
                            <br />

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

            <Footer />

        </div>
    )
}

export default Pricing