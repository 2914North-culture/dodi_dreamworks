/**
 * Created by DELL on 2019/10/8.
 */
(function(){
    //        var oUl = document.getElementsByClassName('three_in_left').getElementsByTagName('ul');
    var oDiv = document.getElementsByClassName('three_in_left')[0];
    var oUl = document.getElementById('three_ul');
    var time = 0;
    var x = 0;
    var autoPlay = setInterval(function(){
        time++;
        if(time == 3){
            x++;
            if(x == 5){
                x = 0;
            }
            oUl.style.top =-48*x+'px';
            time = 0;
        }
    },1000);
    oDiv.onmouseover = function(){
        clearInterval(autoPlay);
    };
    oDiv.onmouseout = function(){
        autoPlay = setInterval(function(){
            time++;
            if(time == 3){
                x++;
                if(x == 5){
                    x = 0;
                }
                oUl.style.top =-48*x+'px';
                time = 0;
            }
        },1000);
    };
})();