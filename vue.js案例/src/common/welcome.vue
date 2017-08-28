<template>
	<div class="container welcome text-center">
		Welcome to my blog!
	</div>
</template>
<style type="text/css">
	.welcome{
		height: 600px;
		position: relative;
		font-size: 100px;
		line-height: 600px;
		text-shadow: 0 0 20px #c00;
		animation: bling 5s ease infinite;
		/* color: #c00; */
	}
	@keyframes bling{
		0%{
			text-shadow: 0 0 20px yellow;
		}
		25%{
			text-shadow: 0 0 20px red;
		}
		50%{
			text-shadow: 0 0 20px pink;
		}
		75%{
			text-shadow: 0 0 20px blue;
		}
		100%{
			text-shadow: 0 0 20px yellow;
		}
	}
</style>