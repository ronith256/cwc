document.addEventListener("DOMContentLoaded", function () {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  
    if (prefersDarkScheme.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  
    // Optional: Listen for changes in the user's color scheme preference
    prefersDarkScheme.addListener((e) => {
      if (e.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    });
  });

  const emailInput = document.getElementById('email');
  const emailLabel = document.querySelector('.input-label');
  // const passwordLabel = document.querySelector('.password')
  
  emailInput.addEventListener('input', () => {
    if (emailInput.value.length > 0) {
      emailLabel.style.display = 'none';
    } else {
      emailLabel.style.display = 'block';
    }
  });
  

  document.getElementById('sign-in').addEventListener('click', function() {
    // Get the email and password input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
  
    // Set up the AJAX request
    xhr.open('POST', 'http://127.0.0.1/check_user.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  
    // Set up the AJAX response handler
    xhr.onload = function() {
      if (xhr.status === 200) {
        // If the AJAX request was successful
        if (xhr.responseText === 'loggedIn') {
          // If the user exists, redirect to the dashboard page or show a success message
          window.location.href = 'video_paid.html';
        } else {
          // If the user doesn't exist, show an error message
          alert('Invalid email or password');
        }
      } else {
        // If the AJAX request failed, show an error message
        alert('Error: ' + xhr.status);
      }
    };
  
    // Send the AJAX request with the email and password input values
    xhr.send('email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password));
  });
  