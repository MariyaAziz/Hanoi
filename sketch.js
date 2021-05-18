const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var g1,g2,g3;
var d1,d2,d3;
var s1,s2,s3;
var disks=[];
var ground1=[];
var ground2=[];
var ground3=[];

function preload(){
    
}

function setup(){
createCanvas(windowWidth,windowHeight);

engine=Engine.create();
world=engine.world;

g1=new Ground(350,500,250,10);
g2=new Ground(650,500,250,10);
g3=new Ground(950,500,250,10);

s1=new Stand(350,380);
s2=new Stand(650,380);
s3=new Stand(950,380);

d1=new Disk(350,350,175,'purple');
d2=new Disk(350,300,125,'blue');
d3=new Disk(350,250,75,'green');
disks=[d1,d2,d3]
}

function draw(){
Engine.update(engine);
background(180);

s1.display();
s2.display();
s3.display();

g1.display();
g2.display();
g3.display();

d1.display();
d2.display();
d3.display();
}

function mouseDragged(){

  // if(d1.body.position.x===d2.body.position.x &&
  //   d1.body.position.x===d3.body.position.x){
  //   d3.move();
  // }
  // if(d1.body.position.x===d3.body.position.x){
  //   d3.move();
  // }
  // if(d2.body.position.x===d3.body.position.x){
  //   d3.move();
  // }

    for(var i=0;i<disks.length;i++){
        d=dist(mouseX,mouseY,disks[i].body.position.x,disks[i].body.position.y)
        if(d<disks[i].width && d<disks[i].height){
            // positions.push([disks[i].body.position.x,disks[i].body.position.y])
            disks[i].move();
        }
        
    }
  
}
function mouseReleased(){
  // if(d3.body.position.x>225 && d3.body.position.x<475){
  //       Matter.Body.setPosition(d3.body,{x:g1.body.position.x,y:d3.body.position.y});
  //      // ground1.push(disks[i].body);
  //     }
  //     if(d3.body.position.x>525 && d3.body.position.x<775){
  //       Matter.Body.setPosition(d3.body,{x:g2.body.position.x,y:d3.body.position.y});
  //       //ground2.push(disks[i].body);
  //     }
  //     if(d3.body.position.x>825 && d3.body.position.x<1075){
  //       Matter.Body.setPosition(d3.body,{x:g3.body.position.x,y:d3.body.position.y});
  //      // ground3.push(disks[i].body);
  //     }



    for(var i=0;i<disks.length;i++){
        if(disks[i].body.position.x != 350 && 
            disks[i].body.position.x != 650 && 
            disks[i].body.position.x != 950 ){
                console.log(i)
                disks[i].drop();
            }
    }

    // if(disks[i].body.position.x>225 && disks[i].body.position.x<475){
    //     Matter.Body.setPosition(disks[i].body,{x:g1.body.position.x,y:disks[i].body.position.y});
    //     ground1.push(disks[i].body);
    //   }
    //   if(disks[i].body.position.x>525 && disks[i].body.position.x<775){
    //     Matter.Body.setPosition(disks[i].body,{x:g2.body.position.x,y:disks[i].body.position.y});
    //     ground2.push(disks[i].body);
    //   }
    //   if(disks[i].body.position.x>825 && disks[i].body.position.x<1075){
    //     Matter.Body.setPosition(disks[i].body,{x:g3.body.position.x,y:disks[i].body.position.y});
    //     ground3.push(disks[i].body);
    //   }
}