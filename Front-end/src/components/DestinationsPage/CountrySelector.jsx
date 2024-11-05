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

  // Handle change and notify parent
  const handleChange = (option) => {
    onSelectCountry(option.value);  // Pass the selected country code back to FeedbackForm
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Select your nationality"
    />
  );
};

export default CountrySelector;
