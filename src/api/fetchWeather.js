import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'

const API_KEY= '1468bf2bf6c7ebd3132e782e9448b302'

export const fetchWeather = async (query) => {
    const {data}= await axios.get(URL, {
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY
        }
    })
    return data
}