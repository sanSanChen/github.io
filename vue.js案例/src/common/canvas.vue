<template>
	<div id="cavbox" class="container">
		<div class="sidebar-nav">
			<ul class="list-group-item">
				<li v-for="(value,key) in btn"  class="text-center list-group-item" ><a @click="btnClick" :id="key" href="javascript:;">{{key}}</a></li>
			</ul>
		</div>
		<drawimg v-if="btn.drawImage"></drawimg>
		<stroketext  v-if='btn.strokeText'></stroketext>
		<v-round v-if="btn.round"></v-round>
		<canvas style="display:inline-block;vertical-align:top ;border:2px solid #ccc;" height="333" width="500"></canvas>
		<button @click="clearRect" style="vertical-align:bottom;" class="btn clearCav">清除画布</button>
	</div>
</template>
<script type="text/javascript">
	import drawImg from  '../canvas/drawimg.vue';
	import strokeText from '../canvas/stroketext.vue';
	import round from '../canvas/round.vue';
	export default {
		data(){
			return {
				btn:{
					drawImage:false,
					strokeText:false,
					round:true
				}
			}
		},
		components:{
			drawimg:drawImg,
			stroketext:strokeText,
			'v-round':round
		},
		mounted(){
			this.init();
		},
		methods:{
			init(){
				this.oCav=document.querySelectorAll('#cavbox canvas')[0];
				this.oCtx=this.oCav.getContext('2d');
			},
			clearRect(){
				// this.Ipt=document.querySelectorAll('#cavbox input')[0];
				// if (this.Ipt) {
				// 	this.Ipt.value="";
				// }
				this.oCtx.clearRect(0,0,this.oCav.width,this.oCav.height);
			},
			btnClick(ev){
				this.oCtx.clearRect(0,0,this.oCav.width,this.oCav.height);
				let oEvt=ev||event;
				this.id=oEvt.target.id;
				this.btn.drawImage=false;
				this.btn.strokeText=false;
				this.btn.round=false;
				this.btn[this.id]=true;
			}
		}
	}
</script>
<style type="text/css">
	#cavbox{
		margin-top: 150px;
	}
	#cavbox div{
		display: inline-block;
	}
</style>