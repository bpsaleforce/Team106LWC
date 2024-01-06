public virtual class Animals {
    public void drink(){
     system.debug('All animals have drinking capabilities ..');   
    }
    
    public virtual void eat(){
	system.debug('All animals have eating capabilities ..');          
    }
    
    public void breath(){
	system.debug('All animals have breathing capabilities ..');          
    }
    
    protected string className='Apex';
    
    public string getNameOfclassName(){
         return className;
    }
    
    //overloading by 2 variaables
    public Integer add(Integer a, Integer b){
        return a+b;
    }
    //overloading by 3 variaables
    public String add(Integer a, Integer b, Integer c){
        return 'addition of 3 variales('+a+','+b+','+c+')'+' is '+(a+b+c);
    }
    
}