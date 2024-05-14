document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const subject = document.getElementById("subject").value;
        const agree = document.getElementById("agree").checked;

        if (!name || !email || !message || !agree) {
            event.preventDefault(); // Evita que el formulario se envíe
            alert("Por favor completa todos los campos obligatorios.");
        }
    });
});
