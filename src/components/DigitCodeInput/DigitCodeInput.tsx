import React, {BaseSyntheticEvent, FC} from 'react';
import cl from './DigitCodeInput.module.scss'

interface DigitCodeInputProps {
    code: string
    setCode: (value: string) => void
    length?: number
}

const DigitCodeInput: FC<DigitCodeInputProps> = ({code, setCode, length = 6}) => {
    const handleInput = (e: BaseSyntheticEvent) => {
        if (e.target.value.length <= length)
            setCode(e.target.value.toUpperCase())
    }

    return (
        <div className={cl.container}>
            <input
                placeholder={'XXXXXX'}
                type={'text'}
                value={code}
                onChange={handleInput}
                className={cl.codeInput}
            />
        </div>
    )
};

export default DigitCodeInput;