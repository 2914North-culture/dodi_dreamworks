/**
 * Created by DELL on 2019/10/9.
 */
(function(){
    var getFocus = document.getElementsByClassName('focus');
    for(var i = 0;i < getFocus.length;i++){
        getFocus[i].onfocus = function(){
            this.style.boxShadow = '-0.8px -0.8px 0.1px 0.1px #00a0d8';
        };
        getFocus[i].onblur = function(){
            this.style.boxShadow = '-0.8px -0.8px 0.1px 0.1px #bebebe';
        }
    }
})();