import React, { Component, useState } from 'react';
import { Box, Input, FormControl, Button, Icon } from 'native-base';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
export default LoginCardView = props => {

    const Usernames = ['محمد', 'علی']

    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')

    const [isShowPassword, SetIsShowPassword] = useState(false)
    const [isUsernameCorrectFormat, SetIsUsernameCorrectFormat] = useState(true)
    const [isPasswordCorrectFormat, SetIsPasswordCorrectFormat] = useState(true)
    const [isUsernameExist, SetIsUsernameExist] = useState(true)
    const [isCorrectPassword, SetIsCorrectPassword] = useState(true)


    const IsInvalid = (type) => {
        switch (type) {
            case 'username': {
                // return(!isUsernameCorrectFormat || !isUsernameExist)
                return (!isUsernameCorrectFormat)
            }

            case 'password': {
                return (!isPasswordCorrectFormat || !isCorrectPassword)
            }
            default: {
                return false
            }
        }
    }

    const LoginButtonClick = () => {
        SetIsUsernameCorrectFormat((username.length < 3 || username.length > 24 ? false : true))
        SetIsPasswordCorrectFormat((password.length < 8 || password.length > 32 ? false : true))
        SetIsUsernameExist((Usernames.find(x => x == username) ? true : false))
    }

    return (
        <Box borderRadius="md" borderColor='coolGray.200' shadow="2" borderWidth="1" w='90%' h='60%' alignItems='center'>

            <Box alignItems='center' w='90%'>

                <FormControl isInvalid={IsInvalid('username')} mt='5'>
                    <FormControl.Label justifyContent='flex-end'>نام کاربری</FormControl.Label>

                    <Input variant='underlined' textAlign='right' placeholder='نام کاربری' isRequired={true} onChangeText={SetUsername} value={username}
                        InputRightElement={<IconFill name='idcard' size={18} color='#BEBFC5' style={{ marginRight: 5 }} />} />

                    <FormControl.ErrorMessage alignItems='flex-end' rightIcon={<IconOutline name='info-circle' color='#f00' size={10} />}>
                        {isUsernameCorrectFormat ? null : 'نام کاربری باید از 3 تا 24 کاراکتر باشد'}
                        {/* {isUsernameExist || !isUsernameCorrectFormat? null : 'نام کاربری یافت نشد'} */}
                    </FormControl.ErrorMessage>
                </FormControl>


                <FormControl isInvalid={IsInvalid('password')} mt='5'>
                    <FormControl.Label justifyContent='flex-end'>رمز ورود</FormControl.Label>

                    <Input variant='underlined' textAlign='right' placeholder='رمز ورود' isRequired={true} onChangeText={SetPassword} value={password} type={isShowPassword ? 'text' : 'password'}
                        InputLeftElement={<IconFill name={isShowPassword ? 'eye' : 'eye-invisible'} size={18} color='#242124' style={{ marginLeft: 5 }} onPress={() => SetIsShowPassword(!isShowPassword)} />}
                        InputRightElement={<IconFill name='lock' size={18} color='#BEBFC5' style={{ marginRight: 5 }} />} />

                    <FormControl.ErrorMessage alignItems='flex-end' rightIcon={<IconOutline name='info-circle' color='#f00' size={10} />}>
                        {isPasswordCorrectFormat ? null : 'رمز عبور باید از 8 تا 32 کاراکتر باشد'}
                    </FormControl.ErrorMessage>
                </FormControl>

                <Button w='75%' mt='5' onPress={LoginButtonClick}>ورود</Button>

            </Box>

        </Box>
    );
}