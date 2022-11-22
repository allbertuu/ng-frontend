import { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { setCookie, destroyCookie } from 'nookies';
import { createContext, ReactNode, useState } from 'react';
import api from '../services/api';

interface IAuthProvider {
    children: ReactNode;
}

interface IUser {
    username: string;
    password: string;
}

interface ISignInCredentials extends IUser {}

interface IAuthContext {
    signIn(credentials: ISignInCredentials): Promise<void>;
    signOut(): void;
    isAuthenticated: boolean;
    user: IUser | null;
}

export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser | null>(null);
    const router = useRouter();
    const isAuthenticated = !!user;

    const signIn = async ({ username, password }: ISignInCredentials) => {
        const p = new Promise<void>(async (resolve, reject) => {
            try {
                const res = await api.post('session', {
                    username,
                    password,
                });
                const { token } = res.data;
                setCookie(undefined, 'ngbackend.token', token, {
                    maxAge: 60 * 60 * 24 * 30, // 30 days
                    path: '/',
                });
                setUser({ username, password });
                api.defaults.headers['Authorization'] = `Bearer ${token}`;
                router.push('/home');
                resolve();
            } catch (e) {
                const err = e as AxiosError;
                reject(err);
            }
        });
        return p;
    };

    const signOut = () => {
        destroyCookie(undefined, 'ngbackend.token');
        router.push('/');
    };

    return (
        <AuthContext.Provider
            value={{ signIn, signOut, isAuthenticated }}
        >
            {children}
        </AuthContext.Provider>
    );
}
