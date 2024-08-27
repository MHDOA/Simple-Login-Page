import React, { Component } from 'react';
import loginStyle from './loginPageStyle';
import {
  Button, Heading, NativeBaseProvider, Text, View, VStack, HStack, Input, Center


} from 'native-base'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text fontFamily={'Sahel-Black'}>سلام</Text>
          <Text fontFamily={'Vazirmatn-Regular'}>سلام</Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}

export default Login;
