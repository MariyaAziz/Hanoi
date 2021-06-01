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
      //var ang=this.body.angle;
      push();
      translate(pos.x,pos.y);
      //rotate(ang);
      rectMode(CENTER);
      //ellipseMode(RADIUS);
      fill(this.color);
      rect(0,0, this.width, this.height);
      pop();
    }

     move(){
      if(this.body==tower1[tower1.length-1].body){
      console.log("move fn t1")
      positions.push([this.body.position.x,this.body.position.y])
     // console.log(positions)
       Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
      }

      else if(this.body==tower2[tower2.length-1].body){
      console.log("move fn t2")
        positions.push([this.body.position.x,this.body.position.y])
        //console.log(positions)
        Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
      }

      else if(this.body==tower3[tower3.length-1].body){
          console.log("move fn t3")
          positions.push([this.body.position.x,this.body.position.y])
          //console.log(positions)
          Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY});
      }
    }

    drop(){
      //tower1
      if(this.body.position.x>225 && this.body.position.x<475){
        if(tower1.length==0){
          console.log("t1 if no disk");
          Matter.Body.setPosition(this.body,{x:g1.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t1 push t2 pop");
            tower1.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t1 push t3 pop");
            tower1.push(tower3.pop());
            positions=[];
          }
        }

        else if(this.body.width < tower1[tower1.length-1].width){
          console.log("t1 if bigger disk");
          Matter.Body.setPosition(this.body,{x:g1.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t1 push t2 pop");
            tower1.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t1 push t3 pop");
            tower1.push(tower3.pop());
            positions=[];
          }
        }

        else{
          if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t1 back to t1");
            Matter.Body.setPosition(this.body,{x:350,y:250});
            positions=[];
          }
          else if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t1 back to t2");
            Matter.Body.setPosition(this.body,{x:650,y:250});
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t1 back to t3");
            Matter.Body.setPosition(this.body,{x:950,y:250});
            positions=[];
          }
        }
      }

      //tower2
      if(this.body.position.x>525 && this.body.position.x<775){
        if(tower2.length==0){
          console.log("t2 if no disk");
          Matter.Body.setPosition(this.body,{x:g2.body.position.x,y:this.body.position.y});

          if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t2 push t1 pop");
            tower2.push(tower1.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t2 push t3 pop");
            tower2.push(tower3.pop());
            positions=[];
          }
        }

        else if(this.body.width < tower2[tower2.length-1].width){
          console.log("t2 if bigger disk");
          Matter.Body.setPosition(this.body,{x:g2.body.position.x,y:this.body.position.y});

          if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t2 push t1 pop");
            tower2.push(tower1.pop());
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t2 push t3 pop");
            tower2.push(tower3.pop());
            positions=[];
          }
        }
        
        else{
          if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t2 back to t1");
            Matter.Body.setPosition(this.body,{x:350,y:250});
            positions=[];
          }
          else if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t2 back to t2");
            Matter.Body.setPosition(this.body,{x:650,y:250});
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t2 back to t3");
            Matter.Body.setPosition(this.body,{x:950,y:250});
            positions=[];
          }
          // Matter.Body.setPosition(this.body,{x:positions[0][0],y:positions[0][1]});
          // positions=[];
        }
      }

      //tower3
      if(this.body.position.x>825 && this.body.position.x<1075){
        if(tower3.length==0){
          console.log("t3 if no disk");
          Matter.Body.setPosition(this.body,{x:g3.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t3 push t2 pop");
            tower3.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t3 push t1 pop");
            tower3.push(tower1.pop());
            positions=[];
          }
        }

        else if(this.body.width < tower3[tower3.length-1].width){
          console.log("t3 if bigger disk");
          Matter.Body.setPosition(this.body,{x:g3.body.position.x,y:this.body.position.y});

          if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t3 push t2 pop");
            tower3.push(tower2.pop());
            positions=[];
          }
          else if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t3 push t1 pop");
            tower3.push(tower1.pop());
            positions=[];
          }
        }
        
        else{
          if(positions[0][0]>225 && positions[0][0]<475){
            console.log("t3 back to t1");
            Matter.Body.setPosition(this.body,{x:350,y:250});
            positions=[];
          }
          else if(positions[0][0]>525 && positions[0][0]<775){
            console.log("t3 back to t2");
            Matter.Body.setPosition(this.body,{x:650,y:250});
            positions=[];
          }
          else if(positions[0][0]>825 && positions[0][0]<1075){
            console.log("t3 back to t3");
            Matter.Body.setPosition(this.body,{x:950,y:250});
            positions=[];
          }
         
        }
      }
    }
  };