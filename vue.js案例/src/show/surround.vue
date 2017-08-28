<template>
	<div id="surRound" class="surRound container">
		<ul v-if="lists">
			<li v-for="list in lists">
				<img :src="list.image" alt="">
			</li>
		</ul>
		<button @click="open" class="btn-lg btn btn-default">{{text}}</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			let data;
			$.ajax({
				url:'../data/images.json',
				async:false,
				type:'GET',
				success:function(json){
					if (typeof json == 'string') {
						data=JSON.parse(json);
					}else{
						data=json;
					}
				}
			});
			data.text='open';
			data.surRoundR=true;
			return data;
		},
		components:{

		},
		methods:{
			surRound()
			{
				this.num=350;
				this.len=$('.surRound ul li').length;
				let _this=this;
				$('.surRound ul li').each(function()
				{
					$(this).css('transition',"1s all ease " + (_this.len-$(this).index())*200 +"ms");
					$(this).css("transform","rotateY("+360/_this.len*$(this).index()+"deg) translateZ("+_this.num+"px)");
				})
			},
			open(){
				if (this.surRoundR)
				{
					this.text='close';
					this.surRound();
					this.surRoundR=false;
				}
				else
				{
					this.text='open';
					$('.surRound ul li').each(function()
					{
						$(this).css('transition',"1s all ease " + $(this).index()*200 +"ms");
						$(this).css('transform',"rotateY(0deg) translateZ(0)");
					})
					this.surRoundR=true;
				}
				this.surRoundDrag();
			},
			surRoundDrag(){
				this.x=150;
				this.y=0;
				this.speedX = 0;
				this.speedY = 0;
				this.lastX = 0;
				this.lastY = 0;
				this.surRound_timer = null;
				this.count = 0;
				$('.surRound ul').on('mousedown',this.mousedown);
			},
			mousedown(ev)
			{
				clearInterval(this.surRound_timer);
				this.disX=ev.pageX-this.y;
				this.disY=ev.pageY-this.x;
				document.onmousemove=this.mousemove;
				document.onmouseup=this.mouseup;
				return false;
			},
			mousemove(ev)
			{
				this.y=ev.pageX-this.disX;
				this.x=ev.pageY-this.disY;
				if(this.x > 600)
				{
					this.x = 600;
				}
				else if(this.x < -600)
				{
					this.x = -600;
				}
				this.speedX=this.x-this.lastX;
				this.speedY=this.y-this.lastY;

				this.lastX=this.x;
				this.lastY=this.y;
				$('.surRound ul').css('transform',"perspective(800px) rotateX("+-this.x/10+"deg) rotateY("+this.y/10+"deg)");
			},
			mouseup(ev)
			{
				document.onmousemove=document.onmouseup=null;
				clearInterval(this.surRound_timer);
				this.surRound_timer=setInterval(this.timer,30);
			},
			timer()
			{
				this.x+=this.speedX;
				this.y+=this.speedY;
				this.speedX*=0.95;
				this.speedY*=0.95;

				if(Math.abs(this.speedX) < 1)
				{
					this.speedX = 0;
				}
				if(Math.abs(this.speedY) < 1)
				{
					this.speedY = 0;
				}
				if(this.speedX == 0&& this.speedY == 0)
				{
					clearInterval(this.surRound_timer);
				}
				$('.surRound ul').css('transform','perspective(800px) rotateX('+-this.x/10+'deg) rotateY('+this.y/10+'deg)')
			}
		}
	}

</script>
<style type="text/css">
	.surRound{
		width:100%;
		margin-top: 50px;
		box-sizing: border-box;
	}
	.surRound button{
		margin:250px auto 0;
		display:block;
		box-shadow: 0 0 10px;
		width: 77px;
		height:44px;
	}
	.surRound ul{
				width:165px;
				height:250px;margin:0 auto;position: relative;
				transform-style:preserve-3d;
				transform:perspective(800px) rotateX(-15deg) rotateY(0deg);
			}
	.surRound ul li{
		position:absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		transition:1s all ease;
		border-radius:10px;
	 	overflow:hidden;
	 	line-height:250px;
	 	box-shadow: 0 0 10px #fff;
	 }
	.surRound ul li img{
		width:100%;
		height:100%;
	}
</style>