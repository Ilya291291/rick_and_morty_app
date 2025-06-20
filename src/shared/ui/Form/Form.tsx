import React, { useRef, useEffect, useState } from "react";
import { Form, Flex, Typography, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from '../../../context/AuthProvider'

export const FormfromAnt = () => {

      const [form] = Form.useForm();

      const auth = useAuth()
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from || '/';
      
    
      // const [inputs, setInputs] = useState<{email: string, password: string}>({
      //   email: '',
      //   password: '',
      // });

    
      // const [errors, setErrors] = useState({
      //   email: '',
      //   password: '',
      // });

      // const [requiredFields, setRequiredFields] = useState({
      //   email: true,
      //   password: true,
      // })
    
    //   const validateForm = () => {
    //     const newErrors = {
    //       email: '',
    //       password: '',
    //     };
    //     let isValid = true
    
    //     if (!inputs?.email && requiredFields.email) {
    //       isValid = false
    //       newErrors.email = 'Email является обязательным полем';
    //     } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
    //       isValid = false
    //       newErrors.email = 'Email введен некорректно';
    //     }
    
    //     if (!inputs?.password && requiredFields.password) {
    //       isValid = false
    //       newErrors.password = 'Это поле является обязательным';
    //     } else if (inputs.password.length < 6) {
    //       isValid = false
    //       newErrors.password = 'Пароль должен содержать не менее 6 символов';
    //     }
    
    //     setErrors(newErrors)
    //     return isValid
    // };
    
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   if(event.target.value) {
    //     setInputs({ 
    //       ...inputs, 
    //       [event.target.name]: event.target.value
    //     });
    //   }
    // };
    
    // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    //   event.preventDefault()
    //   setIsSubmitted(true)
      
    //   const isValid = validateForm()
    
    //   if (isValid) {
    //     auth?.login(inputs.email, inputs.password, () => {
    //       navigate(from);
    //     });
    //   }
    // };

    const handleSubmit = (values) => {
      const {email, password} = values
      if(email && password){
        auth?.login(email, password, () => {
          navigate(from);
          console.log(auth?.email, auth?.password)
        });
      }
    };


    // const [isSubmitted, setIsSubmitted] = useState(false)

    const [isFocused, setIsFocused] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
        
        
    const onBlur = () => {
        setIsFocused(false);
    };
        
    const onFocus = () => {
        setIsFocused(true);
    };

    return (
        <Form onFinish={handleSubmit} form={form}>
            <Form.Item 
              name='password' 
              // noStyle
              tooltip='Пароль должен содержать не менее 6 символов'
              rules={
                [{ 
                  required: true, message: 'Это поле является обязательным' }, 
                  { min: 6, message: 'Пароль должен содержать не менее 6 символов' }
                ]
              }
              hasFeedback
              // validateStatus={errors.password ? 'error' : ''}
              // help={errors.password}
            >
                <Flex flex={1} vertical justify="center" align="start" style={{width: '100%'}}>
                    <Typography.Title level={5}>
                        Пароль <span style={{ color: 'red' }}>*</span>
                    </Typography.Title>
                    <Input.Password
                            // prefix={<LockOutlined/>}
                        placeholder="Введите пароль"
                        name="password"
                        // variant="borderless"
                        // value={inputs.password}
                        autoFocus={true}
                        // onChange={handleChange}
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        size='large'
                        required
                        style={{
                            width: '100%',
                            backgroundColor: 'transparent',
                            border: '2px solid #d9d9d9',
                        }}
                    />
                </Flex>
            </Form.Item>
            <Form.Item 
              name='email' 
              rules={[
                {
                  required: true, 
                  message: 'Это поле является обязательным', 
                  type : 'email',
                  pattern: /\S+@\S+\.\S+/,
                  validateTrigger: ['onChange', 'onBlur'],
                },
              ]}
              hasFeedback
              // validateStatus={errors.email ? 'error' : ''}
              // help={errors.email}
            >
                <Flex flex={1} vertical justify="center" align="start" style={{width: '100%'}}>
                        <Typography.Title level={5}>
                            Email <span style={{ color: 'red' }}>*</span>
                        </Typography.Title>
                        <Input
                            placeholder="Введите Email"
                            name="email"
                            onBlur={onBlur}
                            onFocus={onFocus}
                            // value={inputs.email}
                            // onChange={handleChange}
                            autoFocus={true}
                            type="email"
                            required
                            size="large"
                            style={{
                                width: '100%',
                                backgroundColor: 'transparent',
                                border: '2px solid #d9d9d9',
                            }}
                        />
                </Flex>
            </Form.Item>
            <Form.Item>
                <Button type='text' htmlType="submit" style={{width: '100%', border: '2px solid #d9d9d9'}}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}