//Retrive all tabs
//chrome.tabs.query
chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
    //Load or highlight the Icon
    chrome.pageAction.show(tabs[0].id);
})