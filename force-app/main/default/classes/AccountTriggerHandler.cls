public class AccountTriggerHandler {

    public static void updateRating(List<Account> lst)  //beforeInsert
    {
       for(Account acc:lst){
           if(acc.Description ==null && acc.Industry=='Media') {
           acc.Description='Test before insert Trigger description';
               acc.Rating='Hot';
           } else{
               acc.Rating='Cold';
           }
              //upload test 
    	}
    }
    public static void createRelatedOpp(List<account> lst) //afterInsert
    {
        List<Opportunity> oppToBeInserted=new List<Opportunity>();
        for(Account acc:lst){
            Opportunity opp=new Opportunity();
            opp.Name=acc.Name;
            opp.AccountId=acc.Id;
            opp.StageName='Prospecting';
            opp.CloseDate=System.today();
            oppToBeInserted.add(opp);
        }
        if(oppToBeInserted!=null) //!oppToBeInserted.isEmpty is interchangable
        {
            Database.insert(oppToBeInserted);
        }
        
    }
    
    
}