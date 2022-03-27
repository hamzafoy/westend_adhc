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