//拿到用户给的参数
/*;(function($){
	$.extend($.fn,{
		mytable:function(url){
			//拿到用户选定的表格
			var $table = this;
			//拿到用户的url
			var myurl=url.url;
			//{把数据填写进table里}
				//1.获得远程数据
			loadData($table,myurl);
			function loadData($table,myurl){
				//调用获取插件
				$.mygetjson(myurl,function(data){
					//console.log(data.datas);
					//调用一个方法把获得的数据填写进创建的表格.
					writeData($table,data.datas);
				});
			}
				//2.写一个方法把获得的数据填写进创建的表格.
			function writeData($table,data){
				//console.log(data,$table);
				//根据数据创建表格并添加到指定位置的方法.
				$.each(data,function(i,json_obj) {
					//console.log(this);
					//新建一个表格行
					var $tr = $("<tr></tr>");
					//根据表头创建列
					$table.find("thead th").each(function(){
						//分析:填写数据
								//数据要和表头建立联系,那么我门就给表头添加属性:值和数据对象的属性关联的
						var att = $(this).attr("attr");//获得属性值
						var val = json_obj[att]||"";// 从左到右返回第一个有效的值
						//创建列再把列添加到行
						var $td=$("<td>"+val+"</td>");
						$tr.append($td);
					});
					//把表格行添加到指定位置.
					$table.find("tbody").append($tr);
				});
			}
		}
	});
})(jQuery);*/
//*************************************************************************************
define(["js/jquery-1.12.4.js","js/mygetjson.js"],function () {
    $.extend($.fn,{
        mytable:function(url){
            //拿到用户选定的表格
            var $table = this;
            //拿到用户的url
            var myurl=url.url;
            //{把数据填写进table里}
            //1.获得远程数据
            loadData($table,myurl);
            function loadData($table,myurl){
                //调用获取插件
                $.mygetjson(myurl,function(data){
                    //console.log(data.datas);
                    //调用一个方法把获得的数据填写进创建的表格.
                    writeData($table,data.datas);
                });
            }
            //2.写一个方法把获得的数据填写进创建的表格.
            function writeData($table,data){
                //console.log(data,$table);
                //根据数据创建表格并添加到指定位置的方法.
                $.each(data,function(i,json_obj) {
                    //console.log(this);
                    //新建一个表格行
                    var $tr = $("<tr></tr>");
                    //根据表头创建列
                    $table.find("thead th").each(function(){
                        //分析:填写数据
                        //数据要和表头建立联系,那么我门就给表头添加属性:值和数据对象的属性关联的
                        var att = $(this).attr("attr");//获得属性值
                        var val = json_obj[att]||"";// 从左到右返回第一个有效的值
                        //创建列再把列添加到行
                        var $td=$("<td>"+val+"</td>");
                        $tr.append($td);
                    });
                    //把表格行添加到指定位置.
                    $table.find("tbody").append($tr);
                });
            }
        }
    });
    return $;
})
