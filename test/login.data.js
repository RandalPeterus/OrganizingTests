//creating this file to store login data for reusability in tests

export default class LoginData {
    static validUser = {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
    };
    static invalidUser = {
        username: 'username',
        password: 'Password',
    };
    static notices = {
        successLogin: 'You logged into a secure area!',
        logout: 'You logged out of the secure area!',
        invalidUsername: 'Your username is invalid!',
    };
}