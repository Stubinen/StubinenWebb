<?php
require 'config.php';
$inactive = "inactive";
try{
    $db = getDB();
    $userData = '';
    $sql = "SELECT id FROM users WHERE Membership<>:inactive";
    $stmt = $db->prepare($sql);
    $stmt->bindParam("inactive", $inactive ,PDO::PARAM_STR);
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
