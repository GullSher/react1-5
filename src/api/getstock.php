<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "stock-management");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, item_name, price, quantity, description FROM supplier";
$result = $conn->query($sql);

if ($result === false) {
    die("Error executing SQL query: " . $conn->error);
}

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        if (!isset($row['id'])) {
            die("Error: 'id' field is not included in the SQL query");
        }
        $data[] = $row;
    }
}

echo json_encode($data);
$conn->close();
?>