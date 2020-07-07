/**
 * Created by DELL on 2019/10/7.
 */
(function(){
    var two_images = document.getElementsByClassName('two_images')[0];
    var two_points_li = document.getElementsByClassName('two_points')[0].getElementsByTagName('li');
    var oBtn_left = document.getElementsByClassName('btn_left')[0];
    var oBtn_right = document.getElementsByClassName('btn_right')[0];
    var oTwo = document.getElementById('two');
    var iNow = 0;
    var time = 0;

    var goNext = function(){
        for(var i = 0;i < two_points_li.length;i++){
            two_points_li[i].className = 'ordinary';
        }
        two_points_li[iNow].className = 'ordinary active';
        two_images.style.left = -1519*iNow + 'px';
        //time = 0;
    };
    oBtn_left.addEventListener('click',function(){
        iNow--;
        if(iNow < 0){
            iNow = 4;
        }
        goNext();
        time = -2;
    });
    oBtn_right.addEventListener('click',function(){
        iNow++;
        if(iNow == 5){
            iNow = 0;
        }
        goNext();
        time = -2;
    });
    for(var i = 0;i < two_points_li.length;i++) {
        two_points_li[i].index = i;     //index在这里是(自定义属性)
        two_points_li[i].onclick = function() {
            iNow = this.index;
            goNext();
        };
    }
    var times = setInterval(function(){
        time++;
        if(time == 3){
            iNow++;
            if(iNow == 5){
                iNow = 0;
            }
            goNext();
            time = -2;
        }
    },1000);

    oTwo.onmouseover = function(){
        clearInterval(times);
    };
    oTwo.onmouseout = function(){
        times = setInterval(function(){
            time++;
            if(time == 3){
                iNow++;
                if(iNow == 5){
                    iNow = 0;
                }
                goNext();
                time = -2;
            }
        },1000);
    };
})();