import { LightningElement, track } from 'lwc';

export default class A072trackWithList extends LightningElement {
    cityNames=["New York","Tokyo","Buenos Aires","Jakarta","Ankara"]
//console.log(cityNames);

/* JS for loop syntax
for(String city:cityNames){
    console.log(city)
}
*/
@track
familyList = [
    {
        id:1,
         name:'Bax',
        age:42,
        
    }  
    ]
    firstName=''
    age=0
    num=2
    handleName(e){
        this.firstName=e.target.value
    }

    handleage(e){
        this.age=e.target.value
    }

    handleClick(e){
        const famMember={
            id:this.num,
            name:this.firstName,
            age:this.age,
        }
        
        this.familyList.push(famMember)
            }
}