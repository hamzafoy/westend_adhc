/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './LandingPage.css';
import React from 'react';
import { Link } from 'react-router-dom';
import weadhclogo from "../../assets/westendadhc-logo.png";



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Landing Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <div className="landing-page-container">

                    <nav className="navigation">

                        <section className="navigation-bar">

                            <h1>
                                Call us: <a className="navigation_comms" href="tel:+15026537220" target="_blank"rel="noreferrer">(502) 653-7220</a>
                            </h1>

                            <h1>
                                Email us: <a className="navigation_comms" href="mailto:referrals@westendadhc.com" target="_blank" rel="noreferrer">referrals@westendadhc.com</a>
                            </h1>

                            <h1>
                                <Link className="navigation_options" to="/">
                                    Home
                                </Link>
                            </h1>

                            <h1>
                                <Link className="navigation_options" to="/services">
                                    Services
                                </Link>
                            </h1>

                            <h1>
                                <Link className="navigation_options" to="/activities">
                                    Activities
                                </Link>    
                            </h1>

                            <h1>
                                <Link className="navigation_options" to="/careers">
                                    Careers
                                </Link>
                            </h1>

                            <h1>
                                <Link className="navigation_options" to="/resources">
                                    Resources
                                </Link>
                            </h1>

                        </section>

                        <section className="navigation_byline">
                        Care In Your Community
                        </section>
                    
                    </nav>

                    <img
                    className="navigation_logo"
                    alt="Logo"
                    src={weadhclogo}
                    />

                    <aside className="landing-page_intro">
                        
                        <h1>
                            Our Purpose&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </h1>

                        <p>
                            Our purpose at West End Adult Day Healthcare is to dedicate ourselves 
                            to serving seniors &amp; individuals with disabilites in the West End area 
                            of Jefferson County which is often overlooked &amp; underserved. We believe 
                            that providing care is more than just a duty - its a way of life. We strive 
                            to provide compassionate &amp; genuine service to each and every one of our 
                            clients.
                        </p>

                    </aside>

                    <main className="landing-page_mission">

                        <h1>
                            Our Mission
                        </h1>

                        <p>
                            We work to be your go-to choice for flexible &amp; customizable adult daycare 
                            services. Our mission is to promote your integrity &amp; independence through 
                            our programs. We envision our Adult Daycare Center to model compassionate, 
                            genuine, &amp; excellent care provision.
                        </p>

                        <p>
                            We are passionate about assisting adults at their homes as long as possible by 
                            offering companionship &amp; healthcare monitoring, thus preventing or delaying 
                            institutionalization.
                        </p>

                    </main>

                    <footer className="standard-footer">

                        <section className="footer_content">
                            Test Filler
                        </section>

                        <section className="footer_info">
                            
                            <iframe
                                className="footer-info_map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8869.0861942067!2d-85.63348260030689!3d38.193746753372054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8df2f350dfb12d9!2sGuiding%20Light%20Islamic%20Center!5e0!3m2!1sen!2sus!4v1648578467478!5m2!1sen!2sus"
                                width="350"
                                height="200"
                                
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="West End ADHC Location"
                            />

                            <h1>
                               6500 Six Mile Ln, Louisville KY 40218 
                            </h1>

                            <h1>
                                <a className="navigation_comms" href="tel:+15026537220" target="_blank"rel="noreferrer">(502) 653-7220</a>
                            </h1>

                            <h1>
                                <a className="navigation_comms" href="mailto:referrals@westendadhc.com" target="_blank" rel="noreferrer">referrals@westendadhc.com</a>
                            </h1>
                            
                            <h1>
                                Open Monday through Saturday, 8:00AM to 6:00PM
                            </h1>

                        </section>

                    </footer>

                </div>
            </>
        )
    }
}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default LandingPage;