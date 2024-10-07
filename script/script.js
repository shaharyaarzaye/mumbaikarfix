document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Validate inputs
    if (username === '' || password === '') {
      document.getElementById('error-message').textContent = 'Please enter both username and password.';
      return;
    }
  
    // Dummy login check (for demonstration purposes)
    if (username === 'admin' && password === 'admin123') {
      alert('Login successful!');
      window.location.href = 'dashboard.html'; // Redirect to dashboard page (create this page in real-world scenarios)
    } else {
      document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
  });
  