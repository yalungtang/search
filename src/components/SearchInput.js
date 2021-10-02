import React from 'react';
import debounce from 'lodash.debounce';
import SearchIcon from './SearchIcon';

const SearchInput = (props) => {
    const { onSearch } = props;
    const [inputValue, setInputValue] = React.useState('');
    
    const debouncedOnSearch = React.useMemo(() => debounce(onSearch, 300), []);

    const handleOnChange = (e) => {
        const { target: { value } } = e;
        setInputValue(value);
        debouncedOnSearch(value);
    };

    return (
        <div className="SearchInput SearchInput__Container">
            <SearchIcon className="SearchInput__Icon" />
            <input className="SearchInput__Input" onChange={handleOnChange} value={inputValue} />
        </div>
    );
};

export default SearchInput;
