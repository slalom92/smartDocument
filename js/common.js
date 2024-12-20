const init = {
    lnbFn : function(){
        let timer = 500;
        $('.btnToggle').bind('click',function(){
            if(!$('#snb').hasClass('on')){
                $('#snb').animate({
                    'width':'73px'
                },timer);
                setTimeout(function(){                    
                    $('#snb').addClass('on');
                },timer / 1.2);
            }else{
                $('#snb').animate({
                    'width':'233px'
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
            // return false;
        });
        $('.contextBox a').bind('click',function(){
            $('.contextBox').hide();
            // return false;
        });
    },
    closeAddLayer : function(e){
        $(document).bind('click',function(e){
            let clickedobj = $(e.target);
            if(!clickedobj.parents().hasClass('addLayer')){
                if(clickedobj.hasClass('functionBtn')){
                    return false;
                }
                $('.addLayer').hide();
            }
            // return false;
        });
        $('.addLayer div').bind('click',function(){
            let clickedVal = $(this).text();
            $('.addLayer div').removeClass('on');
            $(this).addClass('on');
            $(this).html('<input type="text" value="'+ clickedVal +'" /><a href="#" class="submitThis"></a>');
            $(this).find('input').focus();
            return false;
        });
        $(document).on('blur','.addLayer input[type=text]',function(){
            let thisVal = $(this).val();
            console.log(thisVal);
            $(this).parent().html(thisVal);
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
    tabView : function(e){
        $('.tabArea a').bind('click',function(e){
            let clickedIdx = $(this).index();
            if(clickedIdx!=2){
                $('.tabArea a').removeClass('on').eq(clickedIdx).addClass('on');
                $('.viewArea').hide();
                $('.viewArea_'+ (clickedIdx+1)).show();
                return false;
            }
        });
    }
}

$(document).ready(function(){
    init.lnbFn();
    init.rightClickable();
    init.closeContextmenu();
    init.closeAddLayer();
    init.changeName();
    init.tabView();
});