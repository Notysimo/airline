const loginPage = require('../../pages/login.page');
const reservationPage = require('../../pages/reservation.page');
const assert = require('assert');
const user = require('../../data/login');
const page = require('../../pages/pages');

describe('new tours page', () => {
    it('verify that it is posible to login in the main page', () => {
        browser.url('http://newtours.demoaut.com/mercurysignon.php');
        const dataUser = {
            username: user.user.login,
            password: user.user.password
        };
        page.login.fillForm(dataUser);
        page.reservation.fillForm();
        //loginPage.fillForm(dataUser);
        //reservationPage.fillForm();
        const title = browser.getTitle();
        assert.equal(title, 'Find a Flight: Mercury Tours:');
        console.log('Title is: ' + title);
    })
})


