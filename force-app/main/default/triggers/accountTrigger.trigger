trigger accountTrigger on Account (before insert, before update, after insert) {
	/*
    // b
    // applying description to the inserted account
    for(Account acc:Trigger.new){
        acc.Description='Test before insert Trigger description';
            }
*/
     //using handler class for the code above. insert and before
    if(Trigger.isBefore && Trigger.isInsert){
    AccountTriggerHandler.updateRating(Trigger.new); 
    }
	else if(Trigger.isAfter){
        // code for update method
    AccountTriggerHandler.createRelatedOpp(Trigger.new); 
    }
}