class Disk {
    constructor(x, y, width,color) {
      var options = {
          'friction':1.5,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, width, 40, options);
      this.width = width;
      this.height = 40;
      this.color=color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var ang=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(ang);
      rectMode(CENTER);
      //ellipseMode(RADIUS);
      fill(this.color);
      rect(0,0, this.width, this.height);
      pop();
    }

     move(){
       console.log("move fn")
       Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
    }

    drop(){
      if(this.body.position.x>225 && this.body.position.x<475){
        Matter.Body.setPosition(this.body,{x:g1.body.position.x,y:this.body.position.y});
        ground1.push(this.body);
      }
      if(this.body.position.x>525 && this.body.position.x<775){
        Matter.Body.setPosition(this.body,{x:g2.body.position.x,y:this.body.position.y});
        ground2.push(this.body);
      }
      if(this.body.position.x>825 && this.body.position.x<1075){
        Matter.Body.setPosition(this.body,{x:g3.body.position.x,y:this.body.position.y});
        ground3.push(this.body);
      }
    }
  };