public with sharing class AccountWireController {
   
    @AuraEnabled(cacheable=true)
    public static List<account> getAllRecords1(){
        List<account> accList=[Select id,name from account];
        return accList;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<account> getAllRecords2(String accName){
        string queryAccount = 'SELECT id , name FROM account WHERE name LIKE \'%' +  accName +'%\'    ';
         return database.query(queryAccount);
    }
}