/*::::::::::::::::::::::::::::::::::::::::
:  Importing CSS, Dependencies, Routes  ::
::::::::::::::::::::::::::::::::::::::::*/

import './Form.css';
import React from 'react';
import axios from 'axios';



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

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);

        axios.post('https://sheet.best/api/sheets/f831ff83-fd92-4917-85cb-2adfda26e527', this.state)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        
        const { name, email, phone_number, service_requested } = this.state;

        return(

            <div className="form-container">

                <form onSubmit={this.handleSubmit}>

                    <label>
                        Name: 
                        <input placeholder="Enter your Name" name="name" type="text" value={name} onChange={this.handleChange}/>
                    </label>

                    <label>
                        Email:
                        <input placeholder="Enter your Email" name="email" type="email" value={email} onChange={this.handleChange}/>
                    </label>

                    <label>
                        Phone Number:
                        <input placeholder="Enter your Phone Number" name="phone_number" type="tel" value={phone_number} onChange={this.handleChange}/>
                    </label>

                    <label>
                        What service are you requesting?:
                        <input placeholder="What service would you like to request?" name="service_requested" type="text" value={service_requested} onChange={this.handleChange}/>
                    </label>

                    <input className="form-button_submit" type="submit" value="Submit" />

                </form>

            </div>

        );

    }

}



/*::::::::::::::::::::::::::::::::::::::::
::  Exporting Activity Page Component  :::
::::::::::::::::::::::::::::::::::::::::*/

export default Form;