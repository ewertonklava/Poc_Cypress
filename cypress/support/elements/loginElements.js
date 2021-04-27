class LoginElements {
    // botaoLogin = () => { return '.main-header-login-content .title' }
    
    botaoLogin = () => { return '#login-button' }

    botaoRecuperarSenha = () => { return '.forgot' }

    campoUserName = () => { return '[data-test=username]'}

    campoPassword = () => { return '[data-test=password]'}

    menuLateral = () => { return '#react-burger-menu-btn'}

    logout = () => { return '#logout_sidebar_link'}
}

export default LoginElements;