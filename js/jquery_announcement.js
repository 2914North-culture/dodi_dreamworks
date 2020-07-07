/**
 * Created by DELL on 2019/10/18.
 */
$(function(){
    var oThree = $('.three_in_left');
    var oUl = $('.three_in_left .three_ul');
    var oLi_First = $('.three_in_left .three_ul li').first().clone();
    $('.three_in_left .three_ul').append(oLi_First);
    var oLi_Length = $('.three_in_left .three_ul li').length;
    var oLi_Height = $('.three_in_left .three_ul li').eq(0).height();
    var i = 0;
    function moveTop(){
        i++;
        if(i == oLi_Length){
            oUl.css('top',0);
            i = 1;
        }
        oUl.stop().animate({top:-i*oLi_Height},700,'swing');
    }
    var times = setInterval(moveTop,5000);
    oThree.hover(function(){
        clearInterval(times);
    },function(){
        times = setInterval(moveTop,5000);
    })
});