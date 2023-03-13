import React, {BaseSyntheticEvent, FC, useState} from 'react';
import cl from './Input.module.scss'
import classNames from "../../core/utils/classNames";

import eyeClosed from '../../assets/icons/eye-closed.png'
import eyeOpen from '../../assets/icons/eye-open.png'

interface InputProps {
    placeholder: string
    value: string | number
    setValue: (value: string) => void
    errorMessage?: string
    password?: boolean
}

const Input: FC<InputProps> = ({placeholder, value, setValue, errorMessage, password = false}) => {
    const [passwordHidden, setPasswordHidden] = useState(true)
    const styles = [cl.container]
    if (errorMessage) styles.push(cl.containerError)

    return (
        <div className={cl.componentContainer}>
            <div className={classNames(...styles)}>
                <label className={cl.placeholder}>{placeholder}</label>
                <input
                    value={value}
                    onChange={(e: BaseSyntheticEvent) => setValue(e.target.value)}
                    type={password ? (passwordHidden ? 'password' : 'text') : 'text'}
                    className={cl.input}
                />
                {password &&
                    <div className={cl.password} onClick={() => setPasswordHidden(prev => !prev)}>
                        <img src={passwordHidden ? eyeClosed : eyeOpen} alt=""/>
                    </div>
                }
            </div>
            <div className={cl.errorMessage}>{errorMessage || ''}</div>
        </div>
    );
};

export default Input;