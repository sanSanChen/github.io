<template>
	<div class="strokeText">
		<input @input="change" v-model="text" type="text" placeholder="写入canvas内容">
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				text:''
			}
		},
		mounted(){
			this.oCav=document.querySelectorAll('#cavbox canvas')[0];
			this.oCtx=this.oCav.getContext('2d');
		},
		methods:{
			change(ev){
				this.oCtx.clearRect(0,0,this.oCav.width,this.oCav.height);
				this.arr=this.text.split('');
				this.y=30;
				this.x=10;
				this.k=0;
				this.oCtx.beginPath();
				this.oCtx.font="20px 楷体";
				this.oCtx.strokeStyle="#fff";
				this.oCtx.shadowOffsetX=0;
				this.oCtx.shadowOffsetY=0;
				this.oCtx.shadowColor="#c00";
				this.oCtx.shadowBlur="20";
				for (var i = 0; i < this.arr.length; i++) {

					if (i%20==0) {
						this.y+=30;
						this.x=10;
						this.k=0;
					}
					this.oCtx.strokeText(this.arr[i],this.x+20*this.k,this.y);
					this.oCtx.fillText(this.arr[i],this.x+20*this.k,this.y);
					this.k++;
				}
				this.oCtx.stroke();
				this.oCtx.closePath();
			}
		}
	}
</script>
<style type="text/css">
	.strokeText input{
		vertical-align: top;
		margin:0 100px;
		width: 300px;
		height: 30px;
		border-radius: 5px;
		box-shadow: 0 0 20px #c00;
	}
</style>