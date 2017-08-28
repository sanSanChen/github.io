<template>
	<div class="container static">
		<h3 class="text-center">Static</h3>
		<ul v-if="lists" class="row">
			<li v-for="(list,index) in lists" class="col-xs-4">
				<a :href="list.site" target='_blank'>
					<img :src="list.image" width="100%" height="100%" :alt="index" :title="list.title">
				</a>
			</li>
		</ul>
	</div>
</template>

<script>

	export default {

		data(){
			let data;
			$.ajax(
			{
				url:'../data/images.json',
				async:false,
				type:'GET',
				success:function(json){

					if (typeof json =="string") {

						data=JSON.parse(json);
					}
					else{

						data=json;
					}

				}
			});
			return data;
		}
	}
</script>
<style type="text/css">
	.static li{

		padding: 10px;
	}
	.static li:nth-child(1),.static li:nth-child(4),.static li:nth-child(7){

		transform:translate(-1000px, 0) scale(0, 0);

		animation:anim 2s ease forwards;
	}

	.static li:nth-child(2),.static li:nth-child(5),.static li:nth-child(8){

		transform:translate(0, -1000px) scale(0, 0);

		animation:anim 3s ease forwards;
	}
	.static li:nth-child(3),.static li:nth-child(6),.static li:nth-child(9){

		transform:translate(1000px, 0) scale(0, 0);

		animation:anim 2s ease forwards;
	}
	.static li img{
		transition: 1s all ease;
	}
	.static li:hover img{
		transform: scale(.8,.8);
	}
	@keyframes anim{
		30%{
			transform:translate(0, 0) scale(1, 1);
		}
		60%{
			transform:rotate(0deg);
		}
		80%{
			transform:rotate(360deg);
		}
		90%{
			transform:scale(0.5,0.5);
		}
		100%{
			transform:scale(1,1);
		}
	}
	.static ul{
		width: 800px;
		margin: 0 auto;
	}
</style>