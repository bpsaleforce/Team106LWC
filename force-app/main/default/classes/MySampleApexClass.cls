public class MySampleApexClass {
    public static Integer myValue=10;
    public static String myString='';

        public static Integer  getCalculatedValue(){
 		      
        //return (myValue+=100);
        myString+='Ali';
        system.debug(myString+' has '+myValue);
		return myValue+=25;        
    }
}