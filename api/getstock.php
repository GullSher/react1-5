<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// $conn = new mysqli("localhost", "root", "", "react1-5");
$conn = new mysqli("localhost", "root", "", "stockmngt");
// $conn = new mysqli("localhost", "username", "password", "database_name");





if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else {
    echo "Connection successful";
}

$sql = "SELECT * FROM items";
$result = $conn->query($sql);

$data = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
$conn->close();
?>

<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");


try {

// $conn = new mysqli("localhost", "root", "", "stockmngt", 3306, "/var/run/mysqld/mysqld.sock", "client");
$conn = new mysqli("localhost", "root", "", "stockmngt");

if ($conn->connect_error) {
    // die("Connection failed: " . $conn->connect_error);
    throw new Exception("Connection failed: " . $conn->connect_error);
}


} catch (Exception $e) {

$sql = "SELECT * FROM items"; // Replace with your actual table name
$result = $conn->query($sql);

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>