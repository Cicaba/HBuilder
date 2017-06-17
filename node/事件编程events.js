//所有能触发事件的对象都是 EventEmitter 类的实例。
//这些对象开放了一个 eventEmitter.on() 函数，允许将一个或多个函数附加到会被对象触发的命名事件上。
var even=require("events").EventEmitter;//引入事件模块,事件模块中有一个EventEmitter对象
var event=new even();					//创建了EventEmitter类的实例.(因为所有的可触发的事件对象都是EventEmitter的实例)
event.on("eventname",function(name){		//监听了一个eventname的事件
	console.log(name)
})
event.emit("eventname","小倩");				//触发eventname事件,emit方法第一个参数为 触发事件名 ,事件响应函数的参数.

/*	addListener(event, listener) 
	为指定事件添加一个监听器到监听器数组的尾部。与on等价

	on为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。 

	once为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。 
*/

/*
removeListener(event, listener)
移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。 
removeAllListeners([event])
移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
setMaxListeners(n)
默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
listeners(event)
返回指定事件的监听器数组。
emit(event, [arg1], [arg2], [...])
按监听器的注册顺序，同步地调用每个注册到名为 eventName 事件的监听器，如果事件有注册监听返回 true，否则返回 false。
*/