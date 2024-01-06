public class sampleClass {
	public static Integer myValue=10;
    static String myStr='AAA';
    
    //Class Member Method:No ret urn from method without any parameter
    public static void voidMethod(){
        myValue+=100; //myValue=myValue+100
        myStr='No Return from Method';     
           }
    public static Integer returnIntMethod(Integer inp){
       return myValue+=inp;
    }
    public static String returnStrMethod(String newStr){
        return myStr+=newStr;
    }
}