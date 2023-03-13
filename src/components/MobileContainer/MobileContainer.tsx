import React, {FC} from 'react';
import cl from './MobileContainer.module.scss'

interface MCProps {
    children: JSX.Element | JSX.Element[] | string
}

const MobileContainer: FC<MCProps> = ({children}) => {
    return (
        <div className={cl.mobileContainer}>
            {children}
        </div>
    );
};

export default MobileContainer;