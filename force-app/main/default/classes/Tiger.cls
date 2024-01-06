public class Tiger extends Animals {
    public void roar(){
        system.debug('Tiger roars..');
    }
    
    //overriding eat method from parent class(Animals class)
    public override void eat(){
	system.debug('Tigers eat meat..');          
    }
}