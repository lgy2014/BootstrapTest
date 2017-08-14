+function($){
    var a="use strict";//1. 使用严格模式ES5支持
    //2. alert插件类及原型方法的定义
    //3. 在jQuery上定义alert插件，并重设插件构造器
    //4. 防冲突处理
    //5. 绑定触发事件
    var dismiss='{data-dismiss="alert"}';
    var Alert=function(el){
        $(el).on('click',dismiss,this.close)
    };

    Alert.prototype.close=function(e){

    };
}(window.jQuery);