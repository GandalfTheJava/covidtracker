import axios from 'axios';

const URL = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(URL);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${URL}/daily`);

        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
    } catch (error) {
        return error;
    }
};

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${URL}/countries`);

        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
};