title: 三. 图 形
date: 2014-07-25 10:00:10
tags: HTML5
---

图形(Pattern)
=== 

#### 这一篇会比较有意思,因为会更加生动交互起来更加直白. ps: 而且在做游戏过程中用的最多的就是这个了。^_^**
<!--more-->
<br>在H5中除了颜色和渐变的方法，给canvas元素进行填充也支持图案的填充，图案可以是以下三种元素 image,canvas,video.
<br>创建图案的方法是 **createPattern(image,"repeat|repeat-x|repeat-y|no-repeat")** 该方法只接收两个参数： 图案本身,和一个告知browser如何进行重复的字符串指令。


#### 处于学习的用途，下面借用了一张游戏资源中的杰伦技能图片。我们就拿这张Q版图片开工。

<center>![demo](http://img.zdnet.com.cn/zhuanzai/8c/37/8c374f0365f2b529575d96ea180048ba.gif)</center>


1. 首先我们还是建立一个canvas
<pre>
	<code class=" language-markup">
	 &lt;!Doctype html>
		&lt;html>
			&lt;body>
		 		&lt;canvas id="canvas_graph_1" width="600" height="400">&lt;/canvas>
			&lt;/body>
		&lt;/html>
	</code>
</pre>	

2. 然后我们将js填写上,这里我们只是先实现简单的在画布中将图形绘制上去。

	<pre>
		<code class=" language-javascript">
				var canvas_graph_1  =  document.getElementById("canvas_graph_1"), //得到cavans对象
					 context_graph_1 =  canvas_graph_1.getConext("2d"),
					 image  = new Image();
				var fillPattern = function(repeatStr){
					context_graph_1.createPattern(repeatStr);
					context_graph_1.clearRect(0 , 0 , canvas_graph_1.width,canvas_graph_1.height);
					context_graph_1.fillStyle = pattern;
					context_graph_1.fillRect( 0 , 0 , canvas_graph_1.width,canvas_graph_1.height);
					context_graph_1.fill();
				}
				image.src = "http://img.zdnet.com.cn/zhuanzai/8c/37/8c374f0365f2b529575d96ea180048ba.gif";
				image.load = function(){
					setInterval("fillPattern('no-repeat')",20);
				}
		</code>
	</pre>	


<canvas id="canvas_graph_1" width="600" height="400"></canvas>
<script type="text/javascript">
			var canvas_graph_1  =  document.getElementById("canvas_graph_1"), //得到cavans对象
				 context_graph_1 =  canvas_graph_1.getContext("2d"),
				 image  = new Image();
			var fillPattern = function(repeatStr){
				var pattern = context_graph_1.createPattern(image,repeatStr);
				context_graph_1.clearRect(0 , 0 , canvas_graph_1.width,canvas_graph_1.height);
				context_graph_1.fillStyle = pattern;
				context_graph_1.fillRect( 0 , 0 , canvas_graph_1.width,canvas_graph_1.height);
				context_graph_2.fill();
			}
			image.src = "http://img.zdnet.com.cn/zhuanzai/8c/37/8c374f0365f2b529575d96ea180048ba.gif";
			image.onload = function(){
				setInterval("fillPattern('no-repeat')",60);
			}
</script>

>这里Canvas对GIF的支持并不是很好,必须我们写一个定时器来实现GIF的动画效果展现。


<br/>


3. 接着试试平铺的,只需要修改*no-repeat* 改成 *repeat*或者其他平铺参数
<br/>

<canvas id="canvas_graph_2" width="600" height="400"></canvas>
<script type="text/javascript">
			var canvas_graph_2  =  document.getElementById("canvas_graph_2"), //得到cavans对象
		 	    context_graph_2 =  canvas_graph_2.getContext("2d"),
				 image2  = new Image();
			var fillPattern2 = function(repeatStr){
				var pattern2 = context_graph_2.createPattern(image2,repeatStr);
				context_graph_2.clearRect(0 , 0 , canvas_graph_2.width,canvas_graph_2.height);
				context_graph_2.fillStyle = pattern2;
				context_graph_2.fillRect( 0 , 0 , canvas_graph_2.width,canvas_graph_2.height);
				context_graph_2.fill();
			}
			image2.src = "http://img.zdnet.com.cn/zhuanzai/8c/37/8c374f0365f2b529575d96ea180048ba.gif";
			image2.onload = function(){
				setInterval("fillPattern2('repeat')",60);
			}
</script>
