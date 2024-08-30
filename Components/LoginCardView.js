import React, { Component, useState } from 'react';
import { Box, Input, FormControl, Button,  Icon} from 'native-base';
import { IconFill, IconOutline,} from "@ant-design/icons-react-native";
export default LoginCardView = props => {

    return (
        <Box borderRadius="md" borderColor='coolGray.200' shadow="2" borderWidth="1" w='90%' h='50%' alignItems='center'>

            <Box alignItems='center' w='90%'>

                <FormControl mt='5'>
                    <FormControl.Label justifyContent='flex-end'>نام کاربری</FormControl.Label>
                    <Input textAlign='right' placeholder='نام کاربری' isRequired={true}
                    InputRightElement={<IconFill name='idcard' size={18} color='#BEBFC5' style={{marginRight:5}}/>}></Input>
                </FormControl>

                <FormControl mt='5'>
                    <FormControl.Label justifyContent='flex-end'>رمز ورود</FormControl.Label>
                    <Input textAlign='right' placeholder='رمز ورود' isRequired={true} type='password'
                    InputLeftElement={<IconFill name='eye-invisible' size={18} color='#242124' style={{marginLeft:5}}/>}
                    InputRightElement={<IconFill name='lock' size={18} color='#BEBFC5' style={{marginRight:5}}/>}></Input>
                </FormControl>

                <Button w='75%' mt='3' fontFamily='body' fontWeight='600'>ورود</Button>

            </Box>

        </Box>
    );
}