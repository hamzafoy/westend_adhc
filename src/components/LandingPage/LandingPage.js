/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './LandingPage.css';
import React from 'react';



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
                            Call us: (502) 653-7220
                        </h1>

                        <h1>
                            Email us: referrals@westendadhc.com
                        </h1>

                        <h1>
                            Home
                        </h1>

                        <h1>
                            Services
                        </h1>

                        <h1>
                            Activities
                        </h1>

                        <h1>
                            Careers
                        </h1>

                        <h1>
                            Resources
                        </h1>
                    
                    </nav>

                    <section className="navigation_byline">
                        Care In Your Community
                    </section>

                    <code>
                        <a href="https://balsamiq.cloud/st8pvvc/p9yvllm/rA5C0" rel="noreferrer">
                            Click Me!
                        </a>
                    </code>
                </div>
            </>
        )
    }
}



/*::::::::::::::::::::::::::::::::::::::::
:::  Exporting Landing Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default LandingPage;