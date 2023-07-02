import { expect, test } from '@playwright/test'
import bookingPage from '../pages/bookingPage'
import LoginPage from '../pages/loginPage'


test.describe("Page DXHotel Test", async () => {

test("addBooking to DXHotel", async ({ page, baseURL }, testInfo) => {

    console.log('TITLE: ' + testInfo.title)
    const booking = new bookingPage(page)        
    await page.goto(`${baseURL}`); 
    await page.waitForEvent('load')    
    await booking.enterLocation('New York City, USA')   
    await booking.enterCheckIn(booking.addDaysToDate(2))
    await booking.actionTab()    
    await booking.enterCheckOut(booking.addDaysToDate(7))
    await booking.enterRooms('2')
    await booking.clickUpAdult()
    await booking.clickUpAdult()    
    await booking.dblClick('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_I')
    await booking.enterAdults('3')
    await booking.dblClick('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_ChildrenSpinEdit_I')
    await booking.enterChildren('2')        
    await booking.clickSearch()    
})

test("loginSuccefull", async ({ page, baseURL }, testInfo) => {

    console.log('TITLE: ' + testInfo.title)
    const login = new LoginPage(page)    
    await page.goto(`${baseURL}`); 
    await login.clickBtnLogin()
    await login.enterEmail("ruben@test.com")
    await login.enterPassword("12345")
    await login.timeWait(10000)
    await login.clickLogin()
    

})

})

