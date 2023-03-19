import { FunctionComponent } from 'react';
import classNames from '@utils/classNames';
import { IContainerProps } from './types';

const Container: FunctionComponent<IContainerProps> = ({
    children,
    ...props
}) => {
    return (
        <div
            {...props}
            className={classNames(
                props.className || '',
                'container max-w-[1000px] px-4 mx-auto'
            )}
        >
            {children}
        </div>
    );
};

export default Container;
