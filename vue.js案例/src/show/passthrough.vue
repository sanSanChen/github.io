<template>
	<div class="passthrough container">
		<ul>
			<li class="col-xs-4" v-for="list in lists">
				<span></span>
				<img :src="list.image" width="100%" height="100%">
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			let data;
			$.ajax({
				url:'../data/images.json',
				type:'GET',
				async:false,
				success:function(json){
					if (typeof json == 'string') {
						data=JSON.parse(josn);
					}else{
						data=json;
					}
				}
			});
			return data;
		},
		mounted(){
			this.passthrough()
		},
		methods:{
			passthrough:function(){
				let _this=this;
				$('.passthrough li').each(function()
				{
					_this.lagou($(this))
				})
			},
			lagou:function (obj){

				var oSpan=obj.children().eq(0);

				let _this=this;

				obj.on('mouseenter',function(ev)
				{
					var n = _this.getDir(obj,ev);
					switch(n)
					{
						case 0:
							oSpan.css({left: "-290px",top: "0"})
							break;
						case 1:
							oSpan.css({left: "0",top: "290px"})
							break;
						case 2:
						oSpan.css({left: "290px",top: "0"})
							break;
						case 3:
						oSpan.css({left: "0",top: "-290px"})
							break;
					}
					$(oSpan).stop().animate({left:0,top:0});
				});

				obj.on('mouseleave',function(ev)
				{
					var n = _this.getDir(obj,ev);
					console.log(n)
					switch(n)
					{
						case 0:
							oSpan.stop().animate({left:"-290px",top:0});
							break;
						case 1:
							oSpan.stop().animate({left:0,top:"290px"});
							break;
						case 2:
							oSpan.stop().animate({left:"290px",top:0});
							break;
						case 3:
							oSpan.stop().animate({left:0,top:"-290px"});
							break;
					}
				});
			},
			getDir:function(obj,ev){

				var x = ev.pageX - (obj.offset().left + obj.width()/2);
				var y = obj.offset().top + obj.height()/2 - ev.pageY;

				return Math.round((this.a2d(Math.atan2(y,x))+180)/90)%4;
				//Math.atan2(y,x)弧度；
				//a2d(Math.atan2(y,x)转角度;
				//a2d(Math.atan2(y,x))+180----把正负180度转成0-360度;
				//a2d(Math.atan2(y,x))+180)/90 比例缩小90倍0-4;
				//Math.round((a2d(Math.atan2(y,x))+180)/90)四舍五入;
				//Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
			},
			a2d:function a2d(n){

				return n*180/Math.PI;
			}
		}
	}
</script>
<style type="text/css">
	.passthrough{
		margin-top:50px;
		width: 900px;
		height: 600px;
	}
	.passthrough li{
		margin-bottom: 20px;
	}
	.passthrough li{
			position: relative;
			overflow: hidden;
	}
	.passthrough li img{width:100%;height:100%;}
	.passthrough li span{
		 position:absolute;left:-290px;top:0;width:100%;font-size:30px;line-height:200px;
			text-align: center;color:#000;
			 height:100%; background:pink;opacity:0.8;display:block;
	}
</style>