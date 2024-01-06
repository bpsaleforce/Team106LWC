public class Circle extends Shapes {
    override
    public  void area(Double radius) {
        system.debug('Area of a circle with the radius of '+ radius +' is '+math.PI*math.pow(radius, 2));
    }
}