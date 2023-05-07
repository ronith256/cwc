<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

// Set up your database connection
$servername = "localhost";
$username = "ronith";
$password = "test";
$dbname = "usersdb";

// Get the email and password from the POST request
$email = $_POST['email'];
$passwordP = $_POST['password'];

$conn = new mysqli($servername, $username, $password, $dbname);

// Check if the connection was successful
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  // Prepare the SQL statement to check if the user exists
  $stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
  $stmt->bind_param("ss", $email, $passwordP);
  $stmt->execute();
  
  // Check if there is a row returned
  if ($stmt->fetch()) {
    echo 'loggedIn';
  } else {
    echo 'notLoggedIn';
  }
  
  // Close the database connection
  $stmt->close();
  $conn->close();
  ?>