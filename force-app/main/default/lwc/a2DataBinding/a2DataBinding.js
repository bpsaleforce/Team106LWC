import { LightningElement } from 'lwc';

export default class A2DataBinding extends LightningElement {

    name="Bahtiyor"
    //or name="Bahtiyor";

    firstName="John"

    fullName=""

    handleInput(event){
        this.firstName=event.target.value  
    }

    lastName="Polat"
    
        handleFirstName(event){
        this.firstName=event.target.value
    }

    handleLastName(event){
        this.lastName=event.target.value
    }

    get fullNamePrivider(){
    this.fullName=this.firstName+" "+this.lastName.toUpperCase();
    
return this.fullName

}

Num1=0;
Num2=0;
total;

handlerNum1(event){
    this.Num1=Number(event.target.value)
}
handlerNum2(event){
    this.Num2=Number(event.target.value)
}
 
/*
total=this.Num1+this.Num2
Sum=this.total
//the following code above doesnt make it work dynamic,
//in order the code to work complete dynamic we must use get function
*/
get Sum(){
   if(this.Num2<11) {
   this.total=this.Num1+this.Num2
    return this.total
   } else {
    return "Enter Second Number Range: 1-10"
   }

}


}