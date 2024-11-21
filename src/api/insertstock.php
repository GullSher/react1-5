<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "stock-management");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $item_name = $data['item_name'];
    $category = $data['category'];
    $quantity = $data['quantity'];
    $price = $data['price'];
    $supplier = $data['supplier'];

    $sql = "INSERT INTO items (item_name, category, quantity, price, supplier) VALUES ('$item_name', '$category', $quantity, $price, '$supplier')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Item inserted successfully"]);
    } else {
        echo json_encode(["message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>
