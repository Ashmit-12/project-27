class Bob {
    constructor(x,y,radius) {
      var options = {
          restitution: 0.1,
          friction:0.5,
          density:1.2
      }
      
      this.radius=radius;
      this.body = Bodies.circle(x,y,radius,options);     
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      fill("purple");
  ellipseMode(RADIUS);
  ellipse(pos.x,pos.y,this.radius/2,this.radius/2);
}

  };
 