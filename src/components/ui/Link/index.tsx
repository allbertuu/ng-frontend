import classNames from '@utils/classNames';
import { FunctionComponent } from 'react';
import { ILinkProps } from './types';

const Link: FunctionComponent<ILinkProps> = ({ children, ...props }) => {
    return (
        <a
            {...props}
            className={classNames(
                props.className || '',
                'relative after:transition-all after:duration-700 after:ease-out after:absolute after:left-0 after:block after:w-1/4 hover:after:w-full after:h-[2px] after:bg-purple-500'
            )}
        >
            {children}
        </a>
    );
};

export default Link;
