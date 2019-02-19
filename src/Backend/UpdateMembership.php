<?php
require 'config.php';
$id = $_POST['id'];
$Membership = $_POST['membership'];
try{
    $db = getDB();
    $sql = "UPDATE users SET Membership=:Membership WHERE id=:id ";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("Membership", $Membership, PDO::PARAM_STR);
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
