import React from 'react';
import mascot from '../../assets/images/mascot.png'
import Button from "../../components/Button/Button";
import cl from './Hello.module.scss'
import {Link} from "react-router-dom";

const Hello = () => {

    return (
        <div className={cl.container}>
            <img src={mascot} alt=""/>
            <Button link={'/base_registry'}>Create an account</Button>
            <div className={cl.underText}>Already have an account?</div>
            <Link to={'/base_registry'}>Sign In</Link>
        </div>
    );
};

export default Hello;