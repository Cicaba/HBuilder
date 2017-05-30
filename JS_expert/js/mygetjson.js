//写一个jQuery插件点击按钮时获得一个远程的json并处理成json对象
/*;(function($, undefind) {
	$.extend({
		mygetjson: function(myurl,callBack) {
				if($("#if").length == 0) {
					$("body").append($("<iframe id='if' src="+myurl+"></iframe>"));
					$("#if").css("display","none");
				};
				//给iframe添加加载完毕事件
				$("#if").load(function() {
					var data =$(this.contentDocument).find("pre").text(); 
					jsons = $.parseJSON(data);
					callBack(jsons);//回调函数
				});
		}
	});
})(jQuery);*/
//************************************************************************************
define(["js/jquery-1.12.4.js"],function () {
    $.extend({
        mygetjson: function(myurl,callBack) {
            if($("#if").length == 0) {
                $("body").append($("<iframe id='if' src="+myurl+"></iframe>"));
                $("#if").css("display","none");
            };
            //给iframe添加加载完毕事件
            $("#if").load(function() {
                var data =$(this.contentDocument).find("pre").text();
                jsons = $.parseJSON(data);
                callBack(jsons);//回调函数
            });
        }
    });
	return jQuery;
})