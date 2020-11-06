class Log {

constructor(x,y,height,angle){
var options={
restitition : 0.8,
friction : 0.3,
density : 1.0
}
this.body=Bodies.rectangle(x,y,height,width,options);
this.width=20;
this.height=height;
Matter.Body.setAngle(this.body,angle);

World.add(world,this.body);
}

display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate()
    rectMode(CENTER);
    
}
}