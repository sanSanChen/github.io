<template>
	<header class="navbar navbar-inverse navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header nav-title ">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a  class="navbar-brand" href="#">My blog</a>
			</div>
			<div class="collapse navbar-collapse navbar-right is-collapse">
				<ul class="nav navbar-nav">
					<li>
						<router-link to="/static">
							<span >Static</span>
						</router-link>
					</li>
					<li>
						<router-link to="/canvas">
							<span>Canvas</span>
						</router-link>
					</li>
					<li class="dropdown">
						<router-link  to="/show">
							<span>Show</span>
						</router-link>
					</li>
					<li>
						<router-link to="/aboutme">
							<span >AboutMe</span>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</header>
</template>
<style type="text/css">

</style>