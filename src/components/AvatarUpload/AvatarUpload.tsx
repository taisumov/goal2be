import React, {BaseSyntheticEvent, FC, useEffect, useRef} from 'react';
import cl from './AvatarUpload.module.scss'

interface AvatarUploadProps {
    avatar: File | null
    setAvatar: (value: File | null) => void
}

const AvatarUpload: FC<AvatarUploadProps> = ({avatar, setAvatar}) => {

    const avatarRef = useRef<any>({} as HTMLInputElement)
    const divRef = useRef<HTMLInputElement>({} as HTMLInputElement)

    const handleInput = (e: BaseSyntheticEvent) => {
        const currentFile = e.target.files[0]
        if (currentFile) {
            console.log(currentFile)
            if (['jpeg', 'jpg', 'png'].includes(currentFile.name.split('.').at(-1))) {
                setAvatar(currentFile)
            } else {
                alert('error')
            }
        }
    }

    useEffect(() => {
        divRef.current.addEventListener('click', () => {
            avatarRef.current.click()
        })
    }, [])

    return (
        <div className={cl.container}>
            <input
                type="file"
                className={cl.input}
                ref={avatarRef}
                onChange={handleInput}
                onClick={e => e.stopPropagation()}
            />
            <div className={cl.avatar} ref={divRef}>
                <img src={avatar ? URL.createObjectURL(avatar as Blob) : ''} alt=""/>
            </div>
        </div>
    );
};

export default AvatarUpload;