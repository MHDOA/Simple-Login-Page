import React, { Component, useState } from 'react';
import { Box, Input, FormControl, Button, Icon } from 'native-base';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { Alert } from 'react-native';
export default LoginCardView = props => {

    const VALIDATE_USERNAME = ['علی', 'محمد']

    const MIN_USERNAME_LENGTH = 3
    const MAX_USERNAME_LENGTH = 24
    const MIN_PASSWORD_LENGTH = 8
    const MAX_PASSWORD_LENGTH = 32

    const [username, SetUsername] = useState('')
    const [password, SetPassword] = useState('')
    const [showPassword, SetShowPassword] = useState(false)
    const [usernameError, SetUsernameError] = useState(null)
    const [passwordError, SetPasswordError] = useState(null)

    const UsernameValidation = () => {
        if (username.length < MIN_USERNAME_LENGTH || username.length > MAX_USERNAME_LENGTH) {
            return 'طول نام کاربری باید بین ۳ تا ۲۴ کاراکتر باشد'
        }
        // else if (!VALIDATE_USERNAME.includes(username)) {
        //     return 'نام کاربری موجود نمیباشد'
        // }
        return null
    }

    const PasswordValidation = () => {
        if (password.length < MIN_PASSWORD_LENGTH || password.length > MAX_PASSWORD_LENGTH) {
            return 'طول رمز عبور باید بین ۸ تا ۳۲ کاراکتر باشد'
        }
        return null
    }

    const HandleLogin = () => {
        const usernameValidationError = UsernameValidation()
        const passwordValidationError = PasswordValidation()

        SetUsernameError(usernameValidationError)
        SetPasswordError(passwordValidationError)

        if (!usernameValidationError && !passwordValidationError) {
            // Successfull login       
        }
    }

    return (
        <Box borderRadius="md" borderColor='coolGray.200' shadow="2" borderWidth="1" w='90%' h='60%' alignItems='center'>

            <Box alignItems='center' w='90%'>

                <FormControl isInvalid={!!usernameError} mt='5'>
                    <FormControl.Label justifyContent='flex-end'>نام کاربری</FormControl.Label>

                    <Input
                        variant='underlined'
                        textAlign='right'
                        placeholder='نام کاربری'
                        isRequired={true}
                        onChangeText={SetUsername}
                        value={username}
                        InputRightElement=
                        {<IconFill
                            name='idcard'
                            size={18}
                            color='#BEBFC5'
                            style={{ marginRight: 5 }}
                        />}
                    />

                    <FormControl.ErrorMessage
                        alignItems='flex-end'
                        rightIcon=
                        {<IconOutline
                            name='info-circle'
                            color='#f00' size={10}
                        />}
                    >
                        {usernameError}
                    </FormControl.ErrorMessage>

                </FormControl>


                <FormControl isInvalid={!!passwordError} mt='5'>
                    <FormControl.Label justifyContent='flex-end'>رمز ورود</FormControl.Label>

                    <Input
                        variant='underlined'
                        textAlign='right'
                        placeholder='رمز ورود'
                        isRequired={true}
                        onChangeText={SetPassword}
                        value={password}
                        type={showPassword ? 'text' : 'password'}

                        InputLeftElement=
                        {<IconFill
                            name={showPassword ? 'eye' : 'eye-invisible'}
                            size={18} color='#242124' style={{ marginLeft: 5 }}
                            onPress={() => SetShowPassword(!showPassword)}
                        />}

                        InputRightElement=
                        {<IconFill
                            name='lock'
                            size={18}
                            color='#BEBFC5'
                            style={{ marginRight: 5 }}
                        />}
                    />

                    <FormControl.ErrorMessage
                        alignItems='flex-end'
                        rightIcon=
                        {<IconOutline
                            name='info-circle'
                            color='#f00'
                            size={10}
                        />}
                    >
                        {passwordError}
                    </FormControl.ErrorMessage>

                </FormControl>

                <Button
                    w='75%'
                    mt='5'
                    onPress={HandleLogin}>
                    ورود
                </Button>

            </Box>

        </Box>
    );
}