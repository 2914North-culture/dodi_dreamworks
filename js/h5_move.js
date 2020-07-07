/**
 * Created by DELL on 2019/10/10.
 */
(function(){
    var oLi = document.getElementById('left_img_ul').getElementsByTagName('li');

    for(var i = 0;i < oLi.length;i++){
        //oLi[i].index = i;  //此时i = 1,2,3...
        oLi[i].onmouseover = function(){
            //alert(i);  此时i = 12；
            var oH5 = this.getElementsByClassName('prompt_img')[0];
            oH5.style.height = '30px';
            oH5.style.opacity = '1';
        };
        oLi[i].onmouseout = function(){
            var oH5 = this.getElementsByClassName('prompt_img')[0];
            //oH5.style.width = '147px';
            oH5.style.height = '0';
            oH5.style.opacity = '0';
        }
    }
})();