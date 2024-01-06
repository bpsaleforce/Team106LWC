import { LightningElement } from 'lwc';

export default class A06vehicleComposition extends LightningElement {
    brandOfVehicle='Honda'

    handleBrandName(e){
        this.brandOfVehicle=e.target.value
    }

    engineModelFromVehicle='CTI'

    handleEngineModel(ev){

      this.engineModelFromVehicle = ev.target.value
    }

    fuelType='Electric'

    handlefueltype(ev){

      this.fuelType = ev.target.value
    }

    secilen='';
    seceneklerArray= [ {label : 'Toyota' , value:'Toyota'},
                       {label : 'BMW' , value:'BMW'},
                       {label : 'Honda' , value:'Honda'},
                       {label : 'Mercedes' , value:'Mercedes'}
                    ]
    
    get secenekler(){
    
        return this.seceneklerArray
    } 
    
    handlePicklist(event){
    
        this.secilen = event.detail.value;
    }
}