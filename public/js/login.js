async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
      try {
          const response = await fetch('/api/users/login', {
              method: 'POST', // Corrected method to POST
              body: JSON.stringify({
                  email,
                  password
              }),
              headers: {
                  'Content-Type': 'application/json'
              }
          });

          if (response.ok) {
              document.location.replace('/home');
          } else {
              const errorMessage = await response.json(); // Assuming the error message is sent as JSON
              console.log(errorMessage); // Log the error message to the console
              alert(`Login failed: ${errorMessage.message}`);
          }
      } catch (error) {
          console.error('Error during login:', error);
          alert('An error occurred during login. Please try again.');
      }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
