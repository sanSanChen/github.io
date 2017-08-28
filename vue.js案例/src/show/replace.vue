<template>
	<div class="replace">
		<ul>
			<li v-for="list in lists"><img :src="lists[0].image" alt=""></li>
		</ul>
		<button @click="btnClick" class="btn btn-default">Replace</button>
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
						data=JSON.parse(json);
					}else{
						data=json;
					}
				}
			})
			return data;
		},
		mounted(){
			this.replace();
		},
		methods:{
			replace:function(){

					this.bReady=true;
					this.count=0;
					this.aPos=[];
					this.aLiH=$('.replace li').height();
					this.aLiW=$('.replace li').width();
					this.len=$('.replace li').length;
					this.aLi=document.querySelectorAll('.replace li');
					let _this=this;
					for(var i = 0; i < this.aLi.length; i++)
					{
						this.aPos.push({left:this.aLi[i].offsetLeft,top:this.aLi[i].offsetTop})
					}
					for(var i = 0; i < this.aLi.length; i++)
					{
						this.aLi[i].style.left=this.aPos[i].left+'px';
						this.aLi[i].style.top=this.aPos[i].top+'px';
						this.aLi[i].style.margin=0;
						this.aLi[i].style.position='absolute';
					}
			},
			btnClick:function(){

						if (!this.bReady)return;
						this.bReady=false;
						this.count++;
						this.down();
					},
			down:function(){
					let i=this.len-1;
					let _this=this;
					this.timer=setInterval(function(){
						(function(index)
						{
							$($('.replace li')[i]).animate({left:$('.replace ul').width()/2,top:$('.replace ul').height(),
								width:0,height:0},
								function()
								{
									if (index==0)
									{
										_this.up();
									}
								}
							);
						})(i);
						i--;
						if (i==-1){
							clearInterval(_this.timer);
						};
					},200)
				},
				up:function(){
					var i=this.len-1;
					let _this=this;
					this.timer=setInterval(function()
					{
						(function(index)
						{
							$($('.replace li')[i]).animate({left:_this.aPos[i].left,top:_this.aPos[i].top,
								height:_this.aLiH,width:_this.aLiW},
								function()
								{
									if (index==0)
									{
										_this.bReady=true;
									}
								}
							)
						})(i)
						i--;
						if (i==-1)clearInterval(_this.timer);
					},200);

					if (this.count==8)this.count=0;
					console.log(this.count)
					for (var j= 0; j < _this.len; j++)
					{
						$('.replace li img').attr('src',this.lists[this.count].image);
					}
				}
		}
	}
</script>
<style type="text/css">
	.replace{width:100%;margin-top: 50px;box-sizing: border-box;}
	.replace ul{width:600px;height:600px;margin:0 auto;position: relative;padding:0;}
	.replace ul li{width:180px;height:180px;float:left;margin:5px;border-radius:20px;
			overflow: hidden;box-shadow:0 0 20px;}
	.replace ul li img{height:100%;width:100%;}
	#tabPage_btn{margin:10px auto; display: block;width:100px;height:50px;font-size:20px;
				text-align:center;line-height:50px}
</style>