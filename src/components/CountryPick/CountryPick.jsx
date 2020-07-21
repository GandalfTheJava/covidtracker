import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import './CountryPick.css';
import { fetchCountries } from '../../API.utils';

const CountryPick = ({ handleCountryChange }) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(await fetchCountries());
        };
        fetchAPI();
    }, []);
    return (
        <FormControl className='form-control'>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPick;
