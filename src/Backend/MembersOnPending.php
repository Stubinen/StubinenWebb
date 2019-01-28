<?php
require 'config.php';
$pending = "pending";
try{
    $db = getDB();
    $userData = '';
    $sql = "SELECT * FROM users WHERE paymentstatus=:paymentstatus";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("paymentstatus", $pending ,PDO::PARAM_STR);
    $stmt->execute();
    $userData = $stmt->fetchAll(PDO::FETCH_OBJ);
    if($userData){
        error_log(json_encode($userData));
        echo json_encode($userData);
    }
    else{
        $resp = array('NoUsers' => "Inga medlemmar väntar på att aktiveras");
        echo json_encode($resp);
    }
}
catch(PDOException $e) {
    $resp = array('error' => $e->getMessage());
    echo json_encode($resp);
}

?>
