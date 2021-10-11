import React from 'react';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component'

import './SignIn.style.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        this.setState({ email:'', password:'' });

        event.preventDefault()
    }

    render() {
        return (
        <div className='SignIn-container'>
            <h1> Sign In</h1>
            <span> Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}> 
                <FormInput 
                    name='email' 
                    onChange={this.handleChange} 
                    type='email' 
                    value={ this.state.email } 
                    label='Email'
                    required 
                />
                <FormInput 
                    name='password' 
                    onChange={this.handleChange} 
                    type='password' 
                    value={ this.state.password } 
                    label='Password'
                    required 
                />

                <CustomButton type='submit'>
                    Sign In
                </CustomButton>
            </form>
        </div>

        );
    }
}

export default SignIn;