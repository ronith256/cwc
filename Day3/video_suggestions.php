<?php
// Retrieve the video ID from the POST request
$video_id = $_POST['video_id'];

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

// Set up your database connection
$servername = "localhost";
$username = "ronith";
$password = "test";
$dbname = "myvideos";

$conn = new mysqli($servername, $username, $password, $dbname);

if (!$conn) {
  die('Error connecting to the database');
}

// Retrieve video suggestions from the database
$query = "SELECT * FROM videos WHERE id != $video_id ORDER BY view_count DESC LIMIT 4";
$result = mysqli_query($conn, $query);

if (!$result) {
  die('Error retrieving video suggestions from the database');
}

// Fetch the video suggestions as an array of associative arrays
$video_suggestions = mysqli_fetch_all($result, MYSQLI_ASSOC);

// Convert the video suggestions to a JSON format
$output = json_encode($video_suggestions);

// Set the content type header to application/json
header('Content-Type: application/json');

// Output the video suggestions as JSON
echo $output;
?>
