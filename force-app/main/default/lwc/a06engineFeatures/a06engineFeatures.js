import { LightningElement, api } from 'lwc';

export default class A06engineFeatures extends LightningElement {
  
    @api fuelType='Gas'
  //in order to grand access to variables we must use @api and import it in the beginning
    horsePower=120
    engineVolume=1.6


    secilen='';
    seceneklerArray= [ {label : 'Gas' , value:'120'},
                       {label : 'Diesel' , value:'150'},
                       {label : 'Hybrid' , value:'200'}
                    ]
    
    get secenekler(){
    
        return this.seceneklerArray
    } 
    
    handlePicklist(event){
    
        this.secilen = event.detail.value;
    }
  }