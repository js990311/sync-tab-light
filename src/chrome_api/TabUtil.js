/*global chrome*/

export const getLocalTabList = (setTablist) => {    
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
          url : "localhost:3000/"
      },
      {
        id : "456",
        title : "dummy",
        url : "localhost:3000/"
     },
     {
      id : "789",
      title : "한글검색테스트1",
      url : "localhost:3000/"
    },
    {
      id : "999",
      title : "한글검색테스트2",
      url : "localhost:3000/"
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