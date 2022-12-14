import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from '@utils/classNames';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className ? props.className : '',
                'container max-w-[1000px] px-4 mx-auto'
            )}
        >
            {children}
        </div>
    );
};

export default Container;
