import { HTMLAttributes } from "react";

export interface IWantToSignInOrSignUpProps
    extends HTMLAttributes<HTMLParagraphElement> {
    type: 'signin' | 'signup';
}