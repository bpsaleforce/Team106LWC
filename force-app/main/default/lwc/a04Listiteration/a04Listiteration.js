import { LightningElement } from 'lwc';

export default class A04Listiteration extends LightningElement {

cityNames=["New York","Tokyo","Buenos Aires","Jakarta","Ankara"]
//console.log(cityNames);

/* JS for loop syntax
for(String city:cityNames){
    console.log(city)
}
*/

flowerList = [
    {
        id:1,
         name:'Rose',
        family:'DikenliGuller',
        imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/gul.jpg'
    }  ,
    {
        id:2,
        name:'Tulip',
        family:'Lalegiller',
        imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/lale.jpg'
    },
    {
        id:3,
        name:'Lily',
        family:'Zambakgiller',
        imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/zambak.jpg'
    },
    {
        id:4,
        name:'Hyacinth',
        family:'Soganligiller',
        imgUrl:'http://www.leblebitozu.com/wp-content/uploads/2017/02/sumbul.jpg'
    }
    ]

}