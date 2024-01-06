import { LightningElement } from 'lwc';

export default class Checkbox extends LightningElement {

    checkedCond=false;
    
    changeHand(ev){
        this.checkedCond=ev.target.checked;
    }
    

}