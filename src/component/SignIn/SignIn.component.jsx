import React from 'react';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component'

import { signInWithGoogle } from '../../firebase/firebase.config'

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
        const {email, password} = this.state;
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

                <div className="buttonWrapper">
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>

                
                    <CustomButton onClick={ signInWithGoogle }>
                        Sign In With Google
                    </CustomButton>
                </div>
            </form>
        </div>

        );
    }
}

export default SignIn;