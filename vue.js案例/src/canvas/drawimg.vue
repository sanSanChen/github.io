<template>
	<div class="drawImage">
		<ul v-if="lists" class="row">
			<li v-for="list in lists" class="col-xs-4">
				<img @click="drawImg" :src="list.image"  width="100%" height="100%">
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
		export default{
			data(){
				let data;
				$.ajax({
					url:"../data/images.json",
					async:false,
					type:"GET",
					success:function(json){
						if (typeof json == "string") {
							data=JSON.parse(json);
						}else{
							data=json;
						}
					}
				});
				return data;
			},
			methods:{
				drawImg:function(ev){
					console.log(this.cav)
					clearInterval(this.timer);
					let _this=this;
					let oEvt=ev||event;
					this.oCav=document.querySelectorAll('#cavbox canvas')[0];
					this.oCtx=this.oCav.getContext('2d');
					let	oImg=new Image();
					oImg.src=oEvt.target.src;

					let x=0;
					let y=0;
					oImg.onload=function(){

						$(oImg).attr('width',_this.oCav.width)

						$(oImg).attr('height',_this.oCav.height)

						let oScale=oImg.height/oImg.width;

						_this.timer=setInterval(function(){

							_this.oCtx.clearRect(0,0,_this.oCav.width,_this.oCav.height);

							_this.oCtx.drawImage(oImg,0,0,x,y,0,0,x,y);

							x++;

							y=x*oScale;

							if (x>oImg.width) {

								clearInterval(_this.timer);
								// let oImage=new Image();
								// oImage.src=_this.oCav.toDataURL();
								// $('#cavbox').append(oImage);
							}
						},1);
					};
				}
			}
		}
</script>
<style>

	.drawImage ul{
		width: 500px;
		height: 300px;
		display: inline-block;
		vertical-align: top;
		margin:0 20px;
		margin-top: -10px;
	}
	.drawImage ul li{
		padding: 10px;
	}
	.drawImage ul li img{
		cursor: pointer;
	}
</style>
