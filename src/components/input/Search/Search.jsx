import React, { useState } from 'react';
import './styles.css';

const Search = ({ changer }) => {
    const [value, setValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const onKeyPressed = (e) => {
        if (e.key === 'Enter') {
            changer(value.trim());
            e.target.blur();
            setValue(value.trim());
        }
    }

    const onClickSearch = () => {
        changer(value.trim());
        setValue(value.trim());
    }

    return (
        <div className={`search ${isFocused ? 'search-focus' : ''}`}>
            <input placeholder='Search for a GitHub username...' onKeyDown={onKeyPressed} type="text" className="search-input" value={value} onChange={(e) => setValue(e.target.value)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
            <img src={'./assets/search.svg'} alt="search" className='search-icon' onClick={onClickSearch} />
        </div>
    );
};

export default Search;