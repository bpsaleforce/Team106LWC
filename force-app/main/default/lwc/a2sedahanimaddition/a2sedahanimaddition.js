import { LightningElement } from 'lwc';


export default class A2sedahanimaddition extends LightningElement {

    sayi1 =0;
sayi2 =0;
toplam=0
handlesayi1(event){
    this.sayi1= Number(event.target.value)
}

    handlesayi2(event){
        this.sayi2=  Number(event.target.value)
    }
get sum(){
this.toplam=this.sayi1 + this.sayi2;
return this.toplam;
}

}