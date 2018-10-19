<?php
header("Content-type: text/html; charset=utf-8");
// 指定允许其他域名访问,解决CROS
header('Access-Control-Allow-Origin:*');
// 响应类型
header('Access-Control-Allow-Methods:POST');
// 响应头设置
header('Access-Control-Allow-Headers:x-requested-with,content-type');

	$username=$_POST["username"];
	//建立连接
	$conn = new mysqli("localhost","root","",'meizu','3306');
	mysqli_query($conn,'set character set utf8');//读库
	mysqli_query($conn,'set names utf8');//写库
	if($conn){
			
			//执行SQL
		  $sqlstr="select IFNULL(sum(goodcount),0) from user_cart where username='".$username."'";
		  $result= $conn->query($sqlstr);
           $rows =mysqli_num_rows($result);
            if($rows>0){
				$query_row = mysqli_fetch_array($result);
				echo $query_row[0];
				// echo mysqli_result($result, 0, 0);//第1行第1列
            };
			//断开连接
            mysqli_close($conn);
	}else{
		echo '连接数据库失败';
	};
?>