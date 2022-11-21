import { FunctionComponent, HTMLAttributes } from "react";
import Link from "next/link";

interface IWantToSignInOrSignUpProps
    extends HTMLAttributes<HTMLParagraphElement> {
    type: "signin" | "signup";
}

const WantToSignInOrSignUp: FunctionComponent<IWantToSignInOrSignUpProps> = ({
    type,
    ...props
}) => {
    return (
        <p {...props}>
            <span className="font-light">
                {type === "signin"
                    ? "Ainda não tem uma conta?"
                    : "Já possui uma conta?"}{" "}
            </span>
            <Link
                href={type === "signin" ? "/register" : "/"}
                className="text-purple-500 hover:text-purple-600 cursor-pointer font-semibold"
            >
                {type === "signin" ? "Crie uma!" : "Então bora!"}
            </Link>
        </p>
    );
};

export default WantToSignInOrSignUp;
