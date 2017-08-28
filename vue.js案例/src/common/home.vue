<template>
	<div>
		<v-header></v-header>
		<div id="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Header from './header.vue';
	export default {
		components:{
			'v-header':Header
		}
	}
</script>
<style type="text/css">

</style>