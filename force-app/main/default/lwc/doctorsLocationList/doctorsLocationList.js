import { LightningElement, track } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';

// import { loadStyle, loadScript } from 'lightning/platformResourceLoader';






export default class DoctorsLocationList extends LightningElement {

    appResources = {
        bearSilhouette: ursusResources + '/img/standing-bear-silhouette.png',
        doc1: ursusResources + '/img/doc1.png',
        doc2: ursusResources + '/img/doc2.png',
    };

    @track
    mapMarkers = [
        {
            value: 'France1',
            location: {
                City: "Cap-d'Ail",
                Country: 'France',
            },

            icon: 'custom:custom26',
            title: "Cap-d'Ail",
        },
        {
            value: 'France2',
            location: {
                City: 'Beaulieu-sur-Mer',
                Country: 'France',
            },

            icon: 'custom:custom96',
            title: 'Beaulieu-sur-Mer',
        },
        {
            value: 'France3',
            location: {
                City: 'Saint-Jean-Cap-Ferrat',
                Country: 'France',
            },

            title: 'Saint-Jean-Cap-Ferrat',
        },
        {
            value: 'France4',
            location: {
                City: 'Villefranche-sur-Mer',
                Country: 'France',
            },

            icon: 'custom:custom92',
            title: 'Villefranche-sur-Mer',
        },
        {
            value: 'France5',
            location: {
                City: 'Antibes',
                Country: 'France',
            },

            icon: 'custom:custom61',
            title: 'Antibes',
        },
        {
            value: 'France6',
            location: {
                City: 'Juan-les-Pins',
                Country: 'France',
            },

            icon: 'custom:custom74',
            title: 'Juan-les-Pins',
        },
        {
            value: 'France7',
            location: {
                City: 'Cannes',
                Country: 'France',
            },

            icon: 'custom:custom3',
            title: 'Cannes',
        },
        {
            value: 'France8',
            location: {
                City: 'Saint-Raphaël',
                Country: 'France',
            },

            icon: 'custom:custom54',
            title: 'Saint-Raphaël',
        },
        {
            value: 'France9',
            location: {
                City: 'Fréjus',
                Country: 'France',
            },

            icon: 'custom:custom88',
            title: 'Fréjus',
        },
        {
            value: 'France10',
            location: {
                City: 'Sainte-Maxime',
                Country: 'France',
            },

            icon: 'custom:custom92',
            title: 'Sainte-Maxime',
        },
    ];
    @track markersTitle = "Côte d'Azur";

    @track selectedMarkerValue = 'France1';

    handleMarkerSelect(event) {
        this.selectedMarkerValue = event.detail.selectedMarkerValue;
        console.log("selected value ",event.detail.selectedMarkerValue);
    }
    get getCSS(){
        return "slds-coordinates__item";
    }

    // mapInit = false;
    // renderedCallback() {
    //     if (this.mapInit) {
    //         return;
    //     }
    //     this.mapInit = true;
    //     Promise.all([
    //         loadScript(this, ursusResources + '/js/g-map-api.js'),
    //         //loadStyle(this, ursusResources + '/style.css')
    //     ])
    //         .then(() => {
    //             this.gmap();
    //         })
    //         .catch(error => {
    //             console.log("Error Occoured During Gooagle map init", error);
    //         });
    // }

    // gmap() {
    //     // Styles a map in night mode.
    //     var map = new google.maps.Map(this.template.querySelector("div.g-map"), {
    //         center: { lat: 40.674, lng: -73.945 },
    //         zoom: 12,
    //         styles: [
    //             {
    //                 "featureType": "administrative",
    //                 "stylers": [
    //                     {
    //                         "visibility": "on"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "landscape",
    //                 "stylers": [
    //                     {
    //                         "color": "#f9f8f1"
    //                     },
    //                     {
    //                         "visibility": "simplified"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "poi",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road",
    //                 "stylers": [
    //                     {
    //                         "color": "#ffffff"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road",
    //                 "elementType": "labels.text",
    //                 "stylers": [
    //                     {
    //                         "color": "#7b8a9d"
    //                     },
    //                     {
    //                         "lightness": -5
    //                     },
    //                     {
    //                         "visibility": "simplified"
    //                     },
    //                     {
    //                         "weight": 0.5
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "visibility": "on"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "road.highway.controlled_access",
    //                 "stylers": [
    //                     {
    //                         "visibility": "off"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "transit",
    //                 "stylers": [
    //                     {
    //                         "visibility": "simplified"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "water",
    //                 "stylers": [
    //                     {
    //                         "color": "#9bdbfb"
    //                     },
    //                     {
    //                         "weight": 8
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "water",
    //                 "elementType": "geometry.fill",
    //                 "stylers": [
    //                     {
    //                         "color": "#9bdbfb"
    //                     }
    //                 ]
    //             },
    //             {
    //                 "featureType": "water",
    //                 "elementType": "geometry.stroke",
    //                 "stylers": [
    //                     {
    //                         "weight": 2
    //                     }
    //                 ]
    //             }
    //         ]
    //     });
    // }
    @track
    searchTerm = "";
    testAll = [
        {
          "id": 1,
          "isavailable": true,
          "name": "Maria Sequeira, MD"
        },
        {
          "id": 2,
          "name": "Daniel Garfinkel, MD"
        },
        {
          "id": 3,
          "name": "Jennifer Kozhin-Revich, DO"
        },
        {
          "id": 4,
          "isavailable": true,
          "name": "Chun-kit Chan, DO"
        },
        {
          "id": 5,
          "name": "Kevin J. Guo, MD"
        },
        {
          "id": 6,
          "name": "Elizabeth Sharp, MD"
        },
        {
          "id": 7,
          "name": "Zoe Liu, MD"
        },
        {
          "id": 8,
          "name": "Dev Jack, MD"
        },
        {
          "id": 9,
          "name": "Peter Moss, DO"
        },
        {
          "id": 10,
          "name": "Lebron James, MD"
        }
      ];
    handleSearchTermChange(event){
        const searchTermC = event.target.value;
        this.searchTerm=searchTermC;
        console.log("filtered test",searchTermC);
        
        const result = this.testAll.filter(function(item) {
            return item.name.toLocaleLowerCase().includes(searchTermC.toLocaleLowerCase());
          },this);
          if(result.length>0){
              this.test=result;
          }else{
              this.test=this.testAll;
          }
        console.log("filtered test",this.test);
        
    }
@track
test = this.testAll;
}