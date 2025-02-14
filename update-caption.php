<?php
// Allow CORS (Optional: Needed only if your frontend is on a different domain)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $file_path = "assets/scripts/dynamic-gallery.js"; // Path to your file

    // Get the JSON input from the request
    $json_data = file_get_contents("php://input");
    
    if (!$json_data) {
        echo json_encode(["status" => "error", "message" => "No data received"]);
        exit;
    }

    // Convert JSON to a formatted JavaScript variable
    $js_content = "const galleries = " . $json_data . ";";

    // Write the new data to the JavaScript file
    if (file_put_contents($file_path, $js_content)) {
        echo json_encode(["status" => "success", "message" => "Captions updated successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Failed to update file"]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method"]);
}
?>
