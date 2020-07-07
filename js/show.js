/**
 * Created by DELL on 2019/10/18.
 */
(function(){
    var oShow_Out = document.getElementsByClassName('show_out');

    for(var i = 0;i < oShow_Out.length;i++){
        oShow_Out[i].onmouseover = function(){
            var oShow = this.getElementsByClassName('show')[0];
            oShow.style.height = '30px';
            oShow.style.opacity = '1';
        };
        oShow_Out[i].onmouseout = function(){
            var oShow = this.getElementsByClassName('show')[0];
            oShow.style.height = '0';
            oShow.style.opacity = '1';
        }
    }
})();