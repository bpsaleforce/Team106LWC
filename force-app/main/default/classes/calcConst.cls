public class calcConst {
    public Double calc(String oper, Double a, Double b){
        if(oper=='+'){
         return a+b;   
        }else if(oper=='-'){
          return a-b;   
        }else if(oper.equalsIgnoreCase('*')){
          return a*b;   
        }else if(oper.equals('/')){
            if(b!=0){
                 return a/b;}
            else {
                return null;
            }
        } else 
        return null;
    }
    public static String calcSwitch(String oper, Double a, Double b){
        switch on oper {
             when '+' {
                 return ' '+(a+b);
            }
            when '-' { 
                return ''+(a-b);
            }
            when '*' {
                return ''+(a*b);
            }
            when '/' { 
                if(b!=0){
                //system.assertNotEquals(b==0, b==0);
                return ''+(a/b);          
                } else {
                    return 'given number cant be divided by 0';
                }}
            when else {
                 return 'Please enter valid operation' ;     
                     }
            
    }}
public Decimal myBalance=0;
    public Decimal deposit(Decimal dp){
       return myBalance+= dp;
    }
	//Account accObj=new Account;
    //accObj.
}