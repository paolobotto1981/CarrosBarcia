<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

require_once 'db.php'; // Incluir el archivo db.php que contiene la función para la conexión

// Ejecutar la función conectionDb() para obtener la conexión a la base de datos
$pdo = conectionDb();

// Ejecutar la consulta SQL para obtener todos los carros con los campos especificados
$stmt = $pdo->query("SELECT id, descripcion, alto, ancho, profundidad, precio FROM carros_barcia.carros");
$carros = $stmt->fetchAll();

// Devolver los resultados en formato JSON
echo json_encode($carros);
?>
