title: 二. 颜 色
date: 2014-07-22 14:09:10
tags: HTML5
---

颜色-设置
===

> 上一篇文章中使用的是非透明颜色进行的描边或填充.在实际应用中,肯定会用到其它的颜色,这可以通过绘图环境strokeStyle与fillStyle属性来设置.我们考虑在这一篇中加入对颜色的深入,比如使用透明色.
<!--more-->

<canvas id="canvas" width="600" height="400"></canvas>
<script type="text/javascript">
	var flag = true;
	var canvas = document.getElementById('canvas'),context= canvas.getContext('2d');
		 context.lineJoin='round',
		 context.lineWidth = 30;
		 context.font='24px Helvetica';
		 var draw = function(){
		 			 context.strokeStyle='goldenrod';
					 context.fillStyle='blue';
					 context.strokeRect(75,100,200,200);
					 context.fillRect(325,100,200,200);
		 }
		 context.canvas.onmousedown = function(e){
		 		context.clearRect(0,0,canvas.width,canvas.height);
				if(flag){
					flag = false;
					context.fillText('点击绘制图形',200,40);
				}else{
					context.fillText('点击擦除图形',200,40);
					flag = true;
					draw();
				}
		 }
		 context.fillText('点击擦除图形',200,40);
		 draw();
</script>


<pre>
	<code class=" language-markup">
		 &lt;canvas id="canvas" width="600" height="400">&lt;/canvas>
		 &lt;script>
		 		var falg = true;
		 		var canvas = document.getElementById('canvas'),context= canvas.getContext('2d');
				 context.lineJoin='round',
				 context.lineWidth = 30;
				 context.font='24px Helvetica';
				var draw = function(){
					 context.strokeStyle='goldenrod';
					 context.fillStyle='blue';
					 context.strokeRect(75,100,200,200);
					 context.fillRect(325,100,200,200);
				}
					 context.canvas.onmousedown = function(e){
					 		context.clearRect(0,0,canvas.width,canvas.height);
					 	if(flag){
							context.fillText('点击绘制图形',200,40);
							flag = false;
						}else{
							context.fillText('点击擦除图形',200,40);
							flag = true;
							draw();
						}
					 }
				 	context.fillText('点击擦除图形',200,40);
		 			draw();	
		&lt;/script>
	</code>
</pre>

*目前我们的代码和上一篇几乎没有变化,唯一的变化是进行了颜色的修改,比如在线状和填充部分使用了 __strokeStyle__ 和 __fillStyle__ 来 分别设置了颜色 这个属性接受字符型的颜色串 我在这里分别将他们设置成了屎黄色和深蓝*

- - -


颜色-渐变
===

__上文中我们知道了设置画笔和填充的方法,现在我们开始进行颜色的Liner和Radial(线性与放射)渐变.__

__ Next!我们先看线性渐变 __

<canvas id="canvas_gradiend" width="600" height="400"></canvas>
<script type="text/javascript">
			  var gradiend_falg = true;
			  var gradiend_canvas = document.getElementById('canvas_gradiend'),
			  		gradiend_context= gradiend_canvas.getContext('2d'),
					gradiend = gradiend_context.createLinearGradient(0,0,gradiend_canvas.width,gradiend_canvas.height);
					gradiend_context.font='24px Helvetica';
					gradiend.addColorStop(0,'blue');
					gradiend.addColorStop(0.15,'white');
					gradiend.addColorStop(0.5,'purple');
					gradiend.addColorStop(0.75,'red');
					gradiend.addColorStop(1,'yellow');

			 var gradiend_draw = function(){
					gradiend_context.fillStyle=gradiend; 
					gradiend_context.fillRect(0,0,gradiend_canvas.width,gradiend_canvas.height);
			 }
					gradiend_context.canvas.onmousedown = function(e){
						 gradiend_context.clearRect(0, 0, gradiend_canvas.width, gradiend_canvas.height);
						 if(gradiend_falg){
						 	 gradiend_context.fillStyle="black"; 
							 gradiend_context.fillText('点击绘制图形',200,40);
							 gradiend_falg = false;
						}else{
							 gradiend_falg = true;
							 gradiend_draw();
							 gradiend_context.fillStyle="white"; 
							 gradiend_context.fillText('点击擦除图形',200,40);
						}
					}
					gradiend_draw();    
					gradiend_context.fillStyle="white"; 
					gradiend_context.fillText('点击擦除图形',200,40);
</script>


<pre>
	<code class=" language-markup">
		 &lt;canvas id="canvas" width="600" height="400">&lt;/canvas>
		 &lt;script>
		 		var falg = true;
		 		var canvas = document.getElementById('canvas'),context= canvas.getContext('2d'),gradiend = context.createLinearGradient(0,0,canvas.width,0);
					 context.font='24px Helvetica';
					 gradiend.addColorStop(0,'blue');
					 gradiend.addColorStop(0.25,'white');
					 gradiend.addColorStop(0.5,'purple');
					 gradiend.addColorStop(0.75,'red');
					 gradiend.addColorStop(1,'yellow');
					 
				var draw = function(){
					 context.fillStyle=gradiend;
					 context.fillRect(0,0,canvas.width,canvas,height);
				}
					 context.canvas.onmousedown = function(e){
					 		context.clearRect(0,0,canvas.width,canvas.height);
					 	if(flag){
							context.fillText('点击绘制图形',175,40);
							flag = false;
						}else{
							context.fillText('点击擦除图形',200,40);
							flag = true;
							draw();
						}
					 }
				 	context.fillText('点击擦除图形',200,40);
		 			draw();	
		&lt;/script>
	</code>
</pre>

> 这是一个简单的线性渐变,通过调用context封装好的方法 __createLinearGradient(x,y,width,height)__ 来生成一个线性渐变对象 当我们拿到了__createLinearGradient__ 对象后 我们通过 __addColorStop__ 方法添加__"颜色停止点"__, 它接受两个参数  addColorStop(double,string)  分别是 double精度的 0 ~ 1.0 之间代表颜色停止在一条线上的位置点._(ps:我们可以假想一条线的0 ~ 100% 的距离 例如设置为0.8 则可以假设在这条线的 80%的位置停止)_ 后面是一个字符类型的[DOMString](http://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMString)的CSS3颜色字符串.

####下面我稍微修改下我们的程序 来展现出4种不同的线性渐变
<canvas id="canvas_gradiend_four" width="600" height="400"></canvas>
<script type="text/javascript">
			  var gradiend_four_falg = true;
			  var gradiend_canvas_four = document.getElementById('canvas_gradiend_four'),
			  		gradiend_context_four= gradiend_canvas_four.getContext('2d');
					
			  var getLinearGradient = function(width,height){
			 		var tmp_gradiend = gradiend_context_four.createLinearGradient(0,0,width,height);
					tmp_gradiend.addColorStop(0,'blue');
					tmp_gradiend.addColorStop(0.15,'white');
					tmp_gradiend.addColorStop(0.5,'purple');
					tmp_gradiend.addColorStop(0.75,'red');
					tmp_gradiend.addColorStop(1,'yellow');
					return tmp_gradiend;
			  }
			  
			  var gradiend_draw_four = function(){
			  		var width = 300,height =200;
					gradiend_context_four.fillStyle=getLinearGradient(0,height/2); 
					gradiend_context_four.fillRect(width,height,width,height);
					
					
					
			  }
					gradiend_draw_four();    
</script>
