import React, { useState } from 'react';
import Input from '../../ui/Input';
import './index.scss';
import { useAuth } from '../../context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FormAnt } from '../../shared/ui/Form/Form'

const LogIn = () => {

  const auth = useAuth()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  const [inputs, setInputs] = useState<{email: string, password: string}>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [requiredFields, setRequiredFields] = useState({
    email: true,
    password: true,
  })

  const validateForm = () => {
    const newErrors = {
      email: '',
      password: '',
    };
    let isValid = true

    if (!inputs?.email && requiredFields.email) {
      isValid = false
      newErrors.email = 'Email является обязательным полем';
    } else if (!/\S+@\S+\.\S+/.test(inputs.email)) {
      isValid = false
      newErrors.email = 'Email введен некорректно';
    }

    if (!inputs?.password && requiredFields.password) {
      isValid = false
      newErrors.password = 'Это поле является обязательным';
    } else if (inputs.password.length < 6) {
      isValid = false
      newErrors.password = 'Пароль должен содержать не менее 6 символов';
    }

    setErrors(newErrors)
    return isValid
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if(event.target.value) {
    setInputs({ 
      ...inputs, 
      [event.target.name]: event.target.value
    });
  }
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  setIsSubmitted(true)
  
  const isValid = validateForm()

  if (isValid) {
    auth?.login(inputs.email, inputs.password, () => {
      navigate(from);
    });
  }
};


  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <form onSubmit={handleSubmit} className='form_submit'>
        <Input 
            type='email'
            name="email"
            labelName='Email'
            value={inputs.email}
            onChange={handleChange}
            placeholder="Введите Email"
            error={errors.email}
            errorText={errors.email}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.email}
        />
        <Input 
            type='password'
            name='password'
            labelName='Пароль'
            value={inputs.password}
            onChange={handleChange}
            placeholder='Введите пароль'
            error={errors.password}
            errorText={errors.password}
            isSubmitted={isSubmitted}
            requiredFields={requiredFields.password}
        />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LogIn;