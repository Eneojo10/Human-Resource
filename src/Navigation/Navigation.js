import React, { useState } from 'react';
import image from '../Images/naija-logo.png';
import { AiTwotoneSchedule } from "react-icons/ai";
import { CiDatabase } from "react-icons/ci";
import { RxTimer } from "react-icons/rx";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { MdPersonAddAlt } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { ImStarEmpty } from "react-icons/im";
import { GoGift } from "react-icons/go";
import logo from '../Images/logo-removebg-preview.png'
import { FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className='navigation'>
                <div className='nav-details'>
                    <div className='leftnav-side'>
                        <div className='nav-leaf'>
                            <div className='le-af'>
                                <img src={logo} alt='' />
                            </div>
                            <a href='/'>
                                <div className='dropdown'>
                                    <h2>enesHR</h2>
                                </div>
                            </a>
                        </div>

                        <div className="hamburger-container">
                            <div className="hamburger" onClick={toggleMenu}>
                                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                            </div>
                            <div className='nav--leaf'>
                                <div className='le-af'>
                                    <img src={logo} alt='' />
                                </div>
                                <a href='/'>
                                    <div className='eneshrimage'>
                                        <h2>enesHR</h2>
                                    </div>
                                </a>
                            </div>

                        </div>
                        {isOpen && (
                            <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
                                <div className="sidebar-header">
                                    <FiX size={28} className="close-icon" onClick={toggleMenu} />
                                </div>
                                <a href='/' className='mb-line'>
                                    <div className='mb-iconflex'>
                                        <div>
                                            <h4>Our Platform</h4>
                                        </div>
                                        <div className='mobile-icon'>
                                            <MdKeyboardArrowRight />
                                        </div>
                                    </div>
                                </a>
                                <div className='mb-bottom'></div>
                                <a href='/' className='mb-line'>
                                    <div className='mb-iconflex'>
                                        <div>
                                            <h4>Pricing</h4>
                                        </div>
                                        
                                    </div>
                                </a>
                                <div className='mb-bottom'></div>
                                <a href='/' className='mb-line'>
                                    <div className='mb-iconflex'>
                                        <div>
                                            <h4>Solutions</h4>
                                        </div>
                                        <div className='mobile-icon'>
                                            <MdKeyboardArrowRight />
                                        </div>
                                    </div>
                                </a>
                                <div className='mb-bottom'></div>
                                <a href='/' className='mb-line'>
                                    <div className='mb-iconflex'>
                                        <div>
                                            <h4>Why EnesHR?</h4>
                                        </div>
                                        <div className='mobile-icon'>
                                            <MdKeyboardArrowRight />
                                        </div>
                                    </div>
                                </a>
                                <div className='mb-bottom'></div>
                                <a href='/' className='mb-line'>
                                    <div className='mb-iconflex'>
                                        <div>
                                            <h4>About</h4>
                                        </div>
                                        <div className='mobile-icon'>
                                            <MdKeyboardArrowRight />
                                        </div>
                                    </div>
                                </a>
                                <div className='mb-bottom'></div>
                                <a href='/' className='mb-line'>
                                    <div className='mb-iconflex'>
                                        <div className='naija-flag'>
                                            <div className='mobile-image'>
                                                <img src={image} alt='' />
                                            </div>
                                            <div>
                                                <h4>Nigeria (NG)</h4>
                                            </div>
                                        </div>
                                        <div className='mobile-icon'>
                                            <MdKeyboardArrowRight />
                                        </div>
                                    </div>
                                </a>

                                <div className='mb-bottom'></div>

                                <div className='mb-number'>
                                    <p>+2347062304776</p>
                                </div>


                            </div>

                        )}





                        {/* Our Platform dropdown */}
                        <div className='dropdown'>

                            <h4>Our Platform</h4>
                            <div className='dropdown-menu-'>
                                <div className='pd'>
                                    <div>
                                        <a href='/time-attendance'><h3>Our Platform</h3></a>
                                        <a href='/payroll'>Platform Overview</a>
                                        <a href='/benefits'>Video Tour</a>
                                        <a href='/benefits'>Integration Marketplace</a>
                                    </div>

                                    <div className='platform--border'>
                                        <div className='platform-boder'>
                                            <div className='navigationflex'>
                                                <div className='nav-mainflex'>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <CiDatabase />
                                                        </div>
                                                        <div>
                                                            <h4>HR Data & Reporting</h4>
                                                        </div>
                                                    </div>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <RxTimer />
                                                        </div>
                                                        <div>
                                                            <h4>Time & Attendance</h4>
                                                        </div>
                                                    </div>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <MdOutlineSpatialTracking />
                                                        </div>
                                                        <div>
                                                            <h4>Applicant Tracking System</h4>
                                                        </div>
                                                    </div>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <MdPersonAddAlt />
                                                        </div>
                                                        <div>
                                                            <h4>Onboarding</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='nav-mainflex'>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <CgPerformance />
                                                        </div>
                                                        <div>
                                                            <h4>Performance Management</h4>
                                                        </div>
                                                    </div>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <ImStarEmpty />
                                                        </div>
                                                        <div>
                                                            <h4>Employee Experience</h4>
                                                        </div>
                                                    </div>
                                                    <div className='nav-reporting'>
                                                        <div className='navigation-icon'>
                                                            <GoGift />
                                                        </div>
                                                        <div>
                                                            <h4>Benefits</h4>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <br />
                                            <br />

                                        </div>

                                    </div>
                                </div>
                                <br />

                                <div className='d-line___'></div>
                            </div>


                        </div>

                        {/* Pricing (no dropdown) */}
                        <a href='/pricing' className='line'>
                            <div className='dropdown'>
                                <h4>Pricing</h4>
                            </div>
                        </a>

                        {/* Solutions dropdown */}
                        <div className='dropdown'>
                            <h4>Solutions</h4>
                            <div className='dropdown-menu'>
                                <a href='/small-business'>EnesHR Services</a>

                            </div>
                        </div>

                        {/* About dropdown */}
                        <div className='dropdown'>
                            <h4>About</h4>
                            <div className='dropdown-menu'>
                                <a href='/company'>Our Story</a>
                                <a href='/team'>Partner with Us</a>
                                <a href='/careers'>Contact</a>
                                <a href='/careers'>AI Principles</a>
                                <a href='/careers'>Data Principles</a>
                            </div>
                        </div>
                    </div>

                    <div className='rightsidenav'>
                        <div className='naija'>
                            <img src={image} alt='' />
                        </div>
                        <div className='numbers'>
                            <h4>+2347062304776</h4>
                        </div>
                        <div className='button'>
                            <button className='login-btn'>Log In</button>
                        </div>
                        <div>
                            <button className='login-btnn'>Get a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
