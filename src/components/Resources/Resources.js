/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Resources.css';
import React from 'react';
import { Link } from 'react-router-dom';
import weadhclogo from "../../assets/westendadhc-logo.png";



/*::::::::::::::::::::::::::::::::::::::::
::  Creating Resources Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

class Resources extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            collapsed: true
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }))
    }

    render() {
        const hamburger = (
            <p className="hamburger_icon" onClick={this.handleChange}>
                &#8803;
            </p>
        );

        const navbar = (
            <section className="navigation-bar">

                            <h1>
                                Call us: <a className="navigation_comms" href="tel:+15026537220" target="_blank"rel="noreferrer">(502) 653-7220</a>
                            </h1>

                            <h1>
                                Email us: <a className="navigation_comms" href="mailto:info@westendadhc.com" target="_blank" rel="noreferrer">info@westendadhc.com</a>
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
        )

        return(
            <>
                <div className="landing-page-container">

                    <nav className="navigation">

                        {(this.state.collapsed ? null : navbar && window.innerWidth < 1000) || window.innerWidth > 1000 ? navbar : null}

                        {window.innerWidth < 1000 ? hamburger : null}

                        <section className="navigation_byline">
                        Care In Your Community
                        </section>

                        <img
                        className="navigation_logo"
                        alt="Logo"
                        src={weadhclogo}
                        />
                    
                    </nav>

                    <footer className="standard-footer">

                        <section className="footer_content">
                            
                            <p>
                                West End Adult Healthcare is a privately owned company providing customizable 
                                adult daycare for those in the West End. Headed by a RN nurse, we tailor our 
                                services to meet the needs of each individual with an intention to focus on 
                                underserved populations. We augment the basic suite of services with additional 
                                aid including case management &amp; medical transportation.
                            </p>

                        </section>

                        <section className="footer_info">

                            <h1>Location &amp; Info</h1>
                            
                            <iframe
                                className="footer-info_map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.8612629986437!2d-85.8221930848122!3d38.213117579681914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8869131056dafd91%3A0x9a57ec3ab9db98e5!2s3847%20Cane%20Run%20Rd%2C%20Louisville%2C%20KY%2040211!5e0!3m2!1sen!2sus!4v1648584440914!5m2!1sen!2sus"
                                width="375"
                                height="175"
                                allowFullScreen=""
                                aria-hidden="false"
                                tabIndex="0"
                                title="West End ADHC Location"
                            />

                            <p>
                               3847 Cane Run Rd, Louisville KY 40211 
                            </p>

                            <p>
                                <a className="navigation_comms" href="tel:+15026537220" target="_blank"rel="noreferrer">(502) 653-7220</a>
                            </p>

                            <p>
                                <a className="navigation_comms" href="mailto:info@westendadhc.com" target="_blank" rel="noreferrer">info@westendadhc.com</a>
                            </p>
                            
                            <p>
                                Open Monday - Friday 8:30AM to 5:00PM
                                <br/>
                                Saturday by Appointment, Closed Sundays
                            </p>

                        </section>

                    </footer>

                </div>
            </>
        )
    }
}



/*::::::::::::::::::::::::::::::::::::::::
::  Exporting Resources Page Component  ::
::::::::::::::::::::::::::::::::::::::::*/

export default Resources;