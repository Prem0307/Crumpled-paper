class Paper{
constructor(){
    var options={
        isStatic:false,
        restitution:0.1,
        friction:2.5,
        density:1.3,

    }
    this.body = Bodies.circle(250,340,20,options);
    this.r = 20;
    this.image = loadImage("paper.png");
    World.add(world,this.body);
}
display(){

imageMode (CENTER)
image(this.image,this.body.position.x,this.body.position.y,50,50);
}

}
