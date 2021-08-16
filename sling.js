class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA ,
            pointB : pointB ,
           /* restitution : 1 ,
            friction : 1 ,
            density : 0.4*/
            stiffness : 1 ,
            //length : 100 
        }
        this.pointB = pointB ;
        this.Sling = Constraint.create(options);
        //this.body = Bodies.rectangle(x,y,width,height,options);
         World.add(world, this.Sling);
    }
    display(){
        if(this.Sling.bodyA){
      var endA = this.Sling.bodyA.position ;
      var endB = this.pointB ;
       push();
       //translate(pos.x,pos.y);
      // rotate(angle);
      // rectMode(CENTER);
       stroke("pink");
       strokeWeight(4);
       line(endB.x,endB.y,endA.x,endA.y);
       pop();
    }}
    attach(body){
       this.Sling.bodyA = body ;
    }
    fly(){
        this.Sling.bodyA = null ;
    }
}