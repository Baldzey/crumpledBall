class Paper{

    constructor(x,y){

 var options= {
    isStatic:false,
    restitution:0.5,
    friction:0.5,
    density:1.2,
 
 }

 
this.image = loadImage("paper.png")
 this.body = Bodies.circle(x,y,30,options);
 World.add(world,this.body);



ellipseMode(RADIUS);

}

display(){
var paperPos = this.body.position
push();
  translate(paperPos.x, paperPos.y);
  rectMode(CENTER)
  fill(255,0,255);
  imageMode(CENTER);
  
  image(this.image,0,0,50, 50);
}


}

