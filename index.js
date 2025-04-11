// Função para substituir os placeholders por suas imagens reais
document.addEventListener('DOMContentLoaded', function() {
    // Array para armazenar as URLs das imagens
    const imageUrls = [
        '/api/placeholder/500/500', // Hero phone
        '/api/placeholder/200/200', // Phone X na seção de produtos
        '/api/placeholder/200/200', // AR Glass na seção de produtos
        '/api/placeholder/200/200'  // AI Assistant na seção de produtos
    ];
    
    // Função para atualizar imagens se disponíveis
    function updateImages() {
        // Aqui você adicionaria o código para atualizar as imagens com as URLs reais quando hospedar o site
        // Este é apenas um placeholder para a lógica de substituição de imagens
        console.log("Imagens carregadas!");
    }
    
    // Inicializar animações de scroll
    const fades = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fades.forEach(fade => {
            const fadeTop = fade.getBoundingClientRect().top;
            const fadePoint = window.innerHeight / 1.2;
            
            if(fadeTop < fadePoint) {
                fade.style.opacity = 1;
                fade.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    fades.forEach(fade => {
        fade.style.opacity = 0;
        fade.style.transform = 'translateY(20px)';
        fade.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check on load
    checkFade();
    updateImages();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
});

// Validação do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Função para exibir mensagem de erro
    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('span');
            errorElement.classList.add('error-message');
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
    }

    // Função para limpar mensagem de erro
    function clearError(input) {
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.textContent = '';
        }
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede a atualização da página
        let isValid = true;

        // Validação do campo Nome
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Por favor, preencha o campo Nome.');
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validação do campo Email
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Por favor, preencha o campo Email.');
            isValid = false;
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                showError(emailInput, 'Por favor, insira um email válido.');
                isValid = false;
            } else {
                clearError(emailInput);
            }
        }

        // Validação do campo Mensagem
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Por favor, preencha o campo Mensagem.');
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // Se o formulário for válido, exibe uma mensagem de sucesso
        if (isValid) {
            form.reset(); // Limpa os campos do formulário
        }
    });
});