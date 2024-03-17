/*global chrome*/

export const getLocalTabList = (setTablist) => {
    console.log("log-getLocalTabList");
    
    // Mock data
  //  setTablist(getMockTabList());

    chrome.storage.local.get(['tablist'], function(result) {
        setTablist(result.tablist);
    });    
}

const getMockTabList = () => {
  return [
      {
          id : "123",
          title : "title",
          url : "localhost:8080/"
      },
      {
        id : "456",
        title : "dummy",
        url : "localhost:8080/"
     }
  ]
}

export const setLocalTabList = (setTablist, tablist) => {
    setChromeLocalTabList(tablist);
    setTablist(tablist);
}

export const deleteLocalTab = (localTabList, id) => {
  let ret = localTabList.filter((tab) => {
    return tab.id != id;
  });
  setChromeLocalTabList(ret);
  return ret;
}

const setChromeLocalTabList = (tabs) => {
  chrome.storage.local.set({
    tablist : tabs
  });
}