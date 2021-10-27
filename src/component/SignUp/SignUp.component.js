import React from 'react';
import FormInput from '../FormInput/FormInput.component';
import CustomButton from '../CustomButton/CustomButton.component'


import './SignUp.style.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        const { name , value } = event.target;

        this.setState({ [name]: value })
        event.preventDefault();
    }

    handleSubmit = event => {
        const { email, password } = event.target;
    }

    render() {
        return(
            <div className="signUp_container">
                <h1>Sign Up</h1>
                <h3>Create your account right now</h3>
                <form onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name = "username"
                        onChange={ this.handleChange }
                        label="Username"
                        value = { this.state.username }
                        required
                    />

                    <FormInput 
                        name = "email"
                        onChange={ this.handleChange }
                        label="Email"
                        value = { this.state.email }
                        type = 'email'
                        required
                    />

                    <FormInput 
                        name = "password"
                        onChange={ this.handleChange }
                        label="Password"
                        value = { this.state.password }
                        type = "password"
                        required
                    />

                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;