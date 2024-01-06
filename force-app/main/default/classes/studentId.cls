public class studentId {
	//type code to create id for each student
	//id format:year+initials of name and last name+age+counter
	//public Date birthyear=new Date.newInstance(1999, 02, 02);
	public String initials='';
    public Integer age=0;
    public String id='';
    public static Integer counter=1000;
    
    //creating constructor for creating student id
    public studentId(String stdName, Integer stdAge){
        initials=stdName.trim().substring(0,1)+stdName.split(' ')[1].substring(0,1);
        //string.split(' ')[1].substring(0,1);
        age=stdAge;
        this.id=date.today().year()+initials+age+counter;
        counter++;
    }
}