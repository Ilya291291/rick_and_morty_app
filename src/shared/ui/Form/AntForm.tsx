import React, { useRef, useEffect, useState } from "react";
import { Form, Flex, Typography, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../../app/providers/context/AuthProvider'

export const AntForm = () => {

      const [form] = Form.useForm();

      const auth = useAuth()
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from || '/';
      

    const handleSubmit = (values) => {
      const {email, password} = values
      if(email && password){
        auth?.login(email, password, () => {
          navigate(from);
          console.log(auth?.email, auth?.password)
        });
      }
    };

    // const [isFocused, setIsFocused] = useState(false);
    // const [passwordVisible, setPasswordVisible] = useState(false);
        
    return (
        <Form 
          onFinish={handleSubmit}
          // onFinishFailed={onFinishFailed} 
          form={form} 
          labelCol={{ span: 20 }} 
          wrapperCol={{ span: 40 }}
  
        >
            <Form.Item 
              name='password' 
              // noStyle
              rules={
                [
                  { required: true, message: 'Это поле является обязательным' }, 
                  { min: 6, message: 'Пароль должен содержать не менее 6 символов' },
                  { whitespace : true, message: 'Пароль не может быть пустым' },
                ]
              }
              hasFeedback
            >
                <Flex vertical justify="center" align="start">
                    <Typography.Title level={5}>
                        Пароль <span style={{ color: 'red' }}>*</span>
                    </Typography.Title>
                    <Input.Password
                        placeholder="Введите пароль"
                        name="password"
                        variant='filled'
                        autoFocus={true}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        size='large'
                        required
                        style={{
                            backgroundColor: 'transparent',
                            border: '2px solid #d9d9d9',
                        }}
                    />
                </Flex>
            </Form.Item>
            <Form.Item 
              name='email'
              hasFeedback 
              rules={[
                {
                  required: true, 
                  message: 'Это поле является обязательным', 
                  type : 'email',
                  pattern: /\S+@\S+\.\S+/,
                },
              ]}
            >
                <Flex vertical justify="center" align="start">
                  <Typography.Title level={5}>
                    Email <span style={{ color: 'red' }}>*</span>
                  </Typography.Title>
                  <Input
                    placeholder="Введите Email"
                    name="email"
                    variant='filled'
                    autoFocus={true}
                    type="email"
                    required
                    size="large"
                    style={{
                        backgroundColor: 'transparent',
                        border:'2px solid #d9d9d9',
                    }}
                    onFocus={(e) => e.target.style.backgroundColor = 'transparent'}
                    onBlur={(e) => e.target.style.backgroundColor = 'transparent'}
                  />
                </Flex>
            </Form.Item>
            <Form.Item>
                <Button 
                  type='text' 
                  htmlType="submit" 
                  style={{width: '100%', border: '2px solid #d9d9d9'}}
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}