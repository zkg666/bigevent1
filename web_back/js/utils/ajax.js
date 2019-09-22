function change(data){
    //封装字符串
    var arr = [];
    for(key in data){
        arr.push(key+'='+data[key]);
    }
    return arr.join('&');
}
function show(obj){
    //获取每个元素
    var url = obj.url;
    var type = obj.type;
    var data = obj.data;
    var success = obj.success;
    //转化
    var dt = change(data);
    if(type == 'get'){
        url = url+'?'+dt;
    }
    //ajax请求
    var xhr = new XMLHttpRequest();
    xhr.open(type,url);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            success(JSON.parse(xhr.responseText));
        }
    }
    if(type == 'post'){
        xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.send(dt);
    }else{
        xhr.send();
    }   
}