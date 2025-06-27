document.addEventListener('DOMContentLoaded', function () {
    const btnLogin = document.getElementById('btn-login');
    const btnCadastro = document.getElementById('btn-cadastro');
    const formArea = document.getElementById('form-area');

    btnLogin.addEventListener('click', () => {
        formArea.innerHTML = `
            <div class="form-box">
                <h4>Login</h4>
                <form>
                    <label for="login-user">E-mail ou Usuário</label>
                    <input type="text" id="login-user" name="login-user" required>
                    
                    <label for="login-pass">Senha</label>
                    <input type="password" id="login-pass" name="login-pass" required>
                    
                    <button type="submit">Entrar</button>
                </form>
            </div>
        `;
    });

    btnCadastro.addEventListener('click', () => {
        formArea.innerHTML = `
            <div class="form-box">
                <h4>Cadastro</h4>
                <button id="cad-cliente" style="margin-bottom:12px;width:100%;">Sou Cliente</button>
                <button id="cad-profissional" style="width:100%;">Sou Profissional</button>
            </div>
        `;

        document.getElementById('cad-cliente').addEventListener('click', () => {
            formArea.innerHTML = `
                <div class="form-box">
                    <h4>Cadastro de Cliente</h4>
                    <form>
                        <label for="nome-cliente">Nome Completo</label>
                        <input type="text" id="nome-cliente" name="nome-cliente" required>
                        
                        <label for="email-cliente">E-mail</label>
                        <input type="email" id="email-cliente" name="email-cliente" required>
                        
                        <label for="senha-cliente">Senha</label>
                        <input type="password" id="senha-cliente" name="senha-cliente" required>
                        
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            `;
        });

        document.getElementById('cad-profissional').addEventListener('click', () => {
            formArea.innerHTML = `
                <div class="form-box">
                    <h4>Cadastro de Profissional</h4>
                    <form>
                        <label for="nome-prof">Nome Completo</label>
                        <input type="text" id="nome-prof" name="nome-prof" required>
                        
                        <label for="email-prof">E-mail</label>
                        <input type="email" id="email-prof" name="email-prof" required>
                        
                        <label for="profissao">Profissão</label>
                        <select id="profissao" name="profissao" required>
                            <option value="">Selecione</option>
                            <option value="arquiteto">Arquiteto</option>
                            <option value="engenheiro">Engenheiro Civil</option>
                        </select>
                        
                        <label for="senha-prof">Senha</label>
                        <input type="password" id="senha-prof" name="senha-prof" required>
                        
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
            `;
        });
    });
});