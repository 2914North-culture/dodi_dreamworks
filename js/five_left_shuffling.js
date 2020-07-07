/**
 * Created by DELL on 2019/10/9.
 */
(function(){
    var oDiv = document.getElementsByClassName('left_img')[0];
    var oUl = document.getElementById('left_img_ul');
    //var oLi = oUl.getElementsByTagName('li');
    var oPoints = document.getElementById('left_point').getElementsByTagName('div');
    var x = 0;
    var time = 0;

    for(var i = 0;i < oPoints.length;i++){
        oPoints[i].index = i;
        oPoints[i].onclick = function(){
            x = this.index;
            goNext();
        }
    }
    var goNext = function(){
        for(var i = 0;i < oPoints.length;i++){
            oPoints[i].className = '';
        }
        oPoints[x].className = 'active';
        oUl.style.left = -639*x + 'px';
        time = 0;
    };
    var times = setInterval(function(){
        time++;
        if(time == 4){
            x++;
            if(x == oPoints.length){
                x = 0;
            }
            goNext();
            time = 0;
        }
    },1000);
    oDiv.onmouseover = function(){
        clearInterval(times);
    };
    oDiv.onmouseout = function(){
        times = setInterval(function(){
            time++;
            if(time == 4){
                x++;
                if(x == oPoints.length){
                    x = 0;
                }
                goNext();
                time = 0;
            }
        },1000);
    }
})();