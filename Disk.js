class Disk {
    constructor(x, y, width,color) {
      var options = {
          'friction':50.0,
          'density':50.0
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
      if(this.body==tower1[tower1.length-1].body){
      //  console.log("move fn")
      positions.push([this.body.position.x,this.body.position.y])
     // console.log(positions)
       Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
      }

      if(this.body==tower2[tower2.length-1].body){
        //  console.log("move fn")
        positions.push([this.body.position.x,this.body.position.y])
        //console.log(positions)
        Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
      }

      if(this.body==tower3[tower3.length-1].body){
          //  console.log("move fn")
          positions.push([this.body.position.x,this.body.position.y])
          //console.log(positions)
          Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
      }
    }

    drop(){
      //tower1
      if(this.body.position.x>225 && this.body.position.x<475){
        if(tower1.length==0){
          Matter.Body.setPosition(this.body,{x:g1.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            tower1.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            tower1.push(tower3.pop());
            positions=[];
          }
        }

        else if(this.body.width < tower1[tower1.length-1].width){
          Matter.Body.setPosition(this.body,{x:g1.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            tower1.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            tower1.push(tower3.pop());
            positions=[];
          }
        }

        else{
          if(positions[0][0]>225 && positions[0][1]<475){
            Matter.Body.setPosition(this.body,{x:350,y:500});
            positions=[];
          }
          else if(positions[0][0]>225 && positions[0][1]<475){
            Matter.Body.setPosition(this.body,{x:350,y:500});
            positions=[];
          }
          else if(positions[0][0]>225 && positions[0][1]<475){
            Matter.Body.setPosition(this.body,{x:350,y:500});
            positions=[];
          }
        }
      }

      //tower2
      if(this.body.position.x>525 && this.body.position.x<775){
        if(tower2.length==0){
          Matter.Body.setPosition(this.body,{x:g2.body.position.x,y:this.body.position.y});

          if(positions[0][0]>225 && positions[0][0]<475){
            tower2.push(tower1.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            tower2.push(tower3.pop());
            positions=[];
          }
        }

        else if(this.body.width < tower2[tower2.length-1].width){
          Matter.Body.setPosition(this.body,{x:g2.body.position.x,y:this.body.position.y});

          if(positions[0][0]>225 && positions[0][0]<475){
            tower2.push(tower1.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            tower2.push(tower3.pop());
            positions=[];
          }
        }
        
        else{
          Matter.Body.setPosition(this.body,{x:positions[0][0],y:positions[0][1]});
          positions=[];
        }
      }

      //tower3
      if(this.body.position.x>825 && this.body.position.x<1075){
        if(tower3.length==0){
          Matter.Body.setPosition(this.body,{x:g3.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            tower3.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>225 && positions[0][0]<475){
            tower3.push(tower1.pop());
            positions=[];
          }
        }

        else if(this.body.width < tower3[tower3.length-1].width){
          Matter.Body.setPosition(this.body,{x:g3.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            tower3.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>225 && positions[0][0]<475){
            tower3.push(tower1.pop());
            positions=[];
          }
        }
        
        else{
          Matter.Body.setPosition(this.body,{x:positions[0][0],y:positions[0][1]});
          positions=[];
        }
      }
    }
  };