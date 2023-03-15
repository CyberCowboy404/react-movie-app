import { useContext } from 'react';
import { observer, MobXProviderContext } from 'mobx-react';
import SearchController from './Search.ctrl';
import './Search.scss';

const Search = ({ placeholder }) => {
  const { filmsStore } = useContext(MobXProviderContext);
  const controller = new SearchController(filmsStore);

  return (
    <div className="search">
      <input
        type="text"
        onChange={controller.handleSearch}
        placeholder={placeholder || 'Search...'}
        className="search__input"
      />
    </div>
  );
};

export default observer(Search);
