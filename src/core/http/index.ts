import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL || ''

export const $host = axios.create({
    baseURL: baseURL,
    headers: {
        'ngrok-skip-browser-warning': 'goal2be'
    }
})