<?php
// Set up your database connection
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Fetch video cards data from the database
$sql = "SELECT * FROM video_cards";
$result = $conn->query($sql);

$videoCards = array();

if ($result->num_rows > 0) {
  // Output data of each row
  while($row = $result->fetch_assoc()) {
    $videoCards[] = array(
      'id' => $row['id'],
      'title' => $row['title'],
      'description' => $row['description'],
      'thumbnail' => $row['thumbnail']
    );
  }
}

// Return video cards as JSON
header('Content-Type: application/json');
echo json_encode($videoCards);

// Close connection
$conn->close();
?>
