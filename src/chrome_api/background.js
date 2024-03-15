chrome.runtime.onInstalled.addListener(() => {

    let tabEvent = (currentTab) => {
      // 요구사항 1 : 현 window에 있는 tab 정보를 다 받아온다.
      let windowId = currentTab.windowId;
      
      chrome.tabs.query({
          currentWindow : true,
        },(tabsInWindow) => {
          console.log(tabsInWindow);
          // url, title 정보만 추출 
          let tablist = [];
          tabsInWindow.forEach(tab => {
            tablist.push({
              id : Date.now() * 1000 + tab.title.length + tab.url.length,
              title : tab.title,
              url : tab.url,
              tag : "Undefined"
            });
            // 요구사항 2 Tab을 다 닫는다. 
            chrome.tabs.remove(tab.id);
          });
          // storage로 저장 
          addTab(tablist);
      });    
      // 요구사항 3 : 새 Tab을 열어서 1번에서의 정보를 제공한다. 
      chrome.tabs.create({
        url:'index.html'
      })
  
    }
  
    // 이벤트 등록
    chrome.action.onClicked.addListener(tabEvent);
  });
  