/**
 * Created by DELL on 2019/10/8.
 */
var oSearch = document.getElementsByClassName('search')[0];
oSearch.onfocus = function(){
    //alert( typeof oSearch.value);
    //alert(oSearch.value);
     if(oSearch.value == '请输入你要搜索的关键字'){
        oSearch.value = '';
    }
};
oSearch.onblur = function(){
    if(oSearch.value == ''){
        oSearch.value = '请输入你要搜索的关键字';
    }
};

