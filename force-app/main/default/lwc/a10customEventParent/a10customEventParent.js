import { LightningElement } from 'lwc';

export default class A10customEventParent extends LightningElement {

    customer={
    name:'bax',
    age:42
    }

    handleClick(){
        const custEvent = new CustomEvent('object', {detail:this.customer} )
        this.dispatchEvent(custEvent)
      // this.dispatchEvent(new CustomEvent('cherry'))
    }

    newCustomer

    handleObject(ev){
        this.newCustomer=event.detail
    }
}