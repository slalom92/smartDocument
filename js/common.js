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
    },
    contextClickdIdx : null,
    rightClickable : function(e){
        $('.rightClickable').on('contextmenu',function(e){
            e.preventDefault();
            let x = e.pageX + 'px';            
            let y = e.pageY + 'px';
            let clickedElement = $(e.target).parentsUntil('.rightClickable').parent().index();//선택 element index값
            console.log(clickedElement);
            $('.contextBox').css({
                'top':y,
                'left':x
            });
            $('.contextBox').show();
            init.contextClickdIdx = clickedElement;            
        });
    },
    closeContextmenu : function(e){
        $(document).bind('click',function(e){
            let clickedobj = $(e.target);
            if(!clickedobj.parents().hasClass('contextBox')){
                $('.contextBox').hide();
            }
            return false;
        });
        $('.contextBox a').bind('click',function(){
            $('.contextBox').hide();
            return false;
        });
    },
    changeName : function(){
        $('.changeName').bind('click',function(){
            let clickedValue = $('.rightClickable').eq(init.contextClickdIdx).find('.folderName').text();
            $('.rightClickable').eq(init.contextClickdIdx).find('.folderName').html('<input type="text" value="'+clickedValue+'" class="changeInput"/>');
            return false;
        });
        $(document).on('blur','.changeInput',function(){
            let thisVal = $(this).val();
            $('.rightClickable').eq(init.contextClickdIdx).find('.folderName').html(thisVal);
        });
    },
    openLayer : function(id){
        $('#'+id).show();
    },
    closeLayer : function(id){
        $('#'+id).hide();
    },
}

$(document).ready(function(){
    init.lnbFn();
    init.rightClickable();
    init.closeContextmenu();
    init.changeName();
});