/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Careers.css';
import React from 'react';
import { Link } from 'react-router-dom';
import weadhclogo from "../../assets/westendadhc-logo.png";


/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Careers Page Component  ::::
::::::::::::::::::::::::::::::::::::::::*/

class Careers extends React.Component {

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

                    <main className="careers-content">

                        <h1 className="careers-content_headline">
                            Careers at West End ADHC
                        </h1>

                        <p className="careers-content_info">
                        We offer competitive wages, flexible schedules, eligibility for employee 
                        benefits and treats you with the utmost respect. We're hiring passionate 
                        and reliable caregivers who have the desire and skills to assist and support 
                        disabled individuals and seniors with the care they deserve. You may find 
                        current job openings below.
                        </p>

                        <div className="careers-content_cards">

                            <article className="careers-content__card">

                                <h1>
                                    Caregiver
                                </h1>

                                <svg width="54" height="54" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <p>
                                    An at-home personal care attendant that assists in meeting the health, safety, &amp; well-being needs of the participant.
                                </p>

                                <a className="careers__link" href="https://westendadhc.caresmartz360.com/prospectivecaregiver/caregiverapplicantform.aspx" rel="noreferrer" target="_blank">Apply Here</a>

                            </article>

                            <article className="careers-content__card">

                                <h1>
                                    Care Coordinator
                                </h1>

                                <svg width="54" height="54" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <p>
                                    This is a liaison position between participants, caregivers, &amp; West End residents. They ensure smooth transition 
                                    into the program &amp; coordinate the needs of the participants &amp; caregivers.
                                </p>

                            </article>

                            <article className="careers-content__card">

                                <h1>
                                    Caregiver
                                </h1>

                                <svg width="54" height="54" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <p>
                                    An at-home personal care attendant that assists in meeting the health, safety, &amp; well-being needs of the participant.
                                </p>

                                <a className="careers__link" href="https://westendadhc.caresmartz360.com/prospectivecaregiver/caregiverapplicantform.aspx" rel="noreferrer" target="_blank">Apply Here</a>

                            </article>

                            <article className="careers-content__card">

                                <h1>
                                    Care Coordinator
                                </h1>

                                <svg width="54" height="54" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M4.271 18.3457C4.271 18.3457 6.50002 15.5 12 15.5C17.5 15.5 19.7291 18.3457 19.7291 18.3457" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                                <p>
                                    This is a liaison position between participants, caregivers, &amp; West End residents. They ensure smooth transition 
                                    into the program &amp; coordinate the needs of the participants &amp; caregivers.
                                </p>

                            </article>

                        </div>

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
:::  Exporting Careers Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Careers;