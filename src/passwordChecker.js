export class Main {
    checkMinCharacters(password) {
        return password.length >= 8;
    }
    checkSpecialCharacter(password) {
        ;
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
}
