import { expect, Page, Locator } from "@playwright/test";

export default class bookingPage{
    

    constructor(public page:Page){

    }

    async enterLocation(location: string){
        await this.page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_LocationComboBox_I')
        .type(location);
    }
    
    async enterCheckIn(checkIn: string){
        await this.page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckInDateEdit_I')
        .fill(checkIn);
    }

    async enterCheckOut(checkOut: string){
        await this.page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_CheckOutDateEdit_I')
        .fill(checkOut);      
    }

    async enterRooms(rooms: string){
        await this.page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_RoomsComboBox_I')
        .fill(rooms);
    }

    async enterAdults(adults: string){
        await this.page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_I')
        .type(adults);
    }

    async enterChildren(children: string){
        await this.page.locator('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_ChildrenSpinEdit_I')
        .type(children);
    }

    async clickSearch(){
        await this.page.click('//span[text()=\'SEARCH\']')        
    }

    async clickUpAdult(){
        await this.page.click('#MainContentPlaceHolder_SearchPanel_SearchPanelLayout_AdultsSpinEdit_B-4')        
    }

    async dblClick(data){
        await this.page.dblclick(data)
    }

    async clickElement(data){
        await this.page.click(data)
    }

    #MainContentPlaceHolder_FilterFormLayout_OurRatingCheckBoxList_VI

    async pause(){
        await  this.page.pause()
    }

    async timeWait(cantidad){
        await this.page.waitForTimeout(cantidad)
    }

    async actionTab(){
        await this.page.keyboard.press('Tab')    
    }    

    async selectMoneyRange(){    

        await this.page.waitForSelector('#MainContentPlaceHolder_FilterFormLayout_NightlyRateTrackBar_T');
        const s = await this.page.$('#MainContentPlaceHolder_FilterFormLayout_NightlyRateTrackBar_T')
        let ele = this.page.locator('#NightyRateTrackBarLabel_L')
        let text = await ele.innerHTML().valueOf();
//        console.log('Initial text: ' + text);
        let targetAmount = "$200";
        let isCompleted = false;
        if (s) {
            while (!isCompleted) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await this.page.mouse.move(srcBound.x + srcBound.width / 2,
                        srcBound.y + srcBound.height / 2)
                    await this.page.mouse.down();
                    await this.page.mouse.move(srcBound.x + 15, srcBound.y + srcBound.height / 2);
                    await this.page.mouse.up();
                    let text = await ele.innerHTML().valueOf();
                    if (text <= targetAmount) {
                        isCompleted = true;
                    }
                }
            }

        }


        await this.page.waitForTimeout(5000)
        }
    
    async viendoInfo(){
    //const contenidoII = (await this.page.locator('//td[@class=\'dxdvItem_Metropolis item dx-al\']//div[@class=\'hotel-right-block\']//div[ @class=\'price\']').all())

    
    const dats = this.page.locator('td#MainContentPlaceHolder_HotelsDataView_ICell tr')

     console.log(dats.allTextContents())
     console.log('cuantos hay¡?' , dats.all())

     for (const li of await this.page.locator('td#MainContentPlaceHolder_HotelsDataView_ICell tr').all())
  console.log('liiii ' , li)
     //console.log(dats.textContent())
     console.log(dats.allTextContents())
//console.log(dats.innerHTML())
     //console.log(dats.innerText())

/*

    const itemContainer = await this.page.locator('//div[@class=\'price\']').all()

    const randomIndex = Math.floor(Math.random()*itemContainer.length)
  
    const randomItem = itemContainer[randomIndex]

    console.log(itemContainer , randomIndex , randomItem)
        /*

    const expectedName =  await randomItem.locator('.inventory_item_name').innerText()
*/
    
/*
    console.log(await this.page.locator('//div[@class=\'price\']').innerHTML().valueOf())
    //console.log((await this.page.locator('//div[@class=\'price\']').innerText()).valueOf())
*/

}

    async selectCustomerRating(){        
        await this.page.waitForSelector('#MainContentPlaceHolder_FilterFormLayout_2');
        const s = await this.page.$('#MainContentPlaceHolder_FilterFormLayout_CustomerRatingTrackBar_T')
        let ele = this.page.locator('#CustomerRatingTrackbarLabel_R')
        let text = await ele.innerHTML().valueOf();
//console.log('Initial text: ' + text);
        let targetAmount = "3";
        let isCompleted = false;
        if (s) {
            while (!isCompleted) {
                let srcBound = await s.boundingBox();
                if (srcBound) {
                    await this.page.mouse.move(srcBound.x + srcBound.width / 2,
                        srcBound.y + srcBound.height / 2)
                    await this.page.mouse.down();
                    await this.page.mouse.move(srcBound.x + 80, srcBound.y + srcBound.height / 2);
                    await this.page.mouse.up();
                    let text = await ele.innerHTML().valueOf();
                    if (text >= targetAmount) {
                        isCompleted = true;
                    }
                }
            }

        }



        await this.page.waitForTimeout(5000)



       // expect(await this.page.innerText("#NightyRateTrackBarLabel_L")).toContain("$110");
       //console.log('modificado: '+ await this.page.locator('#CustomerRatingTrackbarLabel_R').innerHTML().valueOf())
        //.log('2. '+ await this.page.locator('#NightyRateTrackBarLabel_L').textContent().valueOf())
    }

    addDaysToDate(days) {
        // la fecha
    //const fechaactual = Date.now();
    const monthNames = 
    [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ]

    var TuFecha = new Date()
    // dias a sumar
    var dias = days;

    // nueva fecha sumada
    TuFecha.setDate(TuFecha.getDate()+ dias);

    // formato de salida para la fecha
    return (TuFecha.getDate() + ' ' + (monthNames[TuFecha.getMonth()]) + ' ' + TuFecha.getFullYear());
    
    
    }
    
}