import React, {FC} from 'react';
import cl from './Selector.module.scss'
import classNames from "../../core/utils/classNames";

interface OptionItem {
    text: string
    value: string | number
}

interface SelectorProps {
    options: OptionItem[]
    value: string | number
    setValue: (value: string | number) => void
}

const Selector: FC<SelectorProps> = ({options, value, setValue}) => {
    return (
        <div className={cl.container}>
            {options.map(item =>
                <div
                    key={item.value}
                    onClick={() => {
                        if (value === item.value) {
                            setValue('')
                        } else {
                            setValue(item.value)
                        }
                    }}
                    className={item.value === value ? classNames(cl.item, cl.item__active) : cl.item}
                >{item.text}</div>
            )}
        </div>
    );
};

export default Selector;