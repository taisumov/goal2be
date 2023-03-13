import React, {BaseSyntheticEvent, FC} from 'react';
import cl from './TextArea.module.scss'

interface TextAreaProps {
    value: string
    setValue: (value: string) => void
    limit?: number
    placeholder?: string
}

const TextArea: FC<TextAreaProps> = ({value, setValue, limit = 1000, placeholder}) => {
    return (
        <div className={cl.box}>
            <textarea
                placeholder={placeholder ?? ''}
                value={value}
                className={cl.container}
                onChange={(e: BaseSyntheticEvent) => {
                    if (e.target.value.length <= limit)
                        setValue(e.target.value)
                }}
            ></textarea>
            <div className={cl.counter}>{value.length}/{limit}</div>
        </div>
    );
};

export default TextArea;