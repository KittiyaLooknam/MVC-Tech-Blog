const loginFormHandler = async (event) => {
    event.preventDefault();
  

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim(); 
    
    if (username && password) {
        // Send a POST request to the API with the user's email and password
        const response = await fetch('/api/users/login',{  
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            // If successful, redirect the user to their dashboard page
            document.location.replace('/dashboard'); ///  .................................wait for change
        } else {
            alert('Failed to log in. Please try again!');
        };
    };
};


document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
    
