document.addEventListener('DOMContentLoaded', function() {
    // Obter os elementos dos botões e modais
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const clientSignupModal = document.getElementById('clientSignupModal');
    const professionalSignupModal = document.getElementById('professionalSignupModal');

    const closeButtons = document.querySelectorAll('.close-button');

    const signupClientBtn = document.getElementById('signupClientBtn');
    const signupProfessionalBtn = document.getElementById('signupProfessionalBtn');

    const loginForm = document.getElementById('loginForm');
    const clientSignupForm = document.getElementById('clientSignupForm');
    const professionalSignupForm = document.getElementById('professionalSignupForm');

    // Função para abrir um modal
    function openModal(modal) {
        modal.style.display = 'block';
    }

    // Função para fechar um modal
    function closeModal(modal) {
        modal.style.display = 'none';
    }

    // Event Listeners para abrir modais
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            openModal(loginModal);
        });
    }

    if (signupBtn) {
        signupBtn.addEventListener('click', function() {
            openModal(signupModal);
        });
    }

    if (signupClientBtn) {
        signupClientBtn.addEventListener('click', function() {
            closeModal(signupModal); // Fecha o modal de escolha
            openModal(clientSignupModal); // Abre o modal de cadastro de cliente
        });
    }

    if (signupProfessionalBtn) {
        signupProfessionalBtn.addEventListener('click', function() {
            closeModal(signupModal); // Fecha o modal de escolha
            openModal(professionalSignupModal); // Abre o modal de cadastro de profissional
        });
    }

    // Event Listeners para fechar modais
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            closeModal(loginModal);
            closeModal(signupModal);
            closeModal(clientSignupModal);
            closeModal(professionalSignupModal);
        });
    });

    // Fechar modais clicando fora da área do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target == loginModal) {
            closeModal(loginModal);
        }
        if (event.target == signupModal) {
            closeModal(signupModal);
        }
        if (event.target == clientSignupModal) {
            closeModal(clientSignupModal);
        }
        if (event.target == professionalSignupModal) {
            closeModal(professionalSignupModal);
        }
    });

    // Lógica para envio dos formulários (exemplo simples, sem backend)
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio padrão do formulário
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            alert(`Login tentado com Email/Usuário: ${email} e Senha: ${password}`);
            // Aqui você integraria com seu backend para autenticação real
            closeModal(loginModal);
            loginForm.reset(); // Limpa o formulário
        });
    }

    if (clientSignupForm) {
        clientSignupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('clientName').value;
            const email = document.getElementById('clientEmail').value;
            const password = document.getElementById('clientPassword').value;
            alert(`Cadastro de Cliente: Nome - ${name}, Email - ${email}`);
            // Aqui você integraria com seu backend para registrar o cliente
            closeModal(clientSignupModal);
            clientSignupForm.reset();
        });
    }

    if (professionalSignupForm) {
        professionalSignupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('professionalName').value;
            const email = document.getElementById('professionalEmail').value;
            const password = document.getElementById('professionalPassword').value;
            const type = document.getElementById('professionalType').value;
            const creaCau = document.getElementById('professionalCreaCau').value;
            alert(`Cadastro de Profissional: Nome - ${name}, Email - ${email}, Tipo - ${type}, CREA/CAU - ${creaCau}`);
            // Aqui você integraria com seu backend para registrar o profissional
            closeModal(professionalSignupModal);
            professionalSignupForm.reset();
        });
    }

    // Scroll suave para as âncoras da navegação
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});