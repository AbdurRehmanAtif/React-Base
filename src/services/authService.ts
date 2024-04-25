
import moment from "moment";
import sanitizer from "../utils/sanitizer";
// import Security from "../utils/security";

class AuthService {

    login(payload: any) {

        this.setTokenLocally(payload)
        this.storeUserDataToLocalStorage(payload)
        return;
    }
    setTokenLocally(response: any) {

        const expires = moment().add(response.data.token.expires, 'seconds');
        // Store the token in local storage
        localStorage.setItem('token', response.data.token.token);
        localStorage.setItem('expiresIn', JSON.stringify(expires.valueOf()));
    }

    logout() {
        // Remove the token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('ajx_user_traits');
        localStorage.removeItem('expiresIn');
    }

    isAuthenticated() {
        // Check if the user is authenticated by verifying the presence of the token
        const token = localStorage.getItem('token');
        return !!token; // Double exclamation converts to boolean
    }

    isLoggedIn() {

        const expiration = this.getExpiration();
        if (expiration) {
            console.log(expiration)
            console.log(moment().isBefore(expiration))
            return moment().isBefore(expiration);
        }

    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getToken() {
        // Get the user's token from local storage
        return localStorage.getItem('token');
    }

    getExpiration() {
        const expiration = localStorage.getItem('expiresIn');
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }

    storeUserDataToLocalStorage(payload: any) {

        localStorage.setItem('ajx_user_traits', sanitizer.sanitize(['role', 'username', 'email'], payload.data))
    }

    getRole() {
        return 'USER'
    }

}

export default new AuthService();
