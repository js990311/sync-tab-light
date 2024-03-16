/*global chrome*/


export const getLocalTabList = (setTablist) => {
    console.log("log-getLocalTabList");
    
    
    /*setTablist([
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
    ]);*/
    chrome.storage.local.get(['tablist'], function(result) {
        setTablist(result.tablist);
      });    
}

export const deleteLocalTab = (localTabList, id) => {
  let ret = localTabList.filter((tab) => {
    return tab.id != id;
  });
  chrome.storage.local.set({
    tablist : ret
  });
  return ret;
}