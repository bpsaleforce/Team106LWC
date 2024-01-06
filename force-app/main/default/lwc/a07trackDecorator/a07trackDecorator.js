import { LightningElement, track } from 'lwc';

export default class A07trackDecorator extends LightningElement {

    @track 
    familyMember={
        name:'Bax' ,
        age:42

    }

    handleName(e){
        this.familyMember.name=e.target.value
        //console.log('LWC RENDERED')
    }

    handleAge(e){
        this.familyMember.age=e.target.value
        //console.log('LWC RENDERED')
    }

}