/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Form.css';
import React from 'react';



/*::::::::::::::::::::::::::::::::::::::::
:::::  Creating Form Page Component  :::::
::::::::::::::::::::::::::::::::::::::::*/

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone_number: '',
            service_requested: ''
        }
    }

}