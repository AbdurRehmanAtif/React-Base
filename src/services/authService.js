
import moment from "moment";

class AuthService {

    login(payload) {
        this.setTokenLocally(payload)
        return;
    }
    setTokenLocally(response) {
        const expires = moment().add(response.data.token.expires, 'seconds');
        // Store the token in local storage
        localStorage.setItem('token', response.data.token.token);
        localStorage.setItem('expiresIn', JSON.stringify(expires.valueOf()));
    }

    logout() {
        // Remove the token from local storage
        localStorage.removeItem('token');
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
}

export default new AuthService();
