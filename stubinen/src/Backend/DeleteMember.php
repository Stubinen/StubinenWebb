<?php
require 'config.php';
$id = $_POST['id'];
try{
    $db = getDB();
    $sql = "DELETE FROM users WHERE id=:id ";
    $stmt = $db->prepare($sql);
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
