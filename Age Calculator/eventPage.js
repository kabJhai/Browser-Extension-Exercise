//Event page that is going to be executed on right click event and 
//has an access to selected text
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
//This function creates a listener 
//That is going to listen to the value change in the storage
chrome.storage.onChanged.addListener(function (changes,storageName) {
     //To set a badge
     //changes.age.newValue.toString() shows the new value
     chrome.browserAction.setBadgeText({"text":changes.age.newValue.toString()});
});