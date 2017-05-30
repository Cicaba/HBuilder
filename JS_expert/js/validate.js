//表单插件
//************************版本1.0********************************
/*;(function($,undefined){
	jQuery.extend($.fn,{
		validate:function(){
			//获得用户的表单
			var $form=$(this);
			//定义一个开关控制表单提交
			var isform=true;
			//获得需要验证的input
			var $inputs=$form.find(":input[validate]");
			//给用户表单注册提交事件
            $form.on("submit",function(){
            	//提交前验证表单;并控制开关.
            	validateInput();
            	return isform;
			});
            function validateInput() {
				//获得每一个验证项和每一个验证类型,及input的的值
                $inputs.each(function(){
                	var $input=$(this);
                	var typevalue=$input.attr("validate");
                	var values=$input.val();
                	//每个input获取焦点时清除提示
                    $input.focus(function () {
						$(this).siblings().remove();
                    })
                    //根据每一项的类型进行不同的验证.
					var isok = validatetem($input,typevalue,values);
                    if(!isok){
                        isform=false;
					}
				})
            }
            function validatetem($input,typevalue,values) {
            	var ok=true;
				if(typevalue==="yhm"){
                    if(!values){ok=false;$input.siblings().remove();$input.after($("<span>不能为空</span>"))}
				}else if(typevalue==="mima"){
                    var mi=/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,18}/;
                    if(!mi.test(values)){
                        ok=false;$input.siblings().remove();$input.after($("<span>密码有误</span>"));
					}
				}
                else if(typevalue==="call"){
                    var cal=/^1[34578]\d{9}$/;
                    if(!cal.test(values)){
                        ok=false;$input.siblings().remove();$input.after($("<span>格式错误</span>"));
					}
                }else if(typevalue==="email"){
                    var emai=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                    if(!emai.test(values)){
                        ok=false;$input.siblings().remove();$input.after($("<span>Email格式错误</span>"));
                    }
                }
                return ok;
            }
		}
	})
})(jQuery);*/
//************************版本1.1********************************
define(["js/jquery-1.12.4.js"],function(){
	$.extend($.fn,{
		validate:function () {
			//获得用户表单
			var $form=$(this);
			//定义一个开关判断是否提交表单
			var isform=true;
			//获得需要验证的input
			var $input=$form.find(":input[validate]");
			//给表单注册提交事件
            $form.submit(function () {
            	//调用一个函数判断是否提交
                //isform=true;//提交时初始化值(修护一个bug,说明:有一个未同个以后isform的就为false)
				isvalidate();
				return isform;
            });
            function isvalidate() {
            	//拿到每一个input和每一个的值,input的类型
                $input.each(function () {
                   var $inputs=$(this);
                   var types=$inputs.attr("validate");
                   var values=$inputs.val();
                    $inputs.focus(function () {
                        isform=true;//提交时初始化值(修护一个bug,说明:有一个未同个以后isform的就为false)
						$(this).siblings().remove();
                    });
                   //一个方法根据不同的类型做不同的判断
					var isok=typejudge($inputs,types,values);
                    if(!isok) {//下面如果有一项为通过,那么就把是否提改为false.
                        isform = false;
                    }

                    console.log(isok);
                });
            }
			function typejudge($inputs,types,values) {
				if(types==="yhm"){
					//根据input的内容给以不同的的提示
					return values ? hint($inputs,"",true) : hint($inputs,"用户名不能为空",false);
				}else if(types==="mima"){
                    return values ? hint($inputs,"",true) : hint($inputs,"用户密码不能为空",false);
				}else if(types==="call"){
                    var cal=/^1[34578]\d{9}$/;
					return cal.test(values) ? hint($inputs,"",true) : hint($inputs,"不是一个有效的手机号",false);
                }else if(types==="email"){
                    var emai=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
					return emai.test(values) ? hint($inputs,"",true) : hint($inputs,"用户名不能为空",false);
                }
            }
            function hint($inputs,str,ok){
            	if(ok){
                    if($inputs.siblings().length==0){
                        $inputs.after($('<span id="errormsg" style="font-size:13px;color:gray;background:url(img/ok.png) no-repeat;padding-left:20px;margin-left:5px;">'+str+'</span>)'));
                    }
				}else{
                    if($inputs.siblings().length==0){
                        $inputs.after($('<span id="errormsg" style="font-size:13px;color:gray;background:url(img/error.png) no-repeat;padding-left:20px;margin-left:5px;">'+str+'</span>)'));
                    }
				}
                return ok;
			};

        }
	})
	return jQuery;
})