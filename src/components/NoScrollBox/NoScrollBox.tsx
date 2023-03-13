import React, {FC} from 'react';
import {ContainerProps} from "../../shared/interfaces/ContainerProps";
import cl from './NoScrollBox.module.scss'

const NoScrollBox: FC<ContainerProps> = ({children}) => <div className={cl.container}>{children}</div>

export default NoScrollBox;