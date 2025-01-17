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
    checkNotIncludePassword(password) {
        return !password.includes("IPL");
    }
    checkPassword(password) {
        return this.checkMinCharacters(password) && this.checkSpecialCharacter(password) && this.checkNumber(password) && this.checkNotIncludePassword(password);
    }
}
