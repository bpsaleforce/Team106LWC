public class classWithCustomConst { 
    //creting variables
    public Decimal price=100;
    public string product='';
    public Decimal newPrice=0;
    
    //Create constructor.1st constructor
    public classWithCustomConst(){
        newPrice=250;
        price+=500;
         
    }
    
	//Another Overload constructor.2nd constructor
	 public classWithCustomConst(Decimal prc){
         //Body can be different then previous one
        newPrice=prc;
        //price+=500;
        
    }
    //Anothe overload.3rd constructor
    public classWithCustomConst(Decimal prc, String name){
         //Body can be different then previous one
        newPrice=prc;
        product=name; 
        //price+=500;
         
    }
}