import './style.scss'

import React from 'react';
import SearchIcon from '../../icons/SearchIcon'


const Search = ({ className }) => {
  return (
    <div className={className}>
        <div className="comp__search-main">
            <input className='comp__search-main-input' type="text" />
            {/* popup search */}
            {/* icon search */}
            <SearchIcon className='comp__search-main-search__icon' />
        </div>
    </div>
  );
}

export default Search;
