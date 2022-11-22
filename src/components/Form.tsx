import {
    Formik as FormikWrapper,
    Field,
    Form as FormikForm,
    ErrorMessage,
} from 'formik';
import { FunctionComponent, HTMLAttributes, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { SignInSchema } from '../validations';
import {
    Eye as EyeOpenIcon,
    EyeClosed as EyeClosedIcon,
    ArrowCircleRight as ArrowCircleRightIcon,
    CircleNotch as LoadingIcon,
} from 'phosphor-react';
import api from '../services/api';
import { classNames } from '../utils';
import WantToSignInOrSignUp from './WantToSignInOrSignUp';

interface FormProps extends HTMLAttributes<HTMLFormElement> {
    type: 'signin' | 'signup';
}

export interface IFormValues {
    username: string;
    password: string;
}

const Form: FunctionComponent<FormProps> = ({ type: formType, ...props }) => {
    const { signIn } = useAuth();
    const [error, setError] = useState<null | any>(null);
    const [inputPasswordType, setInputPasswordType] = useState('password');

    const handleSubmit = async (data: IFormValues) => {
        if (formType === 'signin') {
            await signIn(data).catch((err: any) => setError(err.response?.data));
        } else if (formType === 'signup') {
            await api
                .post('/user', data)
                .then(() => signIn(data))
                .catch((err: any) => setError(err.response?.data));
        } else {
            throw new Error(
                'Valor da propriedade TYPE do Form não foi passada, ou está incorreta.'
            );
        }
    };

    const togglePasswordVisibility = () =>
        inputPasswordType === 'password'
            ? setInputPasswordType('text')
            : setInputPasswordType('password');

    return (
        <FormikWrapper
            initialValues={{ username: '', password: '' }}
            validationSchema={SignInSchema}
            onSubmit={async (values, { setSubmitting }) => {
                setSubmitting(true);
                await handleSubmit(values);
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <FormikForm
                    {...props}
                    className={classNames(
                        props.className ? props.className : ''
                    )}
                >
                    <div className="relative">
                        <div className="relative">
                            <Field
                                id="username"
                                type="text"
                                name="username"
                                required
                                className="relative border-b border-b-slate-400/80 w-full block outline-none
                                px-2 py-1 bg-transparent [&~span]:focus:w-full [&~label]:transform
                                [&~label]:focus:left-0 [&~label]:focus:-translate-y-6 [&~label]:focus:text-[80%]
                                [&~label]:focus:text-purple-600 [&~label]:transition-all [&~label]:duration-300
                                [&~label]:valid:transform
                                [&~label]:valid:left-0 [&~label]:valid:-translate-y-6 [&~label]:valid:text-[80%]
                                [&~span]:invalid:bg-red-600"
                            />

                            <label
                                htmlFor="username"
                                className="block text-slate-400/80 absolute left-2 bottom-1.5 tracking-wide
                                semibold cursor-pointer"
                            >
                                Nome de usuário
                            </label>

                            <span
                                className="absolute left-0 bottom-0 block h-[2px] w-0 bg-purple-600 transition-all
                                duration-300"
                            />
                        </div>

                        <ErrorMessage
                            name="username"
                            component="small"
                            className="text-red-500 font-semibold"
                        />
                    </div>

                    <div
                        className={classNames(
                            error ? '' : 'mb-8',
                            'relative mt-6'
                        )}
                    >
                        <div className="relative">
                            <Field
                                id="password"
                                type={inputPasswordType}
                                name="password"
                                required
                                className="relative border-b border-b-slate-400/80 w-full block outline-none
                                px-2 py-1 bg-transparent [&~span]:focus:w-full [&~label]:transform
                                [&~label]:focus:left-0 [&~label]:focus:-translate-y-6 [&~label]:focus:text-[80%]
                                [&~label]:focus:text-purple-600 [&~label]:transition-all [&~label]:duration-300
                                [&~label]:valid:transform
                                [&~label]:valid:left-0 [&~label]:valid:-translate-y-6 [&~label]:valid:text-[80%]
                                [&~span]:invalid:bg-red-600"
                            />

                            <label
                                htmlFor="password"
                                className="block text-slate-400/80 absolute left-2 bottom-1.5 tracking-wide
                                semibold cursor-pointer"
                            >
                                Sua senha
                            </label>

                            <span
                                className="absolute left-0 bottom-0 block h-[2px] w-0 bg-purple-600
                                transition-all duration-300"
                            />

                            {inputPasswordType === 'password' ? (
                                <EyeClosedIcon
                                    size="1.2rem"
                                    onClick={togglePasswordVisibility}
                                    className="text-slate-400/80 cursor-pointer absolute right-2 bottom-1"
                                />
                            ) : (
                                <EyeOpenIcon
                                    size="1.2rem"
                                    onClick={togglePasswordVisibility}
                                    className="text-slate-400/80 cursor-pointer absolute right-2 bottom-1"
                                />
                            )}
                        </div>

                        <ErrorMessage
                            name="password"
                            component="small"
                            className="text-red-500 font-semibold"
                        />
                    </div>

                    {error && (
                        <p className="text-red-600 font-semibold mb-6 mt-4">
                            Erro: {error.status}, {error.message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={classNames(
                            isSubmitting
                                ? 'disabled:bg-gray-200 disabled:text-gray-400 disabled:border-gray-300 disabled:cursor-not-allowed'
                                : 'text-purple-500 border-purple-500 hover:bg-purple-500 hover:text-white',
                            'flex w-full gap-1 items-center justify-center mx-auto px-2 py-2 font-semibold transition rounded-md bg-transparent border'
                        )}
                    >
                        {isSubmitting
                            ? 'Carregando'
                            : formType === 'signin'
                            ? 'Entrar'
                            : 'Cadastrar'}
                        {isSubmitting ? (
                            <LoadingIcon
                                size="1.4rem"
                                className="animate-spin"
                            />
                        ) : (
                            <ArrowCircleRightIcon size="1.4rem" />
                        )}
                    </button>

                    <WantToSignInOrSignUp
                        type={formType}
                        className="text-center text-[90%] mt-6"
                    />

                    {formType === 'signin' && (
                        <p className="text-[90%] text-center font-light mt-1 mb-5">
                            Ou{' '}
                            <a
                                href="#"
                                className="text-purple-500 hover:text-purple-700"
                            >
                                esqueceu a senha?
                            </a>
                        </p>
                    )}
                </FormikForm>
            )}
        </FormikWrapper>
    );
};

export default Form;
