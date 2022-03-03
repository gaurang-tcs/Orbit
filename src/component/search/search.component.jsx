import React from 'react';

import './search.styles.scss';

export const SearchBox = ({ handleChange, placeholder }) => (
    <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
