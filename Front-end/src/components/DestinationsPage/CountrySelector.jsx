// CountrySelector.js
import React from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import 'flag-icons/css/flag-icons.min.css';

const CountrySelector = ({ onSelectCountry }) => {
  // Get country options with flags
  const options = countryList().getData().map(country => ({
    value: country.value,
    label: (
      <span>
        <span className={`fi fi-${country.value.toLowerCase()}`} style={{ marginRight: '8px' }}></span>
        {country.label}
      </span>
    )
  }));

  const handleChange = (option) => {
    onSelectCountry(option.value);  
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none', 
      margin: '-0.5rem 0 -0.3rem -0.6rem',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#636363', // Change this to your desired placeholder color
    }),
  };

  return (
    <Select
      className="form-control"
      options={options}
      onChange={handleChange}
      placeholder="Nationality"
      styles={customStyles}
    />
  );
};

export default CountrySelector;
