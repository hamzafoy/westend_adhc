/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Activities.css';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::  Creating Activity Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

class Activities extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <>
                <div className="landing-page-container">
                    <h1>
                        Website Wireframe in Progress
                    </h1>

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
::  Exporting Activity Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Activities;