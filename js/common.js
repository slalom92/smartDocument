const init = {
    lnbFn : function(){
        let timer = 500;
        $('.btnToggle').bind('click',function(){
            if(!$('#snb').hasClass('on')){
                $('#snb').animate({
                    'max-width':'73px'
                },timer);
                setTimeout(function(){                    
                    $('#snb').addClass('on');
                },timer / 1.2);
            }else{
                $('#snb').animate({
                    'max-width':'233px'
                },timer);
                setTimeout(function(){                    
                    $('#snb').removeClass('on');
                },timer / 4);
            }
            return false;
        });
    }
}

$(document).ready(function(){
    init.lnbFn();
});