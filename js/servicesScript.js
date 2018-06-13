
var mydivs=new Array('#content-1','#content-2');

function opcl(arr, e){
    if ($(e).css('overflow') == 'hidden'){
        for(var i in arr){
            $(arr[i]).hide();
        }
        $(e).stop().fadeToggle();
    }
};
