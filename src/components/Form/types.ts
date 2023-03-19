import { HTMLAttributes } from 'react';

export interface IFormProps extends HTMLAttributes<HTMLFormElement> {
    type: 'signin' | 'signup';
}

export interface IFormValues {
    username: string;
    password: string;
}
