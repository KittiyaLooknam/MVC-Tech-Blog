const createFormHandler = async (event) => {
    event.preventDefault();
    
    document.location.replace('/dashboard');  //redirect to dashboard page after logging in
}
document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);