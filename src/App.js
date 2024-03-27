import './App.css';

import { getLocalTabList, deleteLocalTab, setLocalTabList } from './chrome_api/TabUtil';
import {useState, useEffect} from 'react';
import TabUl from './components/tablist/TabUl';
import SearchBar from './components/search/SearchBar';
import TabListWrapper from './components/tablist/TabListWrapper'
import SearchResult from './components/search/SearchResult';

function App() {
  const [query, setQuery] = useState('');
  const [localTabList, setTablist] = useState([]);

  useEffect(() => {
    getLocalTabList(setTablist);
  },[]);

  let deleteLocalTabHandler = (id) => {
    let ret = deleteLocalTab(localTabList, id);
    setTablist(ret);
  }

  let dropHandler = (tablist) => {
    setLocalTabList(setTablist, tablist);
  }
  return (
      <div>
        <SearchBar
          query={query} 
          setQuery={setQuery}
        />
        {
          query === '' 
          &&         
          <TabListWrapper
            dropHandler={dropHandler}
            deleteHandler = {deleteLocalTabHandler}
            localTabList = {localTabList}
          />
        }
        {
          query !== ''
          && 
          <SearchResult
            query={query}
            tablist={localTabList}
            deleteHandler={deleteLocalTabHandler}
          />
        }

      </div>
    );
}

export default App;
