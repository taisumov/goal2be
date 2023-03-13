import React, {useEffect, useState} from 'react';
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import DigitCodeInput from "../../components/DigitCodeInput/DigitCodeInput";
import {useNavigate, useSearchParams} from "react-router-dom";
import NoScrollBox from "../../components/NoScrollBox/NoScrollBox";
import Button from "../../components/Button/Button";
import cl from './ConfirmRegistration.module.scss'
import {$host} from "../../core/http";

const ConfirmRegistration = () => {
    const [code, setCode] = useState('')
    const [search, setSearch] = useSearchParams();
    const navigate = useNavigate();

    console.log(search.get('uuid'))

    useEffect(() => {
        if (search.get('uuid') === null) {
            navigate("/")
        }
    }, [])

    const confirmHandler = () => {
        if (search.get('uuid') && code.length === 6) {
            $host.post('/auth/users/activation', {
                code, uuid: search.get('uuid')
            })
        } else {
            alert('Incorrect input, try again')
        }
    }

    return (
        <Container>
            <Header secondaryText={'Enter the code from e-mail'}>Confirm registration</Header>
            <NoScrollBox>
                <div className={cl.container}>
                    <DigitCodeInput code={code} setCode={setCode}/>
                </div>
                <Button handler={confirmHandler}>Confirm</Button>
            </NoScrollBox>

        </Container>
    );
};

export default ConfirmRegistration;