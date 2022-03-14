import { LightningElement, wire } from 'lwc';
import getAllEvents from '@salesforce/apex/BearController.getAllEvents';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';
import icsUrl from "@salesforce/resourceUrl/ics";



export default class ColorTest extends LightningElement {
    @wire(getAllEvents)
    events;
    connectedCallback(){
        loadScript(this, icsUrl ).then(() => {
        // your code with calls to the JS library
        console.log("file loaded");
        });
    }
    openGoogle(){
        var url = this.URL; // get from processing apex response
        window.open(url, "_blank");
    }
    clickTest(e){
        let index=e.target.value;
        var cal = ics();
        cal.addEvent(this.events.data[index].Subject,this.events.data[index].Description?this.events.data[index].Description.replace(/[\r\n]+/g," "):'',this.events.data[index].Location?this.events.data[index].Location:'' ,this.events.data[index].StartDateTime, this.events.data[index].EndDateTime);
        cal.download("test");
    }
}