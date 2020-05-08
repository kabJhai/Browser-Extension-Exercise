$(function(){
    $('#year').keyup(function(){
            let year = parseInt(Date().substring(11,15));
            if($('#year').val()!= ''){
                $('#calculated').text(year-parseInt($('#year').val()));
            }
        })
})