import './App.css';

import TabLi from './components/TabLi';
import { getLocalTabList, deleteLocalTab } from './chrome_api/TabUtil';
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

  console.log(localTabList.length)


  return (
      <div>
        {
          localTabList.length == 0
            &&
          <h1>There is No Tab in local</h1>
        }
        {
          localTabList.length != 0
            && 
          <TabUl
            tablist={localTabList}
            deleteHandler = {deleteLocalTabHandler}
          ></TabUl> 
        }
      </div>
    );
}

export default App;
