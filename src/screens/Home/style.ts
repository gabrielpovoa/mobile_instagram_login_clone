import { Platform } from 'react-native';
import styled from 'styled-components/native'

export const Container = styled.View`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Heading = styled.Text`
    color: ${({theme}) => theme.COLORS.INFO};
    font-weight: ${Platform.OS === 'android' ? '400' : 'bold'};;
`;

export const Logo = styled.Image`
    margin-top: ${Platform.OS === 'android' ? '13%' : '20%'};
    margin-bottom: ${Platform.OS === 'android' ? '13%' : '15%'};
    width: ${Platform.OS === 'android' ? '80%' : '85%'};
`;

export const Input = styled.TextInput`
    width: ${Platform.OS === 'android' ? '370px' : '370px'};
    height: 42px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
    margin-bottom: 20px;
    padding: 8px 10px;
    border-radius: 8px;
`;

export const ResendPassword = styled.View`
    align-items: flex-end;
    width: 90%;
`;

export const ButtonForgotPassword = styled.TouchableOpacity`
    width: 90%;
    margin-bottom: ${Platform.OS === 'android' ? '13%' : '15%'};
    align-items: flex-end;
    `;

export const ButtonLogin = styled.TouchableOpacity`
    margin-bottom: ${Platform.OS === 'android' ? '8%' : '5%'};
    width: 90%;
    background-color: ${({theme}) => theme.COLORS.INFO};
    padding: 15px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const ButtonLoginText = styled.Text`
    color: ${({theme}) => theme.COLORS.BACKGROUND};
    font-weight: bold;
    font-size: 17px;
`;

export const LoginWithFacebook = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin: 10% 0  ${Platform.OS === 'android' ? '10%' : '15%'};
`;

export const GowithFacebook = styled.Text`
    color: ${({theme}) => theme.COLORS.INFO};
    padding-left: 8px;
`;

export const DividerLine = styled.View`
    flex-direction: row;
    width: 90%;
    align-items: center;
    justify-content: center;
`;

export const Line = styled.View`
    width: 45%; height: 2;
    border-radius: 4px;
    background-color: ${({theme}) => theme.COLORS.PRIMARY_900};
`;

export const OtherOption = styled.Text`
    margin: 0 4%;
`;

export const SignUp = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top: 15%;
`;

export const SignUpText = styled.Text`
    font-size: 15px;
`;

export const CreateAnAccount = styled.TouchableOpacity`
    margin-left: 3%;
    font-size: 15px;
`;

export const CreateAnAccountText = styled.Text`
    color: ${({theme}) => theme.COLORS.INFO};
    font-weight: bold;
`;