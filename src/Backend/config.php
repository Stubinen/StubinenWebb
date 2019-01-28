<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
session_start();
/* DATABASE CONFIGURATION */
define('DB_SERVER', 'mysql84.unoeuro.com');
define('DB_USERNAME', 'stubinen_org');
define('DB_PASSWORD', 'nw1w172499');
define('DB_DATABASE', 'stubinen_org_db_4');
define("BASE_URL", "http://localhost/Stubinen");
define("SITE_KEY", 'NoneShallPass');
header("Access-Control-Allow-Origin: *");
function getDB()
{
	$dbhost=DB_SERVER;
	$dbuser=DB_USERNAME;
	$dbpass=DB_PASSWORD;
	$dbname=DB_DATABASE;
	$dbConnection = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbConnection->exec("set names utf8");
	$dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbConnection;
}
/* DATABASE CONFIGURATION END */
/* API key encryption */
function apiToken($session_uid)
{
$key=md5(SITE_KEY.$session_uid);
return hash('sha256', $key);
}
?>
