import { LightningElement } from 'lwc';

export default class A10eventExample extends LightningElement {

    xCoordinate
    yCoordinate

    handleMousemove(ev){
        this.xCoordinate=ev.clientX
        this.yCoordinate=ev.clientY

    
        //this.yCoordinate=ev.pageY
        //this.xCoordinate=ev.pageX
    }
}