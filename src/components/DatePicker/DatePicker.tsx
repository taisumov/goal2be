import React, {BaseSyntheticEvent, FC, useEffect, useRef} from 'react';
import {ContainerProps} from "../../shared/interfaces/ContainerProps";
import cl from './DatePicker.module.scss'
import calendarIcon from '../../assets/icons/calendar.svg'

interface DatePickerProps extends ContainerProps {
    date: any
    setDate: any
}

const DatePicker: FC<DatePickerProps> = ({children, date, setDate}) => {

    const dateRef = useRef<any>({} as HTMLInputElement)
    const containerRef = useRef<HTMLInputElement>({} as HTMLInputElement)

    useEffect(() => {
        containerRef.current.addEventListener('click', () => {
            dateRef.current.showPicker()
        })
    }, [])

    return (
        <>
            <input
                className={cl.input}
                ref={dateRef}
                value={date}
                onChange={(e: BaseSyntheticEvent) => {
                    setDate(e.target.value)
                }}
                type="date"
            />
            <div ref={containerRef} className={cl.container}>
                <div>
                    <img src={calendarIcon} alt=""/>
                </div>
                <div>
                    {date !== '' ? date : children}
                </div>
            </div>
        </>
    );
};

export default DatePicker;