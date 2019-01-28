<?php
require 'config.php';
try{
    $db = getDB();
    $userData = '';
    $sql = "SELECT * FROM users";
    $stmt = $db->prepare($sql);
    $stmt->execute();
    $userData = $stmt->fetchAll(PDO::FETCH_OBJ);
    if($userData){
        echo json_encode($userData);
    }
    else{
        $resp = array('NoUsers' => "Inga medlemmar");
        echo json_encode($resp);
    }
}
catch(PDOException $e) {
    $resp = array('error' => $e->getMessage());
    echo json_encode($resp);
}

?>
