import { Page } from '@playwright/test'

export default class LoginPage{

    constructor(public page : Page){

    }

    async clickBtnLogin(){
        await this.page.locator('(//div[contains(@class,\'dxbButton_Metropolis orangeButton\')]//div)[3]').click()
    }

    async enterEmail(Email: string){
        await this.page.locator('#HeaderControl_LogonControl_LoginFormLayout_txtEmail_I')
        .type(Email);
    }

    async enterPassword(Password: string){
        await this.page.locator('#HeaderControl_LogonControl_LoginFormLayout_txtPassword_I_CLND')
        .type(Password);
    }

    async pause(){
        await  this.page.pause()
    }

    async timeWait(cantidad){
        await this.page.waitForTimeout(cantidad)
    }

    async clickLogin(){
        await this.page.click('//div[@id=\'HeaderControl_LogonControl_btnLoginNow_CD\']//span[1]')        
    }

    

    
}