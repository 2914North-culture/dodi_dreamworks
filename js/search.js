/**
 * Created by DELL on 2019/10/8.
 */
var oSearch = document.getElementsByClassName('search')[0];
oSearch.onfocus = function(){
    //alert( typeof oSearch.value);
    //alert(oSearch.value);
     if(oSearch.value == '��������Ҫ�����Ĺؼ���'){
        oSearch.value = '';
    }
};
oSearch.onblur = function(){
    if(oSearch.value == ''){
        oSearch.value = '��������Ҫ�����Ĺؼ���';
    }
};

