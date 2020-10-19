class Rope{
    constructor(bodyA,B){
        var Options={
            bodyA:bodyA,
            pointB:B,
            stiffness:0.25,
            length:200
        }
        this.pointB=B
        this.rope=Matter.Constraint.create(Options)
        World.add(world,this.rope);
    
    }
    display(){
        if(this.rope.bodyA){
        var x1y1=this.rope.bodyA.position;
        var x2y2=this.pointB;
             strokeWeight(3);
            stroke(255,255,255);
            line(x1y1.x,x1y1.y,x2y2.x,x2y2.y);
    }    
}
    
}
   