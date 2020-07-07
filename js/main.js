/**
 * Created by DELL on 2019/10/17.
 */
$(function(){
    var oTwo = $('#two');
    var oLi_First = $('#two .two_images li').first().clone();
    $('#two .two_images').append(oLi_First);
    var oLi_Length = $('#two .two_images li').length;
    var oLi_Width = $('#two .two_images li').eq(0).width();
    for(var x = 0; x < oLi_Length-1;x++){
        $('.two_points').append('<li></li>');
    }
    $('.two_points li').first().addClass('active');
    var i = 0;
    $('.btn_left').click(function(){
        i--;
        if(i == -1){
            $('#two .two_images').css('left',-(oLi_Length-1)*oLi_Width);
            i = oLi_Length-2;
        }
        $('#two .two_images').stop().animate({left:-i*oLi_Width},1500);
        $('.two_points li').eq(i).addClass('active').siblings().removeClass('active');
    });
    $('.btn_right').click(function(){
        i++;
        if(i == oLi_Length){
            $('#two .two_images').css('left',0);
            i = 1;
        }
        $('#two .two_images').stop().animate({left:-i*oLi_Width},1500);
        if(i == oLi_Length-1){
            $('.two_points li').eq(0).addClass('active').siblings().removeClass('active');
        }
        else{
            $('.two_points li').eq(i).addClass('active').siblings().removeClass('active');
        }
    });
    function moveImage(){
        i++;
        if(i == oLi_Length){
            $('#two .two_images').css('left',0);
            i = 1;
        }
        $('#two .two_images').stop().animate({left:-i*oLi_Width},1500);
        if(i == oLi_Length-1){
            $('.two_points li').eq(0).addClass('active').siblings().removeClass('active');
        }
        else{
            $('.two_points li').eq(i).addClass('active').siblings().removeClass('active');
        }
    }
    //var times = setInterval(moveImage,6000);
    var i = 0;
    function show(){
        if(i < 1){
           times = setTimeout(moveImage,6000);
        }
    }
    show();
    $('.two_points li').click(function(){
        //var oLi_Active = $('.two_points .active').index();
        var iNow = $(this).index();
        i = iNow;
        $('#two .two_images').stop().animate({left:-iNow*oLi_Width},1500,'swing');
        $(this).addClass('active').siblings().removeClass('active');
    });
    oTwo.hover(function(){
        clearInterval(times);
    },function(){
        times = setInterval(moveImage,6000);
    });
});