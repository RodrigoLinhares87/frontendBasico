document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Validação simples de e-mail e senha
        if (!validateEmail(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        if (senha.length < 6) {
            alert('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        // Redireciona para a nova página
        window.location.href = 'login.html';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validação de e-mail
        return re.test(String(email).toLowerCase());
    }
});