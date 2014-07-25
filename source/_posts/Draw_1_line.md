title: 一. 绘 制
date: 2014-07-22 13:09:10
tags: HTML5
---
### 关于绘制我们需要掌握的技能 
1. 对线条,弧形,圆,曲线及多边形描边填充等.
2. 通过设置绘图环境的属性来改变所绘图形的外观.
3. 绘制圆角矩形
4. 绘制并编辑贝塞尔曲线
5.	对2D绘制环境进行扩展,使之可以绘制虚线.
6.	使用纯色 渐变色及图案对图形进行描边及填充
<!-- more -->
***

#首先我们先来绘制一个矩形
<canvas id="canvas" width="600" height="400"></canvas>


<script type="text/javascript">
	var flag = true;
	var canvas = document.getElementById('canvas'),context= canvas.getContext('2d');
		 context.lineJoin='round',
		 context.lineWidth = 30;
		 context.font='24px Helvetica';
		 var draw = function(){
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
				var draw = function(){
					 context.lineJoin='round',
					 context.lineWidth = 30;
					 context.font='24px Helvetica';
					 context.fillText('点击擦除图形',175,40);
					 context.strokeRect(75,100,200,200);
					 context.fillRect(325,100,200,200);
				}
					 context.canvas.onmousedown = function(e){
					 	if(flag){
							context.clearRect(0,0,canvas.width,canvas.height);
							flag = false;
						}else{
							flag = true;
							draw();
						}
					 }
		&lt;/script>
	</code>
</pre>



> 该应用程序使用 strokeRect（） 方法来绘制左边的矩形，使用 fillRect（） 方法来绘制右边的矩形。当用户在 canvas 内任意处点击鼠标时，程序调用 clearRect（） 方法将整个 canvas 的内容清除。
*这里要注意的部分是 strokeRect()  和  fillRect() 的区别   一个是使用线性的绘制 一个是填充型的绘制* 
通常情况下,我们使用strokeRect都是绘制的直角的图形,但是我们可以通过提前设置属性**lineJoin**改变两条线相交时的显示效果,同样能改变线的状态我们用到的方法还有 ** lineWidth **


	


