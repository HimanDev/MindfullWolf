import { LightningElement } from "lwc";
import ursusResources from "@salesforce/resourceUrl/ursus_park";
import { loadStyle } from "lightning/platformResourceLoader";

export default class DashboardProfileCard extends LightningElement {

  profileImg=ursusResources+"/img/profile-img.png";
  avatar1=ursusResources+"/img/users/avatar-1.jpg";

  connectedCallback() {
    Promise.all([loadStyle(this, ursusResources + "/css/")])
      .then(() => {})
      .catch(error => {console.log(error)});
  }
}