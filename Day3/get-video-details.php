<?php
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
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get the video id from the POST request
$video_id = $_POST['video_id'];

// Query the database for the video details
$sql = "SELECT title, description, uploader, view_count, like_count, dislike_count, video_url FROM videos WHERE id='$video_id'";
$result = $conn->query($sql);

// Check if the query was successful
if ($result->num_rows > 0) {
  // Get the first row of the result set
  $row = $result->fetch_assoc();

  // Create an array with the video details
  $video_details = array(
    "title" => $row["title"],
    "description" => $row["description"],
    "uploader" => $row["uploader"],
    "view_count" => $row["view_count"],
    "like_count" => $row["like_count"],
    "dislike_count" => $row["dislike_count"],
    "video_url" => $row["video_url"]
  );

  // Convert the array to JSON and output it
  header('Content-Type: application/json');
  echo json_encode($video_details);
} else {
  // Return an error message if no video was found
  echo "Video not found";
}

// Close the database connection
$conn->close();
?>
