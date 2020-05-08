var contextMenuItem = {
    "id":"getAge",
    "title":"Calculate Age",
    "contexts":["selection"] //An event to follow
};
chrome.contextMenus.create(contextMenuItem,function() {
    chrome.runtime.lastError    
});
//To perform an action when the extension context menu is clicked on
chrome.contextMenus.onClicked.addListener(function(clicked){
    let year = parseInt(Date().substring(11,15));
        if(clicked.menuItemId == 'getAge' && clicked.selectionText){
            if(!isNaN(parseInt(clicked.selectionText))){
                var notification = {
                    type: "basic",
                    iconUrl: "icon48.png",
                    title:"Age Calculator",
                    message:"It is "+parseInt(year-clicked.selectionText)+" years old"
                };
                chrome.storage.sync.set({'age': year-clicked.selectionText});
                chrome.notifications.create('oldNotif',notification,function() {
                    chrome.runtime.lastError
                });
            }
        }
});