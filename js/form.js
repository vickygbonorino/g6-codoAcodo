//formulario
//Elevar label cuando el input esta seleccionado
const inputs = document.querySelectorAll('.container-input input, .container-input textarea');


inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.parentElement.querySelector('label').classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.parentElement.querySelector('label').classList.remove('focused');
        }
    });
});

//Validacion del form
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // evita que se envie el formulario por defecto

        
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const message = document.querySelector('#message').value.trim();
        const agree = document.querySelector('#agree').checked;

        
        const nameError = document.querySelector('#name-error');
        const emailError = document.querySelector('#email-error');
        const messageError = document.querySelector('#message-error');
        const agreeError = document.querySelector('#agree-error');

        // reiniciar los mensajes de error al completar el input
        document.querySelectorAll('.container-input input, .container-input textarea').forEach(input => {
            input.addEventListener('input', function () {
                const errorId = this.id + '-error';
                document.getElementById(errorId).textContent = '';
            });
        });

        // Validación y mensajes de error

        // function validateEmail(email) {
        //     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        //     return re.test(String(email).toLowerCase());
        // }

        if (!name) {
            nameError.textContent = 'Por favor, ingresa tu nombre.';
        }
        if (!email) {
            emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
        }
        if (!message) {
            messageError.textContent = 'Por favor, ingresa tu mensaje.';
        }
        if (!agree) {
            agreeError.textContent = 'Debes aceptar los términos y condiciones.';
        }

        
        if (nameError.textContent || emailError.textContent || messageError.textContent || agreeError.textContent) {
            return;
        }


        if (isValid) {
            
            // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
            //     .then(function() {
            //         console.log('Correo enviado con éxito!');
            //     }, function(error) {
            //         console.log('Error al enviar el correo:', error);
            //     });
        
        
        form.reset();
        }
        
    });
});
