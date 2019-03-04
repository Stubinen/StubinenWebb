<?php
require 'config.php';
$active = "active";
try{
    $db = getDB();
    $userData = '';
    $sql = "SELECT id FROM users WHERE Membership =:active";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("active", $active ,PDO::PARAM_STR);
    $stmt->execute();
    $MemberCount=$stmt->rowCount();
    $resp = array('Count' => $MemberCount);
    echo json_encode($resp);
}
catch(PDOException $e) {
    $resp = array('error' => $e->getMessage());
    echo json_encode($resp);
}
?>
