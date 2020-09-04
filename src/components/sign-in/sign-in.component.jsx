import React from 'react';
import {SignInContainer,SignInTitleContainer,ButtonsContainer} from './sign-in.styles';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            });

        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {

        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {

        return (

            <SignInContainer>
                <SignInTitleContainer> I already have an account </SignInTitleContainer>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="Email Address"
                        required
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Your Password"
                        required
                    />

                    <ButtonsContainer>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            SignIn With Google {' '}
                        </CustomButton>
                    </ButtonsContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;