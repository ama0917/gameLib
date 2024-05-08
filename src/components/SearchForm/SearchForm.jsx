import React, { useRef } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = ({ staticBooks }) => {
  const { setSearchTerm, setResultTitle } = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchTerm = searchText.current.value.trim().toLowerCase();

    // Filter staticBooks based on the search term
    const filteredBooks = staticBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm)
    );

    setSearchTerm(searchTerm);

    if (filteredBooks.length === 0) {
      setResultTitle("No results found");
    } else {
      setResultTitle("Results");
    }

    navigate("/book");
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={handleSubmit}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type="text" className='form-control' placeholder='Find a Game ...' ref={searchText} />
              <button type="submit" className='flex flex-c'>
                <FaSearch className='text-purple' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SearchForm;
