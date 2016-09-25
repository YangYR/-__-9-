/**
 * Created by Administrator on 2016-09-04.
 */
$(function(){
    $('.main_nav li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var index=$(this).index();
        $('.activity_items').children('.activiting').eq(index).show().siblings('.activiting').hide();
    });
    $('.register_phone li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        var Index=$(this).index();
        $('#con').children('div').eq(Index).show().siblings('div').hide();
    });
    $('.close1-btn').click(function(){
        $(this).parent().parent().parent().hide();
    });
    $('.get-btn').click(function(){
        $('.modal').show();
    });
    $('.a-sure-awards').click(function(){
        $('.modal').show();
    });
    $('.a-sure-awards2').click(function(){
        $('.modal').show();
    });
    $('.choose-li li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    $('.preview-btn1').mouseover(function(){
        $('.preview1').slideDown();
    }).mouseout(function(){
        $('.preview1').slideUp();
    });
    $('.preview-btn2').mouseover(function(){
        $('.preview2').slideDown();
    }).mouseout(function(){
        $('.preview2').slideUp();
    });
    $('.preview-btn3').mouseover(function(){
        $('.preview3').slideDown();
    }).mouseout(function(){
        $('.preview3').slideUp();
    });
    $('.preview-btn4').mouseover(function(){
        $('.preview4').slideDown();
    }).mouseout(function(){
        $('.preview4').slideUp();
    });
    $('.preview-btn5').mouseover(function(){
        $('.preview5').slideDown();
    }).mouseout(function(){
        $('.preview5').slideUp();
    });
    $('.preview-btn8').mouseover(function(){
        $('.preview8').slideDown();
    }).mouseout(function(){
        $('.preview8').slideUp();
    });
});
