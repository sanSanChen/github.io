<template>
	<div class="btn-group round">
		<button @click="btnClick" class="btn btn-defalut" id="small">Small</button>
		<button @click="btnClick" class="btn btn-defalut" id="middle">Middle</button>
		<button @click="btnClick" class="btn btn-defalut" id="big">Big</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				small:{
					strokeStyle:'red',
					lineWidth:3,
					r:20,
					speed:5
				},
				middle:{
					strokeStyle:'blue',
					lineWidth:5,
					r:50,
					speed:7
				},
				big:{
					strokeStyle:'yellow',
					lineWidth:7,
					r:90,
					speed:10
				}
			}
		},
		mounted(){
			this.oCav=document.querySelectorAll('#cavbox canvas')[0];
			this.oCtx=this.oCav.getContext('2d');
			this.timer=null;
		},
		methods:{
			btnClick(ev){
				clearInterval(this.timer);
				let oEvt=ev||event;
				let _this=this;
				this.i=0;
				this.el=oEvt.target;
				this.id=this.el.id;

				this.oCtx.clearRect(0,0,this.oCav.width,this.oCav.height);
				this.timer=setInterval(function(){
					_this.oCtx.beginPath();
					_this.oCtx.strokeStyle=_this[_this.id].strokeStyle;
					_this.oCtx.lineWidth=_this[_this.id].lineWidth;
					_this.oCtx.arc(_this.oCav.width/2,_this.oCav.height/2,_this[_this.id].r,0,_this.i/180*Math.PI);
					_this.oCtx.stroke();
					_this.i++;
					if (_this.i>360) {
						_this.oCtx.closePath();
						clearInterval(_this.timer);
					}
				},this[this.id].speed);

			}
		}
	}
</script>
<style type="text/css">
	.round{
		margin-left: 100px;
	}
</style>