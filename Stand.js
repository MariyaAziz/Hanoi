class Stand{
    constructor(x, y) {
      var options = {
          isStatic:true
      }
      //this.body = Bodies.rectangle(x, y, 10, 250, options);
      this.x=x;
      this.y=y;
      this.width = 10;
      this.height = 250;
      this.image=loadImage("stand.PNG");

      //World.add(world, this.body);
    }
    display(){
      //var pos =this.body.position;
     // console.log(pos)
      push();
     // rectMode(CENTER);
      imageMode(CENTER);
      fill("brown");
      //rect(pos.x, pos.y, this.width, this.height)
      image(this.image,this.x,this.y, this.width, this.height);
      pop();
    }
  };