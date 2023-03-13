import React, { useMemo, useState } from 'react';
import Header from "../../components/Header/Header";
import cl from './BaseRegistry.module.scss'
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {UserData, Validator} from "../../shared/interfaces/BaseRegistry";
import Container from "../../components/Container/Container";
import {$host} from "../../core/http";


const BaseRegistry = () => {

    const [regData, setRegData] = useState<UserData>({
        email: '',
        username: '',
        password: '',
        rePassword: '',
    })

    const [error, setError] = useState<UserData>({
        email: 'Empty field',
        username: 'Empty field',
        password: 'Empty field',
        rePassword: 'Empty field',
    })

    const confirmButtonDisabled = useMemo(() => {
        return !!Object.values(error).filter(item => item.length).length
    }, [error])

    const v: Validator = {
        email: function(value: string): string {
            if (!/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/.test(value)) {
                return 'Incorrect email'
            }
            return ''
        },
        username: function(value: string): string {
            if(!/^(?=.*[a-zA-Z])[\w+.+-]+$/.test(value))
                return 'Invalid username'
            return ''
        },
        password: function(value: string): string {
            if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])^[a-zA-Z0-9#?!@$%^&*-]{8,30}$/.test(value))
                return 'Invalid password'
            return ''
        },
        rePassword: function(value: string): string {
            if (value !== regData.password)
                return 'Passwords are not the same'
            return ''
        },
    }

    const handleChangeRegData = (value: string, field: string) => {
        const checkValid = v[field]
        setError({...error, [field]: checkValid(value)})
        setRegData({...regData, [field]: value})
    }

    const handleFetchData = () => {
        $host.post('/auth/users/registration', {...regData})
    }

    return (
        <Container>
            <Header>Sign up to continue</Header>
            <div className={cl.inputContainer}>
                <Input
                    value={regData.email}
                    placeholder={'E-Mail'}
                    setValue={(value) => handleChangeRegData(value, 'email')}
                    errorMessage={error.email !== 'Empty field' ? error.email : ''}
                />
                <Input
                    value={regData.username}
                    placeholder={'Username'}
                    setValue={(value) => handleChangeRegData(value, 'username')}
                    errorMessage={error.username !== 'Empty field' ? error.username : ''}
                />
                <Input
                    value={regData.password}
                    placeholder={'Password'}
                    setValue={(value) => handleChangeRegData(value, 'password')}
                    errorMessage={error.password !== 'Empty field' ? error.password : ''}
                    password
                />
                <Input
                    value={regData.rePassword}
                    placeholder={'Confirm password'}
                    setValue={(value) => handleChangeRegData(value, 'rePassword')}
                    errorMessage={error.rePassword !== 'Empty field' ? error.rePassword : ''}
                    password
                />
            </div>
            <div className={cl.confirmButton}>
                <Button disabled={confirmButtonDisabled}>Confirm</Button>
            </div>
        </Container>
    );
};

export default BaseRegistry;