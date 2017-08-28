$('#jp_btn').on('touchend', function() {
	$('#layer').slideDown(function() {
		$('.layer').hide();
		$('#jplb').show();
	});
});
$('#my_btn').on('touchend', function() {
	$('#layer').slideDown(function() {
		$('.layer').hide();
		$('#wdjp').show();
	});
});
$('#rule_btn').on('touchend', function() {
	$('#layer').slideDown(function() {
		$('.layer').hide();
		$('#gzsm').show();
	});
});
$('.close').on('touchend', function() {
	$('#layer').slideUp(function() {
		$('.layer').hide();
	});
});

$(".eggbtn").on('touchend',function() {
	eggClick($(this));

});
$('.eggbtn').each(function(){
	this.onmouseover=function(){
		$(".hammer").css({
			"top": $(this).position().top - 5,
			"left": $(this).position().left +65
		});
	}
});
function eggClick(obj) {
	var _this = obj;
	if (_this.hasClass("open")) {
		// if (confirm("蛋都碎了，别砸了！")) {
		// 	return false;
		// }
		return false;
	}
	// $.getJSON('prize.php?act=prize&callback=?', function(json) {
		var json =award();
		//console.log(json);
		$(".hammer").css({
			"top": _this.position().top - 55,
			"left": _this.position().left + 185
		});
		$(".hammer").animate({
			"top": _this.position().top - 25,
			"left": _this.position().left + 125
		}, 30, function() {
			$('.eggbtn').addClass('open');
			_this.addClass("curr"); //蛋碎效果
			//_this.find("sup").show(); //金花四溅
			$(".hammer").hide();
			$("#result").empty();
			$('.resultTip').css({
				display: 'block',
				top: '50px',
				opacity: 0
			}).animate({
				top: '-10px',
				opacity: 1
			}, 300, function() {
				if (typeof(json) == 'object') {
					if (json.award_type == '200') {
						$("#result").html("谢谢参与!");
					} else {
						$("#result").html("恭喜，您中得" + json.award_name + "!");
					}

					var chance = parseInt($('#chance').html());
					chance = chance - 1;
					if (chance < 0) {
						chance = 0;
					}
					$('#chance').html(chance);
				} else {
					if (json == 'nothuodong') {
						$("#result").html("没有这个活动!");
					} else if (json == 'notstart') {
						$("#result").html("活动还未开始喔!");

					} else if (json == 'is_end') {
						$("#result").html("活动已经结束!");

					} else if (json == 'nocheck') {
						$("#result").html("未登陆!");

					} else if (json == 'nochance') {
						$("#result").html("没抽奖机会!");

					} else {
						$("#result").html("未登陆或网络错误!");

					}
				}

			});
		});
	// });
}
//把时间戳转成日期格式
function getTimeFormat(s) {
	var data = new Date(parseInt(s * 1000)); // s 单位：秒
	var h = data.getHours();
	if (h < 10) {
		h = '0' + h;
	}
	var m = data.getMinutes();
	if (m < 10) {
		m = '0' + m;
	}
	var s = data.getSeconds();
	if (s < 10) {
		s = '0' + s;
	}
	return data.getFullYear() + '-' + (data.getMonth() + 1) + "-" + data.getDate() + " " + h + ":" + m + ":" + s;
}
console.log(getTimeFormat(1484971200));