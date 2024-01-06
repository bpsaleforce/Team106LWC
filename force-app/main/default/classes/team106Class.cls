public class team106Class {
//Class Body:
/* Apex Class: are blueprint to create objects (samples/instance). 
 * Also class can follow members
 	* 1)Variables
 	* 2)Metohods
 	* 3)Inner Classes
 	* 4)Constructor
 *How to define a Class:
private|public|global|protected==> Required Access modifiers
virtual|abstaract|with sharing|without sharing==>(Optional) Definition Modifiers (Sharing Modes)
class className [implements interfaceName] [Extend ClassName]

Access Modifiers: (Required for outer Class): Restrict access of class
1)private: This default access modifiers. It means that the methods
*/
public static Integer stdAge=18; //Class member variable
public static String stdName='Ali'; //Class private member variable  
    
    //Variable Examples
    public static Integer checkBalance=0;
	public static Integer savingBalance=100;
  
   //Methods Examples:withdraw method():    
   //Method with void ex
    public static void deposit(Integer depAmount){
     	checkBalance+=depAmount;
        
    }
    
    // method with integer return
    public static Integer depo(Integer depAmount){
     	return checkBalance+=depAmount;         
    }
    
    // method with string return
    public static String depoStr(Integer depAmount){
     	return 'This is my balamce after deposit '+(checkBalance+=depAmount);         
    }
    
    //Method withdraw example integer
    public static Integer withdraw(Integer withDrawAmount){
        return checkBalance-=withDrawAmount;
    }
 	 //Method withdraw example string
    public static String withdrawStr(Integer withDrawAmount ){
        return 'Your current balance after withdrawal of '+withDrawAmount+' is '+(checkBalance-=withDrawAmount);
    }
        
    //Method withdraw example with 2 different variables, string and integer
    public static String withdrawStr2(String str, Integer withDrawAmount ){
        return str+withDrawAmount+', and my current balance is '+(checkBalance-=withDrawAmount);
        
    }
	    
    }