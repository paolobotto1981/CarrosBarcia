<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Preflight request response
    header('HTTP/1.1 200 OK');
    exit();
}

include 'db.php';

try {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data === null) {
        throw new Exception("Invalid JSON");
    }

    $descripcion = $data['descripcion'];
    $alto = $data['alto'];
    $ancho = $data['ancho'];
    $profundidad = $data['profundidad'];
    $precio = $data['precio'];

    $stmt = $pdo->prepare("INSERT INTO carros (descripcion, alto, ancho, profundidad, precio,created_user) VALUES (?, ?, ?, ?, ?, 0)");
    $stmt->execute([$descripcion, $alto, $ancho, $profundidad, $precio]);

    echo json_encode(['status' => 'success']);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
}
?>
