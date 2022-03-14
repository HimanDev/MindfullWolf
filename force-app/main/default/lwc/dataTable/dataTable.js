import { LightningElement, track, wire } from "lwc";
import getListData from "@salesforce/apex/TestController.getListData";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
import { loadStyle } from "lightning/platformResourceLoader";

export default class DataTable extends LightningElement {
  connectedCallback() {
    //alert(' ** connectedCallback  ** ');
    Promise.all([loadStyle(this, ursusResources + "/dataTable_type2.css")])
      .then(() => {
        //// alert('Files loaded.');
      })
      .catch(error => {
        console.log(error);
      });
      

    }

      
  

  @track columns = [
    {
      label: "Account name",
      fieldName: "Name",
      type: "text",
      hideDefaultActions:true
    },
    {
      label: "Type",
      fieldName: "Type",
      type: "text",
      hideDefaultActions:true
    },
    {
      label: "Annual Revenue",
      fieldName: "AnnualRevenue",
      type: "Currency",
      hideDefaultActions:true
    },
    {
      label: "Phone",
      fieldName: "Phone",
      type: "phone",
      hideDefaultActions:true
    },
    {
      label: "Status",
      fieldName: "Status",
      type: "TEXT",
      hideDefaultActions:true,
      cellAttributes: { class: { fieldName: "dietCSSClass" } }
    },
    {
      label: "Website",
      fieldName: "Website",
      type: "url",
      hideDefaultActions:true
    },
    {
      label: "Rating",
      fieldName: "Rating",
      type: "test",
      hideDefaultActions:true
    }
  ];

  @track error;
  @track accList;
  serverRes;
  @wire(getListData)
  wiredAccounts({ error, data }) {
    if (data) {
      this.accList = data;
      this.serverRes=data;
    } else if (error) {
      this.error = error;
    }
  }


  @track keyword;
  handleKeywordChange(event){
      this.keyword = event.target.value;
      this.accList=this.serverRes.filter(each => each.Name.includes(this.keyword));
  }
}