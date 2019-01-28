<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require 'config.php';
//$data = json_decode(file_get_contents('php://input'), true);
//print_r($data);
$email = $_POST['email'];
$password = $_POST['password'];
try {
    $db = getDB();
    $userData ='';
    $sql = "SELECT * FROM users WHERE ( Email=:email and Password=:password) ";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("email", $email, PDO::PARAM_STR);
    $password=hash('sha256',$password);
    $stmt->bindParam("password", $password, PDO::PARAM_STR);
    $stmt->execute();
    $mainCount=$stmt->rowCount();
    $userData = $stmt->fetch(PDO::FETCH_OBJ);
    if(!empty($userData)){
         $user_id=$userData->id;
         $userData->token = apiToken($user_id);
    }
    $db = null;
    if($userData){
       echo json_encode($userData);
       //$resp = array('success' => "It was a success");
       //echo json_encode($resp);
    }
    else {
        $resp = array('error' => "Bad request wrong username and password");
        echo json_encode($resp);
    }
}
catch(PDOException $e) {
    $resp = array('error' => $e->getMessage());
    echo json_encode($resp);
}

?>
