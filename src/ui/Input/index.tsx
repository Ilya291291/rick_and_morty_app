import { ChangeEvent, memo, useEffect, useRef, useState } from 'react';
import './index.scss'

interface InputProps {
    value?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    autofocus?: boolean;
    type?: string
    placeholder?: string;
    name?: string;
    checked?: boolean;
    labelName?: string;
    error?: string | undefined;
    errorText?: string;
    isSubmitted?: boolean;
    requiredFields?: boolean | undefined;
    disabled?: boolean;
    icon?: string
}
const Input = memo((props: InputProps) => {
    const {
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        name,
        checked,
        labelName = '',
        error,
        errorText,
        isSubmitted,
        requiredFields,
        disabled = false,
        icon,
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    return (
        <div className='input_wrapper'>
        <p>
        {labelName} {requiredFields && <span className='required'>*</span>}
        </p>        
        <label htmlFor={name} className={
            `label ${type === 'radio' ? 'radio' : ''}
            ${isFocused && !error ? 'focused' : 'label'} 
            ${isSubmitted && !error && !isFocused && type !== 'radio' ? 'valid' : 'label'} 
            ${error && type !== 'radio' ? 'error' : 'label'}
            ${type === 'radio' ? 'radio' : 'label'}
            ${icon ? 'label_icon' : ''}
            `
        }>
                <input
                    name={name}
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder && placeholder}
                    checked={checked && checked}
                    disabled={disabled}
                    required={requiredFields}
                />
            </label>
            {error && <span className='errortxt'>{errorText}</span>}
        </div>
    );
});

export default Input;
