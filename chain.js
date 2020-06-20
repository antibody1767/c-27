class Chain {
    constructor(body1,body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 10


        }
        this.chain= Constraint.create(options);
        World.add(world, this.chain);
        


    }

    display(){
        var b1=this.chain.bodyA.position;
        var b2 = this.chain.bodyB.position;
        strokeWeight(4);
        line(b1.x,b1.y,b2.x,b2.y);

    }
}