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
                    
                    </nav>

                    <section className="navigation_byline">
                        Care In Your Community
                    </section>

                    <img
                    className="navigation_logo"
                    alt="Logo"
                    src={weadhclogo}
                    />

                    <aside className="landing-page_intro">
                        
                        <h1>
                            Our Purpose
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

                    <section className="test">
                        
                        <code><a href="https://balsamiq.cloud/st8pvvc/p9yvllm/rA5C0" rel="noreferrer">
                            Click Me!
                        </a></code>

                    </section>
                </div>
            </>
        )
    }
}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default LandingPage;