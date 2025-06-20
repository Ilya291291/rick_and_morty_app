import React, { useRef, useState } from "react";
import { Flex, Input, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined } from '@ant-design/icons';

export const Input = () => {
        const [isFocused, setIsFocused] = useState(false);
        const [passwordVisible, setPasswordVisible] = useState(false);
    
    
        const onBlur = () => {
            setIsFocused(false);
        };
    
        const onFocus = () => {
            setIsFocused(true);
        };
    return (
        // <Form>

        // </Form>

            <Flex vertical justify="center" align="center">
                <Flex flex={1} vertical justify="center" align="start" style={{width: '100%'}}>
                    <Typography.Title level={5}>
                        Пароль <span style={{ color: 'red' }}>*</span>
                    </Typography.Title>
                    <Input.Password
                        // prefix={<LockOutlined/>}
                        placeholder="Введите пароль"
                        variant="borderless"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        size='large'
                        required
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            border: '1px solid #d9d9d9',
                        }}
                    />
                </Flex>
                <Flex flex={1} vertical justify="center" align="start" style={{width: '100%'}}>
                    <Typography.Title level={5}>
                        Email <span style={{ color: 'red' }}>*</span>
                    </Typography.Title>
                    <Input
                        placeholder="Введите Email"
                        onBlur={onBlur}
                        onFocus={onFocus}
                        type="email"
                        required
                        size="large"
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            border: '1px solid #d9d9d9',
                        }}
                    />
                </Flex>
            </Flex>
    )
}