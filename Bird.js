class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.trajectory = [];
    this.smokeimg = loadImage("sprites/smoke.png");
  }

  display() {
    var birdpos = this.body.position;

    super.display();
    
    if(this.body.velocity.x>10 && birdpos.x>200){
       var pos = [birdpos.x,birdpos.y];
       this.trajectory.push(pos);
    }
    
    for(var i = 0;i<this.trajectory.length;i++){
       image(this.smokeimg,this.trajectory[i][0],this.trajectory[i][1]);
       console.log("here");
    }

  }
}
