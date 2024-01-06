import { LightningElement } from 'lwc';

export default class A07Reactive extends LightningElement {
    firstName='Bax'

    handleInput(e){
        this.firstName=e.target.value
        console.log('LWC RENDERED')
    }
}