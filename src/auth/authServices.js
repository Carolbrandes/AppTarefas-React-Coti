const ACCESS_TOKEN = 'ACCESS_TOKEN';
const USER_EMAIL = "USER_EMAIL";

//método para autenticação
export const signIn = (email, accessToken) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(USER_EMAIL, email);
}

//método para retornar o email do usuário autenticado
export const getUserEmail = () => {
    return localStorage.getItem(USER_EMAIL);
}

//método para retornar o token do usuário autenticado
export const getAccessToken = () => {
    return localStorage.getItem(ACCESS_TOKEN);
}

//método para logout do usuario
export const signOut = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(USER_EMAIL);
}

//método para redirecionar para o dominio /admin
export const redirectToSignIn = () => {
    window.location.href = "/admin";
}

//método para redirecionar para a página de login /
export const redirectToLogin = () => {
    window.location.href = "/#/login";
}

