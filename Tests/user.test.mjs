import {expect} from 'chai'
import {Axios} from 'axios'
import {describe, it} from 'mocha'


describe('User registration - Unhappy paths', () => {
    it('Should fail user registration with blank password', () => {

    })
    it('Should fail user registration with blank username', () => {

    })
    it('Should fail user registration with unmatching confirmation password', () => {

    })
    it('Should fail user registration with already existing username', () => {

    })
    it('Should fail user registration with password shorter than 8 characters', () => {

    })
    it('Should fail user registration with password that does not contain at least one digit', () => {

    })
    it('Should fail user registration with password that does not contain at least one special character', () => {

    })
})

describe('User registration - Happy paths', () => {
    it('Should successfully register user with a valid username and password', () => {

    });

    it('Should successfully register user with a valid username and strong password', () => {

    });

    it('Should successfully register user when all required fields are provided', () => {

    });

    it('Should hash the user password before storing it in the database', () => {

    });

})

describe('User log in - Unhappy paths', () => {
    it('Should not log in non-existing users', () => {})
    it('Should not log in already logged in users', () => {})
    it('Should not log out users who are not logged in', () => {})
    it('Should not create session for log in failure', () => {})
})

describe('User log in - Happy paths', () => {
    it('Should log in existing users with valid credentials', () => {})
    it('Should create a session upon successful log in', () => {})
    it('Should log out a logged in user upon log out', () => {})
    it('Should delete the user session upon log out', () => {})

})