import { useNavigate } from 'react-router-dom';
import './Search.scss';
import { FaSearch } from 'react-icons/fa';

const Search = ({ placeholder }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${event.target.search.value}`);
  }

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        type="text"
        name='search'
        placeholder={placeholder || 'Search...'}
        className="search__input"
      />
      <button type="submit" className="search__button">
        <FaSearch />
      </button>
    </form>
  );
};

export default Search;
