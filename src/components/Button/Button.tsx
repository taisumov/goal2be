import React, {FC} from 'react';
import cl from './Button.module.scss'
import classNames from "../../core/utils/classNames";
import {Link} from "react-router-dom";

interface ButtonProps {
    children: JSX.Element | JSX.Element[] | string
    link?: string
    disabled?: boolean
    handler?: (value?: any) => void
}

const Button: FC<ButtonProps> = ({children, link, disabled = false, handler}) => {

    let typeBtn = disabled ? cl.disabled : cl.default
    let sizeBtn = cl.medium

    return (
        <>
            {link && !disabled
                ?
                <Link to={link} className={cl.link} onClick={() => {
                    if (handler) handler()
                }}>
                    <div className={classNames(cl.container, typeBtn, sizeBtn)}>
                        {children}
                    </div>
                </Link>
                :
                <div className={classNames(cl.container, typeBtn, sizeBtn)} onClick={() => {
                    if (handler) handler()
                }}>
                    {children}
                </div>
            }
        </>
    );
};

export default Button;