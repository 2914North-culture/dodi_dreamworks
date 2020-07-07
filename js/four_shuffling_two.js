/**
 * Created by DELL on 2019/10/18.
 */
$(function(){
    var oFour = $('.four_center_body');
    var oFour_Ul = $('.four_center_body .four_ul');
    var oLi_First = $('.four_center_body .four_ul li').first().clone();
    $('.four_center_body .four_ul').append(oLi_First);
    var oLi_Length = $('.four_center_body .four_ul li').length;
    var oLi_Width = $('.four_center_body .four_ul li').eq(0).width();
    var i = 0;
    var time = 0;

    $('.btn .btn_next').click(function(){
        i++;
        if(i == oLi_Length){
            oFour_Ul.css('left',0);
            i = 1;
        }
        oFour_Ul.stop().animate({left:-i*oLi_Width},1500,'linear');
        time = -2;
    });
    $('.btn .btn_pre').click(function(){
        i--;
        if(i == -1){
            oFour_Ul.css('left',-(oLi_Length-1)*oLi_Width);
            i = oLi_Length-2;
        }
        oFour_Ul.stop().animate({left:-i*oLi_Width},1500,'linear');
        time = -2;
    });
    function moveNext(){
        time++;
        if(time == 3){
            i++;
            if(i == oLi_Length){
                oFour_Ul.css('left',0);
                i = 1;
            }
            oFour_Ul.stop().animate({left:-i*oLi_Width},1500,'linear');
            time = -2;  //½üËÆÖµ
        }
    }
    var times = setInterval(moveNext,1000);

    oFour.hover(function(){
        clearInterval(times);
    },function(){
        times = setInterval(moveNext,1000);
    });

    $('.btn').hover(function(){
        clearInterval(times);
    },function(){
        times = setInterval(moveNext,1000);
    })
});