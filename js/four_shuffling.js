/**
 * Created by DELL on 2019/10/9.
 */
(function(){
    var oFour_Ul = document.getElementById('four_ul');
    var oFour_Li = oFour_Ul.getElementsByTagName('li');
    var oBtn_Pre = document.getElementsByClassName('btn_pre')[0];
    var oBtn_Next = document.getElementsByClassName('btn_next')[0];
    var x = 0;

    oBtn_Pre.onclick = function(){
        goPre();
    };
    oBtn_Next.onclick = function(){
        goNext();
    };
    var goPre = function(){
        x--;
        if(x == -1){
            x = oFour_Li.length - 1;
        }
        oFour_Ul.style.left = -303*x + 'px';
    };
    var goNext = function(){
        x++;
        if(x == oFour_Li.length){
            x = 0;
        }
        oFour_Ul.style.left = -303*x + 'px';
    }
})();