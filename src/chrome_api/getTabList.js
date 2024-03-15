/*global chrome*/


export const getLocalTabList = (setTablist) => {
    console.log("log-getLocalTabList");
    
    /*
    setTablist([
        {
            id : "123",
            title : "title",
            url : "localhost:8080/"
        }
    ]);
    */
    chrome.storage.local.get(['tablist'], function(result) {
        setTablist(result.tablist);
      });    
}
