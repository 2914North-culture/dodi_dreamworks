/**
 * Created by DELL on 2019/10/9.
 */
(function(){
    var oImage_Li = document.getElementsByClassName('five_li');
    var oPoint_Li = document.getElementsByClassName('num_show');
    var oDiv = document.getElementsByClassName('five_in_right')[0];
    var time = 0;
    var iNow = 0;

    var clearStyle = function(){
        for(var i = 0;i < oImage_Li.length;i++){
            oImage_Li[i].className = 'five_li';
        }
        for(var i = 0;i < oPoint_Li.length;i++){
            oPoint_Li[i].className = 'num_show';
        }
    };
    var autoPlay = function(){
        clearStyle();
        oImage_Li[iNow].className = 'five_li gradient';
        oPoint_Li[iNow].className = 'num_show show';
    };
    for(var i = 0;i < oPoint_Li.length;i++){
        oPoint_Li[i].index = i;
        oPoint_Li[i].onclick = function(){
            iNow = this.index;
            autoPlay();
            time = 0;
        }
    }
    var goIndex = function(){
        if(iNow < oImage_Li.length){
            iNow++;
        }
        if(iNow == oImage_Li.length){
            iNow = 0;clearStyle();
        }
        autoPlay();
    };
    var times = setInterval(function(){
        time++;
            if(time == 3){
                goIndex();
                time = 0;
            }
    },1000);
    oDiv.onmouseover = function(){
        clearInterval(times);
    };
    oDiv.onmouseout = function(){
        times = setInterval(function(){
            time++;
            if(time == 3){
                goIndex();
                time = 0;
            }
        },1000);
    }
})();