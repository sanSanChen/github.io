<template>
	<div id="show" class="show container">
		<div class="sidebar-nav">
			<ul class="list-group-item">
				<li v-for="(value,key) in btn"  class="list-group-item" ><a @click="btnClick" :id="key" href="javascript:;">{{key}}</a></li>
			</ul>
		</div>
		<Surround v-if="btn.Surround"></Surround>
		<Replace v-if="btn.Replace"> </Replace>
		<PassThrough v-if="btn.PassThrough"></PassThrough>
	</div>
</template>
<script type="text/javascript">

	import Surround from '../show/surround.vue';
	import Replace from '../show/replace.vue';
	import PassThrough from '../show/passthrough.vue';

	export default {
		data(){
			return {
				btn:{
					Surround:true,
					Replace:false,
					PassThrough:false
				}
			}
		},
		components:{
			Surround:Surround,
			Replace:Replace,
			PassThrough:PassThrough
		},
		methods:{
			btnClick:function(ev){
				let oEvt=ev||event;
				this.id=oEvt.target.id;
				this.btn.Surround=false;
				this.btn.Replace=false;
				this.btn.PassThrough=false;
				this.btn[this.id]=true;
			}
		}
	}
</script>
<style type="text/css">
	.show{
		text-align: center
	}
</style>