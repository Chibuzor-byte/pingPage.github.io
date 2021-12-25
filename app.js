const email = document.getElementById('email');
const emailMessageMobile = document.getElementById('error-message-mobile');
const emailMessageDesktop = document.getElementById('error-message-desktop');


const form = document.getElementById('form');




form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (email.value === '' || email.value == null) {
        emailMessageMobile.textContent = 'Please provide a valid email address';
        emailMessageDesktop.textContent = 'Please provide a valid email address';
        email.classList.add('email-error');
        email.placeholder = 'email@example/com';
    } else {
        email.classList.remove('email-error');
        emailMessageMobile.textContent = '';
        emailMessageDesktop.textContent = '';        
    }

})