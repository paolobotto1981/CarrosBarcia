<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$name = $data['name'];
$email = $data['email'];

$stmt = $pdo->prepare("UPDATE users SET name = ?, email = ? WHERE id = ?");
$stmt->execute([$name, $email, $id]);

echo json_encode(['status' => 'success']);
?>
