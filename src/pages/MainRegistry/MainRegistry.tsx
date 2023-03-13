import React, {useState} from 'react';
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import NoScrollBox from "../../components/NoScrollBox/NoScrollBox";
import Input from "../../components/Input/Input";
import AvatarUpload from "../../components/AvatarUpload/AvatarUpload";
import DatePicker from "../../components/DatePicker/DatePicker";
import Selector from "../../components/Selector/Selector";
import cl from './MainRegistry.module.scss'
import TextArea from "../../components/TextArea/TextArea";
// import successImage from '../../assets/images/successMainRegistry.png'

interface RegData {
    name: string
    surname: string
    middleName: string
    birthday: Date | null | string
    avatar: File | null
    sex: string
    country: string
    region: string
    city: string
    type: string
    about: string
    website: string
    instagram: string
    email: string
    linkedin: string
}

const MainRegistry = () => {
    const [regData, setRegData] = useState<RegData>({
        name: '',
        surname: '',
        middleName: '',
        birthday: '',
        avatar: null,
        sex: '',
        country: '',
        region: '',
        city: '',
        type: '',
        about: '',
        website: '',
        instagram: '',
        email: '',
        linkedin: '',
    })
    const [currentScreen, setCurrentScreen] = useState(0)
    const screens = ['I am', 'Profile details', 'My gender', 'Location', 'About me', 'Contacts']
    const secondaryText = [undefined, undefined, 'Enter your city', undefined, undefined, 'Add out the \n' +
    'necessary links']

    const bottomButtonHandler = () => {
        if (currentScreen < screens.length - 1) {
            setCurrentScreen(prev => prev + 1)
        }
    }

    const backHandler = () => {
        if (currentScreen < screens.length && currentScreen > 0) {
            setCurrentScreen(prev => prev - 1)
        }
    }

    return (
        <Container>
            <Header
                secondaryText={secondaryText[currentScreen]}
                back={currentScreen !== 0 ? backHandler : undefined}
            >
                {screens[currentScreen]}
            </Header>
            <NoScrollBox>
                <div style={{position: 'relative', height: '100%'}}>
                    {currentScreen === 0 &&
                        <div className={cl.verticalCenter}>
                            <Selector
                                value={regData.type}
                                setValue={(value) => {
                                    setRegData(prev => ({...prev, type: value as string}))
                                }}
                                options={[
                                    {text: 'Fan', value: 'F'},
                                    {text: 'Player', value: 'P'},
                                ]}
                            />
                        </div>
                    }
                    {currentScreen === 1 &&
                        <div className={cl.verticalCenter}>
                            <AvatarUpload
                                avatar={regData.avatar}
                                setAvatar={(value) => setRegData(prev => ({...prev, avatar: value}))}
                            />
                            <Input
                                placeholder={'Name'}
                                value={regData.name}
                                setValue={(value) => setRegData(prev => ({...prev, name: value}))}
                            />
                            <Input
                                placeholder={'Last name'}
                                value={regData.surname}
                                setValue={(value) => setRegData(prev => ({...prev, surname: value}))}
                            />
                            <Input
                                placeholder={'Second last name'}
                                value={regData.middleName}
                                setValue={(value) => setRegData(prev => ({...prev, middleName: value}))}
                            />
                            <DatePicker
                                date={regData.birthday}
                                setDate={(value: any) => {
                                    setRegData(prev => ({...prev, birthday: value}))
                                }}
                            >Choose birthday</DatePicker>
                        </div>
                    }
                    {currentScreen === 2 &&
                        <div className={cl.verticalCenter}>
                            <Selector
                                options={[
                                    {text: 'Male', value: 'M'},
                                    {text: 'Female', value: 'F'},
                                    {text: 'Another', value: 'O'},
                                    {text: 'Not specified', value: '-'},
                                ]}
                                value={regData.sex}
                                setValue={(value) => {
                                    setRegData(prev => ({...prev, sex: value as string}))
                                }}
                            />
                        </div>
                    }
                    {currentScreen === 3 &&
                        <div className={cl.verticalCenter}>
                            <Input
                                value={regData.country}
                                setValue={(value) => setRegData(prev => ({...prev, country: value}))}
                                placeholder={'Country'}
                            />
                            <Input
                                value={regData.region}
                                setValue={(value) => setRegData(prev => ({...prev, region: value}))}
                                placeholder={'Region'}
                            />
                            <Input
                                value={regData.city}
                                setValue={(value) => setRegData(prev => ({...prev, city: value}))}
                                placeholder={'City'}
                            />
                        </div>
                    }
                    {currentScreen === 4 &&
                        <div className={cl.verticalCenter}>
                            <TextArea
                                placeholder={'Text about yourself!'}
                                value={regData.about}
                                setValue={(value) => setRegData(prev => ({...prev, about: value}))}
                            />
                        </div>
                    }
                    {currentScreen === 5 &&
                        <div className={cl.verticalCenter}>
                            <Input
                                value={regData.website}
                                setValue={(value => setRegData(prev => ({...prev, website: value})))}
                                placeholder={'Website'}
                            />
                            <Input
                                value={regData.email}
                                setValue={(value => setRegData(prev => ({...prev, email: value})))}
                                placeholder={'E-Mail'}
                            />
                            <Input
                                value={regData.instagram}
                                setValue={(value => setRegData(prev => ({...prev, instagram: value})))}
                                placeholder={'Instagram'}
                            />
                            <Input
                                value={regData.linkedin}
                                setValue={(value => setRegData(prev => ({...prev, linkedin: value})))}
                                placeholder={'LinkedIn'}
                            />
                        </div>
                    }
                </div>
                <Button handler={bottomButtonHandler}>
                    {currentScreen !== screens.length - 1 ? 'Continue' : 'Confirm'}
                </Button>
            </NoScrollBox>
        </Container>
    );
};

export default MainRegistry;