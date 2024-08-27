import React, { Component } from 'react';
import loginStyle from '../Styles/loginPageStyle';
import {
  Button, Heading, NativeBaseProvider, Text, View, VStack, HStack, Input, Center
} from 'native-base'
import customFont from '../Styles/CustomFont';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NativeBaseProvider theme={customFont}>

      </NativeBaseProvider>
    );
  }
}

export default Login;
