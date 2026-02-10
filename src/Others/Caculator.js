import React from 'react'
import Navigation from '../Navigation/Navigation'
import img from '../Images/calculator.webp'
import Footer from '../Footer/Footer'
import img1 from '../Images/admin.webp'
import user from '../Images/user2.jpg'
import cartoon from '../Images/cartoon.webp'
import roi from '../Images/roicalc.webp'

function Caculator() {
    return (
        <div>
            <Navigation />

            <div>
                <div className='caculator-page'>
                    <div className='wf'>
                        <img src={img} alt="roi-caculator" />
                    </div>

                    <div className='sav-money'>
                        <h1>How to Save Time and Money With an HRIS</h1>

                    </div><br /><br /><br />

                    <div className='caculator-tab'>
                        <div className='caltabcon'>
                            <h4>Table of Contents</h4>
                            <div>

                            </div>
                        </div>



                    </div>
                    <br />
                    <br />

                    <div className='cal-hris' style={{ textAlign: 'center' }}>
                        <h1>Yes, an HRIS is Really Worth the Cost!</h1><br />
                        <p>An HRIS alleviates administrative tasks that bog down your workload, so you can spend more time<br /> on the things that directly impact your bottom line. But did you know it helps you save in other ways,<br /> too? Use our ROI calculator to see just how much your organization could save each year with HR software.</p>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <div className='roi-caculator'>
                        <h1>ROI Calculator for HR Software</h1><br />
                        <div className='roi-table'>
                            <div className='cac-flex'>
                                <div className='input-holder'>
                                    <div className='holddr-one'>
                                        <p>Total Employees</p>
                                        <div className='cac-input'>
                                            <input className='ion' style={{ padding: '10px' }} type='number' placeholder='0'></input>
                                        </div>

                                    </div>
                                    <div className='holddr-one'>
                                        <p>New Employees Per Year</p>
                                        <div className='cac-input'>
                                            <input className='ion' style={{ padding: '10px' }} type='number' placeholder='0'></input>
                                        </div>

                                    </div>
                                    <div className='holddr-one'>
                                        <p>HR Generalist Salary And Benefits</p>
                                        <div className='cac-input'>
                                            <input className='ion' style={{ padding: '10px' }} type='number' placeholder='0'></input>
                                        </div>

                                    </div>
                                    <div className='holddr-one'>
                                        <p>Average Employee Salary And Benefits</p>
                                        <div className='cac-input'>
                                            <input className='ion' style={{ padding: '10px' }} type='number' placeholder='0'></input>
                                        </div>

                                    </div>


                                    <div className='roi-button'>
                                        <button className='roi-btn'>Calculate</button>

                                    </div>

                                </div>

                                <div className='estimated-annual-savings'>
                                    <div className='eas'>
                                        <h3>Estimated Annual Savings:</h3>

                                        <div className='eas-one'><br />
                                            <h2>&#8358;--</h2><br />
                                            <div className='naira-border'>

                                            </div>
                                            <div className='cac-pag'>
                                                <p>Onboarding</p>
                                                <p>&#8358;--</p>
                                            </div>
                                            <div className='cac-pag'>
                                                <p>Running Payroll</p>
                                                <p>&#8358;--</p>
                                            </div>
                                            <div className='cac-pag'>
                                                <p>Reporting</p>
                                                <p>&#8358;--</p>
                                            </div>
                                            <div className='cac-pag'>
                                                <p>Hiring</p>
                                                <p>&#8358;--</p>
                                            </div>
                                            {/* <div className='cac-pag'>
                                            <p>Hours with Support</p>
                                            <p>&#8358;--</p>
                                        </div>
                                        <div className='cac-pag'>
                                            <p>Answering HR Questions</p>
                                            <p>&#8358;--</p>
                                        </div> */}

                                        </div>

                                    </div>

                                </div>


                            </div>
                            <br />



                        </div>
                        <br />


                    </div>


                </div>
                <br />
                <br />
                <br />
                <div className='calc-green'>
                    <div className='achievehr'>
                        <h1>See how enesHR&#174; can help you achieve your HR goals.</h1>


                    </div>
                    <div className='free--price'>
                        <button className='free-price'>Get my free price quote</button>
                    </div>

                </div>
                <br />
                <br />
                <br />
                <br />

                <div className='hrsoft'>
                    <h2>Discover How Much You Can Save With HR Software</h2><br />

                </div>
                <div className='hrpag'>
                    <p>A human resources information system (HRIS) is software used to store, track, and process<br /> employee information. Much more than a handy tool, an HRIS can automate everyday HR functions<br />like payroll and benefits administration. It also reduces your reliance on fragmented systems, aids in<br /> compliance, and reveals key data insights for better business decisions.<br /><br />

                        Companies lose thousands of dollars on inefficient people processes, and the impact on<br /> productivity stretches even further. ROI quantifies what your organization stands to gain by<br /> implementing HR software, specifically in these four key areas:</p>
                </div>
                <br /><br /><br />

                <div className='cal-admin-section'>
                    <div className='admin-one'>
                        <img src={img1} />
                    </div>
                    <div className='new-hires'>
                        <h2>Onboarding</h2>
                        <p>From coordinating paperwork and team introductions to setting up workstations and software permissions, a lot goes into <a href="/">Onboarding new hires.</a >All this happens before orientation even begins, but missing a step can prolong your new employees' ramp-up period and delay their time to contribution. The real kicker? <b> <i>HR professionals spend an average of 11 hours per hire</i></b> juggling basic onboarding tasks. <br /><br />Thanks to an HRIS, that average <b>drops to 5.5 hours per employee.</b> It frees up valuable time for you to create a great new-hire expereince, help them hit the ground running, and improve long-term retention.</p>
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div className='cal-admin-section'>
                    <div className='admin--one'>
                        <img src={user} />
                    </div>

                    <div className='new-hires-comment'>

                        <p>"...I would say ultimately enesHR probably saved us another hire because that was where i was going to. I was thinking I need to hire another person to just track all the paperwork that's going along with this. So when we brought on enesHR it was like bringing on a new hire."</p>
                    </div>


                </div>
                <br />
                <br />
                <div className='cal-admin-section'>

                    <div className='new-hires'>
                        <h2>Recordkeeping</h2>
                        <p>From coordinating paperwork and team introductions to setting up workstations and software permissions, a lot goes into <a href="/">Onboarding new hires.</a >All this happens before orientation even begins, but missing a step can prolong your new employees' ramp-up period and delay their time to contribution. The real kicker? <b> <i>HR professionals spend an average of 11 hours per hire</i></b> juggling basic onboarding tasks. <br /><br />Thanks to an HRIS, that average <b>drops to 5.5 hours per employee.</b> It frees up valuable time for you to create a great new-hire expereince, help them hit the ground running, and improve long-term retention.</p>
                    </div>

                    <div className='admin-one'>
                        <img src={img1} />
                    </div>
                </div>
                <div className='cal-admin-section'>
                    <div className='admin-one'>
                        <img src={img1} />
                    </div>

                    <div className='new-hires'>
                        <h2>Administrative</h2>
                        <p>From coordinating paperwork and team introductions to setting up workstations and software permissions, a lot goes into <a href="/">Onboarding new hires.</a >All this happens before orientation even begins, but missing a step can prolong your new employees' ramp-up period and delay their time to contribution. The real kicker? <b> <i>HR professionals spend an average of 11 hours per hire</i></b> juggling basic onboarding tasks. <br /><br />Thanks to an HRIS, that average <b>drops to 5.5 hours per employee.</b> It frees up valuable time for you to create a great new-hire expereince, help them hit the ground running, and improve long-term retention.</p>
                    </div>


                </div>
                <div className='cal-admin-section'>
                    <div className='admin--one'>
                        <img src={user} />
                    </div>

                    <div className='new-hires-comment'>

                        <p>"...I would say ultimately enesHR probably saved us another hire because that was where i was going to. I was thinking I need to hire another person to just track all the paperwork that's going along with this. So when we brought on enesHR it was like bringing on a new hire."</p>
                    </div>


                </div>
                <br />
                <br />
                <div className='cal-admin-section'>

                    <div className='new-hires'>
                        <h2>PTO Tracking</h2>
                        <p>From coordinating paperwork and team introductions to setting up workstations and software permissions, a lot goes into <a href="/">Onboarding new hires.</a >All this happens before orientation even begins, but missing a step can prolong your new employees' ramp-up period and delay their time to contribution. The real kicker? <b> <i>HR professionals spend an average of 11 hours per hire</i></b> juggling basic onboarding tasks. <br /><br />Thanks to an HRIS, that average <b>drops to 5.5 hours per employee.</b> It frees up valuable time for you to create a great new-hire expereince, help them hit the ground running, and improve long-term retention.</p>
                    </div>
                    <div className='admin-one'>
                        <img src={img1} />
                    </div>


                </div>
                <br />
                <br />
                <div className='cal-admin-section'>
                    <div className='admin--one'>
                        <img src={user} />
                    </div>

                    <div className='new-hires-comment'>

                        <p>"...I would say ultimately enesHR probably saved us another hire because that was where i was going to. I was thinking I need to hire another person to just track all the paperwork that's going along with this. So when we brought on enesHR it was like bringing on a new hire."</p>
                    </div>


                </div>
                <br />
                <br />
                <br />
                <br />

                <div className='golden'>
                    <h2>The Gold Standard for HR Software ROI</h2>
                    <br />
                    <br />

                </div>
                <div className='depend-org'>
                    <div className='den-org'>
                        <p>Depending on the organization, a good ROI for software could range anywhere from 5% to 20%. But don't be deterred by a low initial return rate—it'll likely be different a year from now because upfront costs are typically higher.

                            After all, consider the time it takes to educate your team about upcoming changes, implement the software, and train people on how to use it. You may also have to troubleshoot minor issues as your organization gets acclimated. But once you're up and running, your ROI should grow into a more reliable benchmark.</p>
                    </div>

                    <div className='cartoon'>
                        <img src={cartoon} />
                    </div>
                </div>
                <br />
                <br />
                <div className='golden'>
                    <h2>The Average Cost of HR Software</h2>
                    <br />


                </div>
                <div className='average-org'>
                    <p>Monthly HR software costs range from <b>$35 to $99 for the system, plus $5 to $8 per employee.</b> HRIS pricing typically depends on the number of administrators, capabilities, and other factors, so it's important to do your homework.<br /><br />

                        BambooHR customers pay on a per-employee, per-month basis. As your employee count rises, we automatically apply volume discounts. This means you receive a great price for our HR software now and as you grow, and all without the hassle of chasing down discounts.<br /><br />

                        Designed for businesses of all sizes, BambooHR helps you find and onboard the best talent, manage payroll, time, and benefits, and enhance the employee experience. Our all-in-one HR software keeps everything in one place and connects to over 100 integrations, so you never miss a beat.</p>
                </div>
                <br />
                <br />
                <div className='free--price'>
                    <button className='free-price'>Get my free price quote</button>
                </div>
                <br />
                <br />
                <br />
                <br />

                <div className='calc-green'>
                    <div className='hr-easier'>
                        <h2>Make Your HR Easier for All Your Employees</h2>
                        <p>With enesHR, executives get insights to make better workforce decisions, HR gets resources to build supportive workplaces, and employees get the power to shape their success.

                        </p>
                    </div>
                    <div className='free--price'>
                        <button className='free-price'>Get My Free Demo Today</button>
                    </div>

                </div>
                <br />
                <br />
                <br />
                <br />
                <div className='how2-calculate-roi'>
                    <h2>How to Calculate ROI</h2>
                    <p>Estimating ROI can help you see how much of an investment an HRIS would be for your company. For instance, here's a simple formula you can use:</p>
                    <br />
                    <br />
                    <br />
                    <div className='roi-image'>
                        <img src={roi} />
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <p>Keep in mind that HR software comes with tangible and intangible rewards. As you're linking dollar amounts and time saved to justify the added expense to key decision-makers, consider other<br/> benefits like:</p><br/>
                        <ul className='custom-list'>
                            <li>How more opportunity to design and execute company programs boosts employee retention, engagement, and job satisfaction</li>
                            <li>How minimizing human error and risk protects your employer brand</li>
                            <li>How better communication builds a foundation of trust for employee advocacy</li>
                            <li>How greater autonomy helps employees feel more invested in their roles</li>
                        </ul>
                        Explaining the broader potential of an HRIS helps your stakeholders see its inherent value, while also solidifying the employee buy-in needed to support its success.
                    </div>

                </div>
                <br/>
                <br/>
                <br/>
                <div className='calc-green'>
                    <div className='hr-easier'>
                        <h2>See enesHR in Action</h2>
                        <p>Go beyond the averages and calculate the impact enesHR can have on your organization—both on the balance sheet and in the employee experience.

                        </p>
                    </div>
                    {/* <div className='free--price'>
                        <button className='free-price'>Try it Free</button>
                    </div> */}

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


            </div>
            <Footer />

        </div>
    )
}

export default Caculator