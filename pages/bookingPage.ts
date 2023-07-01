import { Page } from "playwright";

export default class bookingPage{

    constructor(public page:Page){

    }

     async clickLogo(){
        await this.page.click('//a[@id=\'HeaderControl_hlLogo\']//img[1]')        
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

    async pause(){
        await  this.page.pause()
    }

    async timeWait(cantidad){
        await this.page.waitForTimeout(cantidad)
    }

    async actionTab(){
        await this.page.keyboard.press('Tab')    
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