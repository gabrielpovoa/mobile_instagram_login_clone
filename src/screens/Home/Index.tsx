import React from 'react'
import { ButtonForgotPassword, ButtonLogin, ButtonLoginText, Container, CreateAnAccount, CreateAnAccountText, DividerLine, GowithFacebook, Heading, Input, Line, LoginWithFacebook, Logo, OtherOption, ResendPassword, SignUp, SignUpText } from './style'
import {FontAwesome5} from '@expo/vector-icons'

export const Home = () => {
    return (
        <Container>
            <Logo source={require('../../../assets/instagram.png')} />

            <Input placeholder='Number, Email or Username' />
            <Input placeholder='Password' />

            <ResendPassword>
                <ButtonForgotPassword>
                    <Heading>
                        Forgot your Password?
                    </Heading>
                </ButtonForgotPassword>
            </ResendPassword>

            <ButtonLogin>
                <ButtonLoginText>Login in</ButtonLoginText>
            </ButtonLogin>

            <LoginWithFacebook>
                <FontAwesome5 name="facebook" size={25} color="#399fff"/>
                <GowithFacebook>
                    Go with Gabriel
                </GowithFacebook>
            </LoginWithFacebook>

            <DividerLine>
                <Line></Line>
                <OtherOption>OR</OtherOption>
                <Line></Line>
            </DividerLine>

            <SignUp>
                <SignUpText>Don't have an account?</SignUpText>
                <CreateAnAccount>
                    <CreateAnAccountText>Create an Account</CreateAnAccountText>
                </CreateAnAccount>
            </SignUp>
        </Container>
    )
}
