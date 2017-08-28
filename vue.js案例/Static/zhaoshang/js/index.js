window.onload = function() {
	//点击开始巡山播放音乐
	$('.start').on('touchstart', function() {
		$("audio")[0].play();
		$('.page1').fadeOut('slow', function() {
			$('.page2').fadeIn('slow');
		});
	});
	//确认提交领奖信息
	$('.qrtj').on('touchstart', function() {
		var xm = $('.xm').val();
		var hm = $('.hm').val();
		if (xm && hm) {
			$('.page5').fadeOut('slow', function() {
				$('.page6').fadeIn('slow',function(){
					setTimeout(function(){
						$('.fx').fadeIn();
					},2000)
				});
			});
		}else{
			alert('请正确填写领奖信息！');
		}
	});
	//限制输入数字
	$('.hm').on('input',function(){
		if (isNaN($('.hm').val())) {
			$('.hm').val('');
		}
	});
	//页面跳转
	$('.ans').on('touchstart', function() {
		var myId = $(this).attr('myId');
		switch (myId) {
			case 'page2_a':
				$('.result').css('background-image', 'url(images/2cuo.png)');
				$('.mc_btn').css('background-image', 'url(images/nwxb.png)');
				$('.mc_btn').on('touchstart', function() {
					$('.mc_btn').off();
					$('.result').css('background-image', 'url(images/2dui.png)');
					$('.mc_btn').css('background-image', 'url(images/jxxs.png)');
					$('.mc_btn').on('touchstart', function() {
						$('.mc_btn').off();
						$('.mc').fadeOut();
						$('.page2').fadeOut('slow', function() {
							$('.page3').fadeIn('slow');
						});
					});
				});
				$('.mc').fadeIn();
				break;
			case 'page2_b':
				$('.result').css('background-image', 'url(images/2dui.png)');
				$('.mc_btn').css('background-image', 'url(images/jxxs.png)');
				$('.mc_btn').on('touchstart', function() {
					$('.mc_btn').off();
					$('.mc').fadeOut();
					$('.page2').fadeOut('slow', function() {
						$('.page3').fadeIn('slow');
					});
				});
				$('.mc').fadeIn();
				break;
			case 'page3_a':
				$('.result').css('background-image', 'url(images/3cuo.png)');
				$('.mc_btn').css('background-image', 'url(images/gdcxb.png)');
				$('.mc_btn').on('touchstart', function() {
					$('.mc_btn').off();
					$('.result').css('background-image', 'url(images/3dui.png)');
					$('.mc_btn').css('background-image', 'url(images/jxxs.png)');
					$('.mc_btn').on('touchstart', function() {
						$('.mc_btn').off();
						$('.mc').fadeOut();
						$('.page3').fadeOut('slow', function() {
							$('.page4').fadeIn('slow');
						});
					});
				});
				$('.mc').fadeIn();
				break;
			case 'page3_b':
				$('.result').css('background-image', 'url(images/3dui.png)');
				$('.mc_btn').css('background-image', 'url(images/jxxs.png)');
				$('.mc_btn').on('touchstart', function() {
					$('.mc_btn').off();
					$('.mc').fadeOut();
					$('.page3').fadeOut('slow', function() {
						$('.page4').fadeIn('slow');
					});
				});
				$('.mc').fadeIn();
				break;
			case 'page4_a':
				$('.result').css('background-image', 'url(images/4cuo.png)');
				$('.mc_btn').css('background-image', 'url(images/qsq.png)');
				$('.mc_btn').on('touchstart', function() {
					$('.mc_btn').off();
					$('.result').css('background-image', 'url(images/4dui.png)');
					$('.mc_btn').css('background-image', 'url(images/xia.png)');
					$('.mc_btn').on('touchstart', function() {
						$('.mc_btn').off();
						$('.result').css('background-image', 'url(images/4dui2.png)');
						$('.mc_btn').css('background-image', 'url(images/qlj.png)');
						$('.mc_btn').on('touchstart', function() {
							$('.mc_btn').off();
							$('.mc').fadeOut();
							$('.page4').fadeOut('slow', function() {
								$('.page5').fadeIn('slow');
							});
						});
					});
				});
				$('.mc').fadeIn();
				break;
			case 'page4_b':
				$('.result').css('background-image', 'url(images/4dui.png)');
				$('.mc_btn').css({
					'background-image': 'url(images/xia.png)',
				}).addClass('on');
				$('.mc_btn').on('touchstart', function() {
					$('.mc_btn').off();
					$('.mc_btn').removeClass('on');
					$('.result').css('background-image', 'url(images/4dui2.png)');
					$('.mc_btn').css('background-image', 'url(images/qlj.png)');
					$('.mc_btn').on('touchstart', function() {
						$('.mc_btn').off();
						$('.mc').fadeOut();
						$('.page4').fadeOut('slow', function() {
							$('.page5').fadeIn('slow');
						});
					});
				});
				$('.mc').fadeIn();
				break;
		}
	});
};