public class constructor {
	public Decimal myBalance=0; // non static variable
    public Decimal deposit(Decimal dp){
       return myBalance+= dp;
    }    
    //Create variable 123
    public Double myNum=100;
    public constructor(){
        //1. Constructor is inside the class
        //2. Constructor has the same name as class name
        //3. Unlike method constructor doesnt have return type
        //When you create your own constructor, apex will
        //delete default one 
   	myNum=500;
    }
}