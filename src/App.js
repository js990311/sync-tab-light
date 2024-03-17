import './App.css';

import { getLocalTabList, deleteLocalTab, setLocalTabList } from './chrome_api/TabUtil';
import {useState, useEffect} from 'react';
import TabUl from './components/TabUl';

function App() {

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
        {
          localTabList.length === 0
            &&
          <h1>There is No Tab in local</h1>
        }
        {
          localTabList.length !== 0
            && 
          <TabUl
            droppableId="localTab"
            dropHandler={dropHandler}
            tablist={localTabList}
            deleteHandler = {deleteLocalTabHandler}
          ></TabUl> 
        }
      </div>
    );
}

export default App;
