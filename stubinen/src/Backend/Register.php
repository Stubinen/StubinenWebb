<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require 'config.php';
//$data = json_decode(file_get_contents('php://input'), true);
//print_r($data);
$email = $_POST['email'];
$password= $_POST['password'];
$firstname= $_POST['firstname'];
$lastname= $_POST['lastname'];
$kar = $_POST['kar'];
error_log($kar);
if($kar == "ej student"){
    $isStudent= false;
}
else{
    $isStudent = true;
}
$membership = "inactive";
try{
    $email_check = preg_match('~^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})$~i', $email);
    $password_check = preg_match('~^[A-Za-z0-9!@#$%^&*()_]{6,20}$~i', $password);
    if (strlen(trim($password))>0 && strlen(trim($email))>0 && $email_check>0 && $password_check>0){
        $db = getDB();
        $userData = '';
        $sql = "SELECT id FROM users WHERE email=:email";
        $stmt = $db->prepare($sql);
        $stmt->bindParam("email", $email,PDO::PARAM_STR);
        $stmt->execute();
        $mainCount=$stmt->rowCount();
        $created=time();
        if($mainCount==0){
            $sql1="INSERT INTO users(FirstName, LastName,Membership,Email, Password,isStudent, karMedlemskap)VALUES(:firstname,:lastname,:membership ,:email,:password,:isStudent,:kar)";
            $stmt1 = $db->prepare($sql1);
            $stmt1->bindParam("firstname", $firstname,PDO::PARAM_STR);
            $stmt1->bindParam("lastname", $lastname,PDO::PARAM_STR);
            $stmt1->bindParam("membership", $membership,PDO::PARAM_STR);
            $stmt1->bindParam("email", $email,PDO::PARAM_STR);
            $password=hash('sha256',$password);
            $stmt1->bindParam("password", $password,PDO::PARAM_STR);
            $stmt1->bindParam("isStudent", $isStudent,PDO::PARAM_BOOL);
            $stmt1->bindParam("kar", $kar, PDO::PARAM_STR);
            $stmt1->execute();
            $resp = array('success' => "Successful");
            echo json_encode($resp);
        }
        else{
            $resp = array('error' => "Email already exists");
            echo json_encode($resp);
        }
        $db = null;

    }
    else{
        $resp = array('error' => "Enter valid data");
        echo json_encode($resp);
    }
}
catch(PDOException $e) {
    $resp = array('error' => $e->getMessage());
    echo json_encode($resp);
}
?>
