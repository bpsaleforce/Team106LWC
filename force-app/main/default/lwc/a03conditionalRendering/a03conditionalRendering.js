import { LightningElement } from 'lwc';

export default class A03conditionalRendering extends LightningElement {
    flag=true

    handleChange(ev){
        this.flag=ev.target.checked

    }



}