class chain{
    constructor( body1,body2){
        var options={bodyA:body1.body,bodyB:body2.body,stiffness:0.4,length:100};
        this.chain1=Constraint.create(options);
        World.add(world,this.chain1);
    }
    display(){
     var A=this.chain1.bodyA.position;
     var B=this.chain1.bodyB.position;
    line(A.x,A.y,B.x,B.y);
    }
    }