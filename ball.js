class Ball{
    constructor(x,y,width,height,angle){
        var options = {
           // restitution : 1 ,
            frictionAir : 0.5 ,
            density : 0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,angle,options);
        this.width = width ;
        this.height = height ;
        World.add(world, this.body);
    }
    display(){
       var pos = this.body.position ;
       var angle = this.body.angle ;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("blue");
       ellipse(0,0,this.width,this.height);
       pop();
    }
};
