import { LightningElement, track, wire } from "lwc";
import getListData from "@salesforce/apex/TestController.getListDataType2";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
import { loadStyle } from "lightning/platformResourceLoader";

export default class dataTableType2 extends LightningElement {
  connectedCallback() {
    //alert(' ** connectedCallback  ** ');
    Promise.all([loadStyle(this, ursusResources + "/dataTable_type2.css")])
      .then(() => {
        //// alert('Files loaded.');
      })
      .catch(error => {
        console.log(error);
      });
      if (!this.hasRendered) {
        const style = document.createElement("style");

        // CSS rule. You have to replace "c-my-component" with your component name that contains lightning-datatable
        style.innerText =
            "c-my-component lightning-datatable .slds-th__action-button {display: none;}";
        this.template
            .querySelector("lightning-datatable")
            .appendChild(style);

        this.hasRendered = true;
    }

      
  }

  @track columns = [
    {
      label: "Claim ID",
      fieldName: "ClaimId",
      type: "text",
      hideDefaultActions:true
    },
    {
      label: "Name",
      fieldName: "Name",
      type: "text",
      hideDefaultActions:true
    },
    {
      label: "Service Start Date",
      fieldName: "SSD",
      type: "text",
      hideDefaultActions:true
    },
    {
      label: "Service End Date",
      fieldName: "SED",
      type: "text",
      hideDefaultActions:true
    },
    {
        label: "Network",
        fieldName: "Network",
        type: "text",
        hideDefaultActions:true
      },
    {
      label: "Status",
      fieldName: "Status",
      type: "TEXT",
      hideDefaultActions:true,
      cellAttributes: { class: { fieldName: "dietCSSClass" } }
    },
    
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

  value;

    get options() {
        return [
            { label: 'Submitted', value: 'Submitted' },
            { label: 'In-Review', value: 'In-Review' },
            { label: 'Approved', value: 'Approved' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        this.filterRecords();
        // this.accList=this.serverRes.filter(each => each.Status.includes(this.value));
    }
    sdf;
    handleSDFChange(event){
        this.sdf = event.detail.value;
        console.log("sdf",this.sdf);
        this.filterRecords();
    }
    sdd;
    handleSDTChange(event){
        this.sdt = event.detail.value;
        this.filterRecords();
    }

    filterRecords(){
        var nameFilter=[];
        var statusFilter=[];
        var sdfFilter=[];
        var sdtFilter=[];

        if(this.keyword){
            nameFilter =this.serverRes.filter(each => each.Name.includes(this.keyword));
        }else{
            nameFilter=this.serverRes;
        }
        if(this.value){
            statusFilter = nameFilter.filter(each => each.Status.toLowerCase().includes(this.value.toLowerCase()));
        }else{
            statusFilter=nameFilter;
        }
        if(this.sdf){
           const dateArray=this.sdf.split("-");
           const sdfInt=parseInt(dateArray[0]+dateArray[1]+dateArray[2]);
           sdfFilter = statusFilter.filter(each => {
            const dateArrayRec=each.SSD.split("/");
            const sdfIntRec=parseInt(dateArrayRec[2]+dateArrayRec[0]+dateArrayRec[1]); 
                if(sdfIntRec>=sdfInt){
                    return true;
                }
                return false;
           });
        }else{
            sdfFilter=statusFilter;
        }

        if(this.sdt){
            const dateArray=this.sdt.split("-");
            const sdtInt=parseInt(dateArray[0]+dateArray[1]+dateArray[2]);
            sdtFilter = statusFilter.filter(each => {
             const dateArrayRec=each.SED.split("/");
             const sdtFilterRec=parseInt(dateArrayRec[2]+dateArrayRec[0]+dateArrayRec[1]); 
                 if(sdtFilterRec<=sdtInt){
                     return true;
                 }
                 return false;
            });
         }else{
            sdtFilter=sdfFilter;
         }
            
         this.accList=sdtFilter;
    }

  @track keyword;
  handleKeywordChange(event){
      this.keyword = event.target.value;
      this.filterRecords();
      //this.accList=this.serverRes.filter(each => each.Name.includes(this.keyword));
  }
}