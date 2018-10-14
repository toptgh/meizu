<?php
	//添加到购物车
	header("Content-type: text/html; charset=utf-8");
	// 指定允许其他域名访问,解决CROS
	header('Access-Control-Allow-Origin:*');
	// 响应类型
	header('Access-Control-Allow-Methods:POST');
	// 响应头设置
	header('Access-Control-Allow-Headers:x-requested-with,content-type');

	//1、接受客户端的数据（用户输入的数据）
	$vipName   = $_POST["username"];
	$goodsId   = $_POST["cid"];
    $goodsCount = $_POST["count"];
    
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = new mysqli("localhost","root","",'meizu','3306');
	mysqli_query($conn,'set character set utf8');//读库
	mysqli_query($conn,'set names utf8');//写库
	
	//2）、选择数据库（找目的地）
	if(!$conn){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	$result="select * from user_cart where username='".$vipName."' and goodId='".$goodsId."'";
	$result=$conn->query($result);
	//3.1)先查找该商品是否在购物车中存在
	if(mysqli_num_rows($result)>0){
		//如果存在，则使用update语句
		$sqlstr = "update user_cart set goodcount=goodcount+".$goodsCount." where username='".$vipName."' and goodId='".$goodsId."'";
	}else{
		//如果不存在，则使用insert语句	
		$sqlstr = "insert into user_cart(username,goodId,goodcount) values('".$vipName."','".$goodsId."','".$goodsCount."')";		
	}
	
	$result=$conn->query($sqlstr);	
	
	if(!$result){
		die("添加失败".mysql_error());
	}	
	
	//3、给客户端返回（响应） 1：表示添加成功 0：表示添加失败
	if($result){
		echo 1;	
	}else{
		echo 0;
    }

    //4）、关闭连接（拆桥）
	mysqli_close($conn);
?>