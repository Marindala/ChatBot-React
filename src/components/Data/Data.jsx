import  { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Search from '../Search/Search'
import backgroundImage from '../../../public/chat2.png';


const theme = {
    background: '#f5f8fb',
    headerBgColor: '#7D3C98',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#7D3C98',
    botFontColor: '#fff',
    userBubbleColor: '#7D3C98',
    userFontColor: '#fff',
    headerTitle: '#7D3C98',
    backgroundImage: `url(${backgroundImage})`,
    footerBgColor:'#7D3C98',
    inputColor: '#7D3C98',
    

   
}



export default class Data extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                
                    steps={[
                        {
                            id: "1",
                            message: "Hola!! Bienvenida/o a Jidú",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Por favor ingresa un nombre válido.';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue}, un placer conocerte!",
                            trigger: "4"
                        },
                        {
                            id: "4",
                            message: "Do you need anything from me?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "Yes", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Great! Tell me what are you looking for...",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: "Im sorry if I cannot be of help to you. See you later",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "f", label: "Front-End", trigger: "7A"},
                                {value: "b", label: "Back-End", trigger: "7B"},
                            ]
                        },
                        {
                            id: "7A",
                            message: "I see you like Front-End programming! Which of these frameworks would you like to know more about?",
                            trigger: "seleccionFront"
                        },
                        {
                            id: "7B",
                            message: "I see you like Back-End programming! Which of these frameworks would you like to know more about?",
                            trigger: "seleccionBack"
                        },
                        {
                            id: "seleccionFront",
                            options: [
                                {value: "Angular_(framework)", label: "Angular", trigger: "9"},
                                {value: "React", label: "React", trigger: "9"},
                                {value: "Vue.js", label: "Vue.js", trigger: "9"},
                            ]
                        },
                        {
                            id: "seleccionBack",
                            options: [
                                {value: "Spring_Framework", label: "Spring", trigger: "9"},
                                {value: "Laravel", label: "Laravel", trigger: "9"},
                                {value: ".NET_Core", label: ".Net Core", trigger: "9"},
                            ]
                        },
                        {
                            id: "9",
                            component: <Search />,
                            asMessage: true,
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "Do you need to know anything else?",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "Yes", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}