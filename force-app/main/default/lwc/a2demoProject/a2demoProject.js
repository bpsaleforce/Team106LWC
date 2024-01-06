import { LightningElement } from 'lwc';

export default class A2demoProject extends LightningElement {
    num1=0
    num2=0
    result=0

    number1(){
       this.result==0 ? this.result=''+1: this.result=''+this.result+1;
        
         }
    
    number2(){
        this.result==0 ? this.result=''+2: this.result=''+this.result+2;
             
          }  
          
    number3(){
       this.result==0 ? this.result=''+3: this.result=''+this.result+3;
        
         }
    
    number4(){
        this.result==0 ? this.result=''+4: this.result=''+this.result+4;
             
          }           
          
    number5(){
            this.result==0 ? this.result=''+5: this.result=''+this.result+5;
             
              }
         
    number6(){
             this.result==0 ? this.result=''+6: this.result=''+this.result+6;
                  
               }  
               
    number7(){
            this.result==0 ? this.result=''+7: this.result=''+this.result+7;
             
              }
         
    number8(){
            this.result==0 ? this.result=''+8: this.result=''+this.result+8;  }             

    number9(){
        this.result==0 ? this.result=''+9: this.result=''+this.result+9;      
             }
             
    number0(){
        this.result==0 ? this.result=''+0: this.result=''+this.result+0;      
    } 
                   
    comma(){
         this.result==0 ? this.result=0+',': this.result.includes(',') ? this.result : this.result + ',';
                     
             }  
    zero(){
        this.result=0             
            }                 
            }