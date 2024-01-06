import { LightningElement } from 'lwc';

export default class A2dataBindingPractice extends LightningElement {

    name='Bax'
    name2='Pulat'

    handlerName(e){
        this.name=e.target.value
          }
          handlerName2(e){
            this.name2=e.target.value
              }

}