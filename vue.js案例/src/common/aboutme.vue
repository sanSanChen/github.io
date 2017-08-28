<template>
	<div id="aboutme">
		<div class="resume container">
			<h1 class="text-center">Resume</h1>
			<ul class="pull-left" v-if="lists">
				<li  v-for="list in lists">
					<a href="javascript:;">
						<img @click="change" :id='list.id' :src="list.src" height="200" width="200" alt="" :title="list.title">
					</a>
				</li>
			</ul>
			<div class="pull-left content">
				<div v-if="job" class="job">
					<h2 class="text-center">工作经历</h2>
					<p>2016.4-至今</p>
					<p>工作地点:上海徐汇区(上海地阳实业有限公司)</p>
					<p>职位:前端开发</p>

					<h2 class="text-center">技能掌握</h2>
					<p>1.熟悉W3C标准，Web语义化等有深刻理解。</p>
					<p>2.熟练掌握JQuery，熟悉React,Angular,vue等主流JS框架，熟悉npm webpack等项目管理工具。</p>
					<p>3.精通DIV+CSS页面架构和布局方式，能够熟练应用HTML5/CSS3/HTML/CSS/JavaScript技术，开发符合W3C标准的网站前端页面。</p>
					<p>4.精通Photoshop、sublime等开发软件。</p>
				</div>
				<div v-if="educational" class="educational">
					<h2 class="text-center">教育经历</h2>
					<p>2006.9-2009.6</p>
					<p>教育程度:中专</p>
					<p>毕业学校:沁阳市职业中专</p>
					<p>教育专业:机械电子一体化</p>
					<h2 class="text-center">培训经历</h2>
					<p>2015.11-2016.3</p>
					<p>培训地点：上海徐汇区(智能社)</p>
					<p>培训课程：html、css、javascript、html5、css3</p>
					<p>培训描述：更加熟练的掌握了HTML、CSS、Javscript;
					了解JavaScript面向对象原理;
					理解AJAX运作机制,熟练掌握JQuery等主流JS框架。
					对html5和css3有了初步的了解;
					</p>
				</div>
				<div v-if="personal" class="personal">
					<h2 class="text-center">自我评价</h2>
					<p>热情开朗，待人友好，为人诚实谦虚。 </p>
					<p>工作勤奋，认真负责，能吃苦耐劳，尽职尽责，有耐心。</p>
					<p>具有亲和力，平易近人，善于与人沟通。</p>
					<p>爱好:唱歌、登山、钓鱼</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				lists:[
					{
						src:"../images/gzjl.jpg",
						title:"工作经历",
						id:'job'
					},
					{
						src:"../images/xxjl.jpg",
						title:"学习经历",
						id:'educational'
					},
					{
						src:"../images/zwpj.jpg",
						title:"自我评价",
						id:'personal'
					}
				],
				job:true,
				educational:false,
				personal:false
			}
		},
		methods:{
			 change:function(ev){
				let oEvt=ev||event;
				let id=oEvt.target.id;
				this.job=false;
				this.educational=false;
				this.personal=false;
				$('.content div').css('animation','move 1s ease');
				switch(id){
					case "job":
						this.job=true;
					break;
					case "educational":
						this.educational=true;
					break;
					case "personal":
						this.personal=true;
					break;
				}
				$('.content div').on('animationend',function(){
					console.log('end')
						$('.content div').css('animation','');
				});
			}
		}
	}
</script>
<style type="text/css">
	.resume ul{
		width: 200px;
	}
	.resume ul li img{
		transition: 1s all ease;
	}
	.resume ul li:hover img{

		transform: scale(.8, 0.8)
	}
	.resume	.content{
		width:500px;
		height: 600px;
		margin-left:100px;
		font-size:22px;
		padding-top: 20px;
		overflow-x: hidden;

	}
	/* .content div{
		animation:move 1s ease forwards;
	} */
	@keyframes move{
		0%{
			transform: translate(1000px,0)
		}
		100%{
			transform: translate(0, 0)
		}
	}
</style>