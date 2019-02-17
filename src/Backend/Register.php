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
$Personnummer = $_POST['Personnummer'];
$Adress = $_POST['Adress'];
$Postnummer = $_POST['Postnummer'];
$Stad = $_POST['Stad'];
$Kon = $_POST['Kon'];
$Telefonnummer = $_POST['Telefonnummer'];

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
    if (strlen(trim($password))> 0 && strlen(trim($email))> 0){
        $db = getDB();
        $userData = '';
        $sql = "SELECT id FROM users WHERE email=:email";
        $stmt = $db->prepare($sql);
        $stmt->bindParam("email", $email,PDO::PARAM_STR);
        $stmt->execute();
        $mainCount=$stmt->rowCount();
        $created=time();
        if($mainCount==0){
            $sql1="INSERT INTO users(FirstName, LastName,Membership,Email, Password,isStudent, karMedlemskap, Personnummer, Adress, Postnummer, Stad,Kon,Telefonnummer)VALUES(:firstname,:lastname,:membership ,:email,:password,:isStudent,:kar,:Personnummer, :Adress,:Postnummer, :Stad,:Kon,:Telefonnummer)";
            $stmt1 = $db->prepare($sql1);
            $stmt1->bindParam("firstname", $firstname,PDO::PARAM_STR);
            $stmt1->bindParam("lastname", $lastname,PDO::PARAM_STR);
            $stmt1->bindParam("membership", $membership,PDO::PARAM_STR);
            $stmt1->bindParam("email", $email,PDO::PARAM_STR);
            $password=hash('sha256',$password);
            $stmt1->bindParam("password", $password,PDO::PARAM_STR);
            $stmt1->bindParam("isStudent", $isStudent,PDO::PARAM_BOOL);
            $stmt1->bindParam("kar", $kar, PDO::PARAM_STR);
            $stmt1->bindParam("Personnummer", $Personnummer, PDO::PARAM_STR);
            $stmt1->bindParam("Adress", $Adress, PDO::PARAM_STR);
            $stmt1->bindParam("Postnummer", $Postnummer, PDO::PARAM_STR);
            $stmt1->bindParam("Stad", $Stad, PDO::PARAM_STR);
            $stmt1->bindParam("Kon", $Kon, PDO::PARAM_STR);
            $stmt1->bindParam("Telefonnummer", $Telefonnummer, PDO::PARAM_STR);

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
