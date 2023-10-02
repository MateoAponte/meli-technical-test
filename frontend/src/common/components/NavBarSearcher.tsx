import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export const NavBarSearcher: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const onInput = (evt: any) => {
    setSearch(evt.target.value);
  };
  const doSearch = (evt: any) => {
    if (evt.keyCode === 13 && !!search) {
      evt.preventDefault();
      getSearchByQuery();
    }
  };
  const getSearchByQuery = () => {
    navigate(`/list?q=${search}`);
  };

  return (
    <form className="navbar__searcher" id="navbar__searcher" onKeyDown={doSearch}>
      <input className="navbar__searcher-input" placeholder="Buscar productos, marcas y más..." value={search} onInput={onInput} />
      <button className="navbar__searcher-icon" name="searcher-button">
        <div className="navbar__searcher-divider"></div>
        <AiOutlineSearch />
      </button>
    </form>
  );
};
