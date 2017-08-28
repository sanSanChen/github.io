function award() {
	var type = draw();
	var arrinfo = {
		200: '谢谢参与',
		201: 'iphone6s一部',
		202: '美女一枚',
		203: '茶叶蛋2只',
		204: '数码相机'
	};
	var res = {
		award_type: type,
		id: '0',
		award_name: arrinfo[type]
	}
	return res;
}
function draw() {
	//中奖几率设置
	var chance = {
		200: 88,
		201: 1,
		202: 5,
		203: 5,
		204: 1
	};
	var max = 0;
	var prizeZone=[];
	for(var key in chance){
		var row={};
		max = chance[key] + max;
		row['v'] = max;
		row['k'] = key;
		prizeZone.push(row);
	}
	var rand = Math.random()*max;
	var zone = 200;
	//console.log(rand)
	for (var i = 0; i < prizeZone.length; i++) {
		if(rand>=prizeZone[i]['v']){
			if (rand >= prizeZone[i + 1]['v']) {
				continue;
			} else {
				zone = prizeZone[i + 1]['k'];
				break;
			}
		}else{
			zone = prizeZone[i]['k'];
			break;
		}

	}
	return zone;
}