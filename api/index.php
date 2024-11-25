<?php 
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
echo"testing";

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$user = print_r(file_get_contents('php://input'));
$method = $_SERVER['REQUEST_METHOD'];
switch($method){
    case 'post':
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO contact(id, name, email, mobilenumber, ) VALUES(null, :name, :email, :mobilenumber, )";
        $stmt = $conn->prepare($sql);
        
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':mobilenumber', $user->mobilenumber);
        

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;
}