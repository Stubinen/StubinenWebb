<?php
require 'config.php';
$id = $_POST['id'];
$pending = "pending";
try{
    $db = getDB();
    $sql = "UPDATE users SET paymentstatus=:paymentstatus WHERE id=:id ";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("paymentstatus", $pending, PDO::PARAM_STR);
    $stmt->bindParam("id", $id, PDO::PARAM_INT);
    $stmt->execute();
    $db = null;
    $resp = array('success' => "Successful");
    echo json_encode($resp);
}
catch(PDOException $e) {
    $resp = array('error' => $e->getMessage());
    echo json_encode($resp);
}
?>
