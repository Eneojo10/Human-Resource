import React, { useState } from "react";
import image from "../Images/naija-logo.png";
import { AiTwotoneSchedule } from "react-icons/ai";
import { CiDatabase } from "react-icons/ci";
import { RxTimer } from "react-icons/rx";
import { MdOutlineSpatialTracking, MdPersonAddAlt } from "react-icons/md";
import { CgPerformance } from "react-icons/cg";
import { ImStarEmpty } from "react-icons/im";
import { GoGift } from "react-icons/go";
import logo from "../Images/logo-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";
import {
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
} from "react-icons/md";
import reporting from '../Images/reporting.webp'
import benefits from '../Images/benefits.webp'
import time from '../Images/time.webp'
import onboard from '../Images/onboard.webp'
import performance from '../Images/performance.webp'
import employee from '../Images/employee.webp'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("main");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setActiveMenu("main");
    };

    return (
        <div>
            <div className="navigation">
                <div className="nav-details">
                    <div className="nav-leaf">
                        <div className="le-af">
                            <img src={logo} alt="" />
                        </div>
                        <a href="/" className="line">
                            <div className="dropdownn">
                                <h2>enes<span className="nav-hr">HR</span></h2>
                            </div>
                        </a>
                    </div>
                    <div className="leftnav-side">


                        {/* Hamburger */}
                        <div className="hamburger-container">
                            <div className="hamburger" onClick={toggleMenu}>
                                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                            </div>
                            <div className="nav--leaf">
                                <div className="le-af">
                                    <img src={logo} alt="" />
                                </div>
                                <a href="/">
                                    <div className="eneshrimage">
                                        <h2>enes<span className="nav-hr">HR</span></h2>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Mobile Sidebar */}
                        {isOpen && (
                            <div className={`mobile-sidebar ${isOpen ? "open" : ""}`}>
                                <div className="sidebar-header">
                                    <FiX size={28} className="close-icon" onClick={toggleMenu} />
                                </div>
                                <br />

                                {/* MAIN MENU */}
                                {activeMenu === "main" && (
                                    <>
                                        <div
                                            className="mb-line"
                                            onClick={() => setActiveMenu("platform")}
                                        >
                                            <div className="mb-iconflex">
                                                <h4>Our Platform</h4>
                                                <MdKeyboardArrowRight />
                                            </div>
                                        </div>

                                        <div className="mb-bottom"></div>
                                        <a href="/pricing" className="mb-line">
                                            <div className="mb-iconflex">
                                                <h4>Pricing</h4>
                                            </div>
                                        </a>

                                        <div className="mb-bottom"></div>
                                        <div
                                            className="mb-line"
                                            onClick={() => setActiveMenu("solutions")}
                                        >
                                            <div className="mb-iconflex">
                                                <h4>Solutions</h4>
                                                <MdKeyboardArrowRight />
                                            </div>
                                        </div>
                                        <div className="mb-bottom"></div>
                                        <div
                                            className="mb-line"
                                            onClick={() => setActiveMenu("why")}
                                        >
                                            <div className="mb-iconflex">
                                                <h4>Why EnesHR?</h4>
                                                <MdKeyboardArrowRight />
                                            </div>
                                        </div>

                                        <div className="mb-bottom"></div>
                                        <div
                                            className="mb-line"
                                            onClick={() => setActiveMenu("about")}
                                        >
                                            <div className="mb-iconflex">
                                                <h4>About</h4>
                                                <MdKeyboardArrowRight />
                                            </div>
                                        </div>

                                        <div className="mb-bottom"></div>
                                        <a href="/" className="mb-line">
                                            <div className="mb-iconflex">
                                                <div className="naija-flag">
                                                    <div className="mobile-image">
                                                        <img src={image} alt="" />
                                                    </div>
                                                    <h4>Nigeria (NG)</h4>
                                                </div>
                                                <MdKeyboardArrowRight />
                                            </div>
                                        </a>

                                        <div className="mb-bottom"></div>
                                        <div className="mb-number">
                                            <p>+2347062304776</p>
                                        </div>
                                    </>
                                )}

                                {/* SUBMENUS */}

                                {activeMenu === "platform" && (
                                    <div>
                                        <div
                                            className="mb-line back-btn"
                                            onClick={() => setActiveMenu("main")}
                                        >
                                            <MdKeyboardArrowLeft /> <span>Back</span>
                                        </div>
                                        <div className="submenu">
                                            <h3>Our Platform</h3>
                                            <div className="dropdown-content">
                                                <p>Platform Overview</p>
                                                <p>Video Tour</p>
                                                <p>Integrations Marketplace</p>
                                            </div>

                                            <div className="flex-onmobile">
                                                <div className="report-mobile">
                                                    <img src={reporting} alt="" />
                                                </div>
                                                <div>
                                                    <p>HR Data & Reporting</p>
                                                </div>
                                            </div>
                                            <div className="flex-onmobile">
                                                <div className="report-mobile">
                                                    <img src={benefits} alt="" />
                                                </div>
                                                <div>
                                                    <p>Benefits</p>
                                                </div>
                                            </div>
                                            <div className="flex-onmobile">
                                                <div className="report-mobile">
                                                    <img src={time} alt="" />
                                                </div>
                                                <div>
                                                    <p>Time</p>
                                                </div>
                                            </div>
                                            <div className="flex-onmobile">
                                                <div className="report-mobile">
                                                    <img src={onboard} alt="" />
                                                </div>
                                                <div>
                                                    <p>Onboarding</p>
                                                </div>
                                            </div>
                                            <div className="flex-onmobile">
                                                <div className="report-mobile">
                                                    <img src={performance} alt="" />
                                                </div>
                                                <div>
                                                    <p>Performance Management</p>
                                                </div>
                                            </div>
                                            <div className="flex-onmobile">
                                                <div className="report-mobile">
                                                    <img src={employee} alt="" />
                                                </div>
                                                <div>
                                                    <p>Employee Experience</p>
                                                </div>
                                            </div>
                                            <br />
                                            <p>See our Product Updates</p>
                                            <br />
                                            <div className="d-line_"></div>
                                            <div className="numbers">
                                                <h4>+2347062304776</h4>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeMenu === "solutions" && (
                                    <div>
                                        <div
                                            className="mb-line back-btn"
                                            onClick={() => setActiveMenu("main")}
                                        >
                                            <MdKeyboardArrowLeft /> <span>Back</span>
                                        </div>
                                        <div className="submenu">
                                            <div
                                                className="mb-line"
                                                onClick={() => setActiveMenu("solutions")}
                                            >
                                                <div className="mb-iconflex">
                                                    <h3>Industry</h3>
                                                    <div>
                                                        <MdKeyboardArrowRight />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="submenu">
                                            <div
                                                className="mb-line"
                                                onClick={() => setActiveMenu("solutions")}
                                            >
                                                <div className="mb-iconflex">
                                                    <h3>Stakeholder Solutions</h3>
                                                    <div>
                                                        <MdKeyboardArrowRight />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="submenu">
                                            <div
                                                className="mb-line"
                                                onClick={() => setActiveMenu("solutions")}
                                            >
                                                <div className="mb-iconflex">
                                                    <h3>Solutions by Company Size</h3>
                                                    <div>
                                                        <MdKeyboardArrowRight />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <h3>EnesHR Services</h3>
                                        <br />
                                        <div className="d-line_"></div>
                                        <br />
                                        <div className="numbers">
                                            <h4>+2347062304776</h4>
                                        </div>
                                    </div>
                                )}
                                {activeMenu === "why" && (
                                    <div>
                                        <div
                                            className="mb-line back-btn"
                                            onClick={() => setActiveMenu("main")}
                                        >
                                            <MdKeyboardArrowLeft /> <span>Back</span>
                                        </div>
                                        <div className="submenu">
                                            <h4>We Set You Free</h4><br />
                                            <h4>Case Studies</h4>
                                            <br />
                                            <div className="d-line_"></div>
                                            <br />
                                            <div className="numbers">
                                                <h4>+2347062304776</h4>
                                            </div>

                                        </div>
                                    </div>
                                )}

                                {activeMenu === "about" && (
                                    <div>
                                        <div
                                            className="mb-line back-btn"
                                            onClick={() => setActiveMenu("main")}
                                        >
                                            <MdKeyboardArrowLeft /> <span>Back</span>
                                        </div>
                                        <div className="submenu">
                                            <h4>Our Story</h4>
                                            <h4>Media</h4>
                                            <h4>Careers</h4>
                                            <h4>Events</h4>
                                            <h4>Partner With Us</h4>
                                            <h4>Contact</h4>
                                            <h4>AI Principles</h4>
                                            <h4>Data Principles</h4>

                                            <br />
                                            <div className="d-line_"></div>
                                            <br />
                                            <div className="numbers">
                                                <h4>+2347062304776</h4>
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

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

                    {/* Right Side */}
                    <div className="rightsidenav">
                        <div className="naija">
                            <img src={image} alt="" />
                        </div>
                        <div className="numbers">
                            <h4>+2347062304776</h4>
                        </div>
                        <div className="button">
                            <button className="login-btn">Log In</button>
                        </div>
                        <div>
                            <button className="login-btnn">Get a Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
