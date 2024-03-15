import './App.css';

import TabLi from './components/TabLi';
import { getLocalTabList } from './chrome_api/getTabList';
import {useState, useEffect} from 'react';

function App() {

  const [tablist, setTablist] = useState([]);

  useEffect(() => {
    getLocalTabList(setTablist);
  },[]);

  console.log(tablist.length)


  return (
      <div>
        <ul>
          {
            tablist.map(
              (tab) =>{
                console.log(tab.id);
                 return <TabLi
                    key = {tab.id}
                    tab = {tab}
                  ></TabLi>
              }
            )
          }
        </ul>
      </div>
    );
}

export default App;
