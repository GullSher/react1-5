<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "root", "", "stock-management");

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);
$sql = "UPDATE items SET
        item_name = '{$data['item_name']}',
        category = '{$data['category']}',
        quantity = '{$data['quantity']}',
        price = '{$data['price']}',
        supplier = '{$data['supplier']}',
        date_added = '{$data['date_added']}'
        WHERE item_id = '{$data['item_id']}'";

if ($conn->query($sql)) {
    echo json_encode(["success" => true, "message" => "Item updated successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
?>
