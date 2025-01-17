export class Main {
    checkMinCharacters(password) {
        return password.length >= 8;
    }
    checkSpecialCharacter(password) {
        ;
    return /[!@#$%^&*(),.?":{}|<>]/.test(password);
    }
    checkNumber(password) {
        return /[0-9]/.test(password);
    }
}