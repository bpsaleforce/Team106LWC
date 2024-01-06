import { LightningElement } from 'lwc';

export default class Homework1 extends LightningElement {

    name='';
    reversename=''
    lastname='';
    fullname='';
    age='';
    Reverse=false;

   namechange(ev){
    this.name=ev.target.value;
   } 

   lastnamechange(ev){
    this.lastname=ev.target.value;
   } 

   agechange(ev){
    this.age=ev.target.value;
   } 
   
   get fullNamefunc(){
   return  this.fullname=this.name+' '+this.lastname+' '+this.age;
   }

   handleClick(ev){
    this.Reverse=ev.target.checked;
       }
    //let reversName1=this.name.reverse;

    get ReverseNamefunc() {
        //return this.reversename=this.name.reverse();
        return this.name.split("").reverse().join("")+' '+this.lastname.split("").reverse().join("")+' '+this.age.split("").reverse().join("");
    }
  /*function reverseWords(name) {
  let newString = name.split(" ");
  newString.reverse();
  newString = newString.join(" ");
  return newString;
  */
}

   

//let reversedString = reverseWords(fullname);