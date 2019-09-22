

var url = {
    login:function(userName,password,callback){
        show({
            url:'http://localhost:8000/admin/login',
            type:'post',
            data:{user_name:userName,password:password},
            success:function(res){
              callback(res);
            }
          })
    },

    logout:function(callback){
        show({
            url:'http://localhost:8000/admin/logout',
            type:'post',
            success:function(res){
                callback(res);
            }
        })
    },
    
    getuser:function(callback){
        show({
            url:'http://localhost:8000/admin/getuser',
            type:'get',
            success:function(res){
                callback(res);
            }
        })
    }
}