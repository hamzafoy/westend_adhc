/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Services.css';
import React from 'react';
import { Link } from 'react-router-dom';
import weadhclogo from "../../assets/westendadhc-logo.png";
import Form from "../Form/Form";



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Activity Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

class Services extends React.Component {

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

                    <main className="services-content">

                        <div className="services-list">

                            <h1 className="services-list_headline">

                                Our Services

                            </h1>

                            <section className="services-list_options">

                                <article className="services-list_option">

                                    <h1>
                                        Adult Daycare
                                    </h1>

                                    <p>
                                        Clients can choose to spend time in our facilities under the care &amp; supervision of our caretakers.
                                    </p>

                                </article>

                                <article className="services-list_option">

                                    <h1>
                                        Home Attendant Care
                                    </h1>

                                    <p>
                                        Clients more comfortable in their own homes can have caregivers visit to attend to their needs at home!
                                    </p>

                                </article>

                                <article className="services-list_option">

                                    <h1>
                                        Case Management
                                    </h1>

                                    <p>
                                        Our case management services include, but is not limited to, assessments including an interview with the client &amp; 
                                        assistance in developing and implementing a medical care plan with healthcare providers, family, and our employees. 
                                        We promote cost-effective care &amp; work to respect family needs, client's sensitivities, &amp; cultural competency.
                                    </p>

                                </article>

                                <article className="services-list_option">

                                    <h1>
                                        Non-Medical Transportation
                                    </h1>

                                    <p>
                                        We provide transportation to doctor &amp; therapy appointments, hospital or outpatient facilities, prescription pick-ups 
                                        as well as grocery shopping &amp; other errands, and we provide transportation to connect you with loved ones, friends, 
                                        &amp; events. We provide disability assistance throughout trips, but do <em>NOT</em> act as an ambulance service.
                                    </p>

                                </article>

                            </section>

                        </div>

                        <section className="form-container">

                        <h1 className="form-container_headline">

                            Request Services Form

                        </h1>

                            <Form marginBottom="10vh"/>

                        </section>

                    </main>

                    <footer className="standard-footer">

                        <section className="footer_content">
                            
                            <p>
                                West End Adult Healthcare is a privately owned company providing customizable 
                                adult daycare for those in the West End. Headed by a RN nurse, we tailor our 
                                services to meet the needs of each individual with an intention to focus on 
                                underserved populations. We augment the basic suite of services with additional 
                                aid including case management &amp; non-medical transportation.
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
                                <a className="footer_comms" href="tel:+15026537220" target="_blank"rel="noreferrer">(502) 653-7220</a>
                            </p>

                            <p>
                                <a className="footer_comms" href="mailto:info@westendadhc.com" target="_blank" rel="noreferrer">info@westendadhc.com</a>
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
::  Exporting Activity Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Services;