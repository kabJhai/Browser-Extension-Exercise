$(function(){
    //To calculate the age
    chrome.storage.sync.get('age',function(birthYear){
        if(birthYear.age){
            $('#calculated').text(birthYear.age);
        }else{
            $('#calculated').text("Not calculated!");
        }
    })
    $('#year').keyup(function(){
        let year = parseInt(Date().substring(11,15));
        if($('#year').val().length == 4){
            $('#calculated').text(year-parseInt($('#year').val()));
            let age = year-parseInt($('#year').val());
            chrome.storage.sync.get('age',function(birthYear){
                chrome.storage.sync.set({'age': age});
                if(age > 100){
                    var notification = {
                        type: "basic",
                        iconUrl: "icon48.png",
                        title:"Too Old",
                        message:"Uh are you really this old?"
                    };
                    chrome.notifications.create('oldNotif',notification,function() {
                        chrome.runtime.lastError
                    });
                }
    
            });
        }    
    });
});