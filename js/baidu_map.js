// 报错信息
		function showError(error) {
			switch (error.code) {
				case error.PERMISSION_DENIED:
					alert("定位失败,用户拒绝请求地理定位");
					break;
				case error.POSITION_UNAVAILABLE:
					alert("定位失败,位置信息是不可用");
					break;
				case error.TIMEOUT:
					alert("定位失败,请求获取用户位置超时");
					break;
				case error.UNKNOWN_ERROR:
					alert("定位失败,定位系统失效");
					break;
			}
		}
		function showPosition(position) {
			var left = position.coords.latitude, //纬度					       
				right = position.coords.longitude; //经度
		//实际经纬度：110.41064,25.30924
		//获取经纬度：110.41133378252164,25.310945238576632 
			console.log(left, right)
			var map = new BMap.Map("container");
			var point = new BMap.Point(right,left); //当前位置经纬度
		//转换坐标
		function translateback(point) {
				//console.log(left,right)
				// 创建点坐标 
				map.centerAndZoom(point, 17);
				// 初始化地图，设置中心点坐标和地图级别 
				map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
				var marker = new BMap.Marker(point); // 创建标注    
				map.addOverlay(marker); // 将标注添加到地图中 
				function addMarker(point, index) { // 创建图标对象   
					var myIcon = new BMap.Icon("../img/location.jpeg", new BMap.Size(23, 25), {
						// 指定定位位置。
						// 当标注显示在地图上时，其所指向的地理位置距离图标左上
						// 角各偏移10像素和25像素。您可以看到在本例中该位置即是
						// 图标中央下端的尖角位置。
						anchor: new BMap.Size(10, 25),
						// 设置图片偏移。
						// 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
						// 需要指定大图的偏移位置，此做法与css sprites技术类似。
						imageOffset: new BMap.Size(0, 0 - index * 25) // 设置图片偏移   
					});

					var marker = new BMap.Marker(point, {
						icon: myIcon
					});
					map.addOverlay(marker);
				}
				marker.addEventListener("click", function(e) {
					alert("当前位置：" + e.point.lng + ", " + e.point.lat);
				});
				var opts = {
					width: 250, // 信息窗口宽度    
					height: 100, // 信息窗口高度    
					title: "Hello" // 信息窗口标题   
				}
				var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象
				map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口
				var opts = {
					width: 280, // 信息窗口宽度    
					height: 120, // 信息窗口高度    
					title: "" // 信息窗口标题   
				}
				var content =
					"<h6>当前位置</h6>" +
					"<img style='float:right;margin:4px' id='imgDemo' src='img/guidian.jpeg' white='100px' height='80px' title='花江校区' />" +
					"<p id='weizhi' style='font-size:12px' >正在加载请稍后。。。</p>"
				
				var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
				map.openInfoWindow(infoWindow, map.getCenter()); // 打开信息窗口

			}
		
			BMap.Convertor.translate(point, 0, translateback);
		}
		setTimeout(() => {
			navigator.geolocation.getCurrentPosition(showPosition, showError,{enableHighAccuracy: true});
		}, 500)