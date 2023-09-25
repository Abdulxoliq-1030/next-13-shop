import React from 'react';
import { Form } from 'react-bootstrap';

export interface FormInputProps {
    controlName: string;
    placeholder: string;
    hookformSettings: any;
    errorMessage: any;
    label: string;
}

const FormInput: React.FC<FormInputProps> = ({ controlName, placeholder, hookformSettings, errorMessage, label }) => {
    return (
        <div>
            <Form.Label htmlFor={controlName} className='text-muted'>{label}</Form.Label>
            <Form.Control {...hookformSettings} type="text" placeholder={placeholder} id={controlName} />
            <Form.Text id="name" className='text-danger'>{errorMessage}</Form.Text>
        </div>
    )
}

export default FormInput;