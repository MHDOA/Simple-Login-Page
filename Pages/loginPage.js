import React, { Component } from 'react';
import loginStyle from '../Styles/loginPageStyle';
import {
  Button, NativeBaseProvider, Text, View, VStack, HStack, Input, Center, Box, Footer, FooterTab, Icon,
  AddIcon,
  HamburgerIcon,
  StatusBar, TextInput,
  FormControl} from 'native-base'
import customFont from '../Styles/CustomFont';
import LoginCardView from '../Components/LoginCardView';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NativeBaseProvider theme={customFont}>
        <View style={loginStyle.HeaderStyle}>
        </View>

        <View style={loginStyle.BodyStyle}>
          <LoginCardView></LoginCardView>
        </View>

        <View style={loginStyle.FooterStyle}>

        </View>
      </NativeBaseProvider>
    );
  }
}

export default Login;
