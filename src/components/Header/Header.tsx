import React, {FC} from 'react';
import cl from './Header.module.scss'
import backIcon from '../../assets/icons/back.png'
import {useNavigate} from "react-router-dom";

interface HeaderProps {
    children: JSX.Element | JSX.Element[] | string
    back?: boolean | ((value?: any) => void)
    secondaryText?: string
}

const Header: FC<HeaderProps> = ({children, back, secondaryText}) => {
    const navigate = useNavigate();

    const backHandler = () => {
        if (back === true) navigate(-1)
        if (typeof back === 'function') back()
    }

    return (
        <div className={cl.box}>
            <div className={cl.container}>
                <div className={cl.icon} onClick={backHandler}>
                    {back &&
                        <img src={backIcon} alt=""/>
                    }
                </div>
                <div className={cl.text}>{children}</div>
            </div>
            {secondaryText && <div className={cl.secondaryText}>{secondaryText}</div>}
        </div>
    );
};

export default Header;