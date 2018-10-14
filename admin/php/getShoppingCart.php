<?php
header("Content-type: text/html; charset=utf-8");
// 指定允许其他域名访问,解决CROS
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');

	$vipName   = $_POST['username'];
	
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
	$sqlstr = "select * from goodsinfo g,user_cart s
			   where g.goodsId = s.goodId  and s.username = '".$vipName."'";
	// die($sqlstr);
	$result = $conn->query($sqlstr);//执行查询的sql语句后，有返回值，返回的是查询结果
		
	if(!$result){
		die("SQL语句执行失败".mysql_error());
	}
			
	//查询列数
	 $query_cols = mysqli_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysqli_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="[";
	
	$query_row = mysqli_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	while($query_row){
		$str = $str.'{"goodsId":"'.$query_row[0].'",
		"goodsName":"'.$query_row[1].'",
		"goodsType":"'.$query_row[2].'",
		"goodsPrice":"'.$query_row[3].'",
		"goodsCount":"'.$query_row[23].'",
		"goodsDesc":"'.$query_row[5].'",
		"goodsImg":"'.$query_row[6].'",
		"yanse":"'.$query_row[7].'",
		"neicun":"'.$query_row[8].'",
		"taocan":"'.$query_row[9].'",
		"beiyong4":"'.$query_row[10].'",
		"beiyong5":"'.$query_row[11].'",
		"beiyong6":"'.$query_row[12].'",
		"beiyong7":"'.$query_row[13].'",
		"beiyong8":"'.$query_row[14].'",
		"beiyong9":"'.$query_row[15].'",
		"beiyong10":"'.$query_row[16].'",
		"beiyong11":"'.$query_row[17].'",
		"beiyong12":"'.$query_row[18].'",
		"beiyong13":"'.$query_row[19].'"
		}';	
		
		$query_row = mysqli_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";
	//4、关闭数据库
	mysqli_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>

