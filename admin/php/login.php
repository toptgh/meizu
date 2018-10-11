<?php
    // 获取用户名
    // 返回的数据类型为json结构
    header("Content-Type: application/json");
    // 允许所有域名跨域
    header("Access-Control-Allow-Origin:*");
    include "public/connect_db.php";
    // 获取传输的json字符串
    $json = json_decode(file_get_contents("php://input"));
    $username = $json -> username;
    $password = $json -> password;
    $sql = "SELECT * from user WHERE username='$username' and password='$password'";
    $coon = new db();
    $rows = $coon -> Query($sql, 2);
    // 如果可以找到,返回关联数组, 找不到返回null
    if($rows) {
      // 输入正确
      $arr = array("code" => "200", "msg" => "登陆成功！", "data" => array("id" => $rows["id"], "token"=> "1112233", "username" => $rows["username"]));
    } else {
      // 输入错误
      $arr = array("code" => "1000", "msg" => "您输入的密码错误");
    }
    echo json_encode($arr);

  ?>