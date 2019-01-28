<?php
require 'config.php';
require 'vendor/autoload.php';
$app = new \Slim\App();

$app->get('/hello/{name}', function (Request $request, Response $response, array $args) {
    $name = $args['name'];
    $response->getBody()->write("Hello, $name");

    return $response;
});
$app->post('/login','login'); /* User login */
$app->post('/register','register'); /* User register */

$app->run();

/* ### User login ### */
function login() {
    $request = \Slim\Slim::getInstance()->request();
    $data = json_decode($request->getBody());
    try {
        $db = getDB();
        $userData ='';
        $sql = "SELECT  * FROM users WHERE ( email=:email) and password=:password ";
        $stmt = $db->prepare($sql);
        $stmt->bindParam("email", $data->email, PDO::PARAM_STR);
        $password=hash('sha256',$data->password);
        $stmt->bindParam("password", $password, PDO::PARAM_STR);
        $stmt->execute();
        $mainCount=$stmt->rowCount();
        $userData = $stmt->fetch(PDO::FETCH_OBJ);
        if(!empty($userData)){
             $user_id=$userData->user_id;
             $userData->token = apiToken($user_id);
        }
        $db = null;
        if($userData){
           $userData = json_encode($userData);
           echo '{"userData": ' .$userData . '}';
        }
        else {
           echo '{"error":{"text":"Bad request wrong username and password"}}';
        }
    }
    catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}
/* ### User registration ### */
function register() {
   $request = \Slim\Slim::getInstance()->request();
   $data = json_decode($request->getBody());
   $email=$data->email;
   $firstname=$data->firstname;
   $lastname=$data->lastname;
   $isStudent = $data->isStudent;
   $password=$data->password;
   $membership= $data->membership;
   try {
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
                /*Inserting user values*/
                $sql1="INSERT INTO users(FirstName, LastName,Membership,Email, Password,isStudent)VALUES(:firstname,:lastname,:membership ,:email,:password,:isStudent)";
                $stmt1 = $db->prepare($sql1);
                $stmt1->bindParam("firstname", $firstname,PDO::PARAM_STR);
                $stmt1->bindParam("lastname", $lastname,PDO::PARAM_STR);
                $stmt1->bindParam("membership", $membership,PDO::PARAM_STR);
                $stmt1->bindParam("email", $email,PDO::PARAM_STR);
                $password=hash('sha256',$data->password);
                $stmt1->bindParam("password", $password,PDO::PARAM_STR);
                $stmt1->bindParam("isStudent", $isStudent,PDO::PARAM_BOOL);
                $stmt1->execute();
                $userData=internalUserDetails($email);
            }
            $db = null;

            if($userData){
                $userData = json_encode($userData);
                echo '{"userData": ' .$userData . '}';
            }
            else {
                echo '{"error":{"text":"Enter valid data"}}';
            }

        }
        else{
            echo '{"error":{"text":"Enter valid data"}}';
        }
    }
    catch(PDOException $e) {
      echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}
?>
