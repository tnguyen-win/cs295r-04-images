import './SearchBar.css';
import { useState, useEffect } from 'react';

const SearchBar = ({ onSubmit }) => {
    const [term, setTerm] = useState('');
    const handleChange = event => setTerm(event.target.value);
    const handleFormSubmit = event => {
        event.preventDefault();

        onSubmit(term);
    };

    // Bug fix solution - https://stackoverflow.com/a/66006543
    useEffect(() => { onSubmit(term); }, [term]);

    return (
        <div className='search-bar mb-3 mb-lg-5'>
            <form onSubmit={handleFormSubmit}>
                <label className='mb-2' htmlFor='searchTerm'>Enter Search Term</label>
                <input id='searchTerm' className="form-control" value={term} onChange={handleChange} />
            </form>
        </div>
    );
};

export default SearchBar;
