import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage()

beforeEach(function () {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

})

describe('All Login Tests', function () {

    it('Login with valid credential', () => {

        loginPage.enterusername('Admin')
        loginPage.enterpassword('admin123')
        loginPage.clicklogin()
        cy.get('.oxd-userdropdown-tab').click()
    })

    it('Login with invalid username', () => {

        loginPage.enterusername('Admin123')
        loginPage.enterpassword('admin123')
        loginPage.clicklogin()
        cy.get('.oxd-userdropdown-tab').click()
    })
})

it('Login with invalid password', () => {

    loginPage.enterusername('Admin')
    loginPage.enterpassword('admin1234')
    loginPage.clicklogin()
    cy.get('.oxd-userdropdown-tab').click()
})
