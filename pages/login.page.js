function loginElements() {
    return {
        username: () => { return $('[name="userName"]') },
        password: () => { return $('[name="password"]') },
        submitButton: () => { return $('[name="login"]') }
    }
}

function loginMethods() {
    const element = loginElements();

    return {
        setInfoLogin: (emailParam) => {
            element.username().waitForExist();
            element.username().clearValue();
            element.username().setValue(emailParam);
        },

        setInfoPassword: (password) => {
            element.password().clearValue();
            element.password().setValue(password);
        },

        confirmLogin: () => {
            element.submitButton().click();
        }
    }
}

function login() {
    const login = loginMethods();

    return {
        fillForm: (objLogin) => {
            login.setInfoLogin(objLogin.username);
            login.setInfoPassword(objLogin.password);
            login.confirmLogin();
        }
    }
}

module.exports = login();