class Link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
      var bhavya = {

        bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01

      }
     this.link = Constraint.create(bhavya);
        
        World.add(engine.world,this.link);
    } 

    dettach()
    {
      World.remove(engine.world,this.link);
     
    }
}

