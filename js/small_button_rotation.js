/**
 * Created by DELL on 2019/10/7.
 */
(function(){
    var oMore = document.getElementsByClassName('more');
    //var allow =true;
    var num = 0;
    for(var i = 0;i < oMore.length;i++){
        oMore[i].onclick = function(){
            num++;
            var oMore_Triangle = this.getElementsByClassName('triangle')[0];
            var child_Ul = this.getElementsByClassName('more_menu')[0];
            //var child_Li = child_Ul.getElementsByTagName('li');
            //var child_Text = child_Ul.getElementsByClassName('a');
            if(num%2 != 0){
                oMore_Triangle.style.transform = 'rotate(0deg)';    //第一次值赋值，不判断不走else避免会有一次事件空白
            }
            else{
                oMore_Triangle.style.transform = 'rotate(90deg)';
            }
            if(oMore_Triangle.style.transform == 'rotate(0deg)'){
                oMore_Triangle.style.transform = 'rotate(90deg)';
                //child_Ul.style.height = '69px';
                child_Ul.style.display = 'block';
            }
            else{
                oMore_Triangle.style.transform = 'rotate(0deg)';
                child_Ul.style.display = 'none';
            }
        };
    }
})();