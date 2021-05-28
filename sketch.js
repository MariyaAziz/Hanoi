const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var g1,g2,g3;
var d1,d2,d3;
var s1,s2,s3;
var disks=[];
var tower1=[];
var tower2=[];
var tower3=[];
positions=[];

function preload(){
    
}

function setup(){
createCanvas(windowWidth,windowHeight);

engine=Engine.create();
world=engine.world;

g1=new Ground(350,500,250,10);
g2=new Ground(650,500,250,10);
g3=new Ground(950,500,250,10);
g4=new Ground(windowWidth/2,windowHeight-10,windowWidth,10)

s1=new Stand(350,380);
s2=new Stand(650,380);
s3=new Stand(950,380);

d1=new Disk(350,350,175,'purple');
d2=new Disk(350,300,125,'blue');
d3=new Disk(350,250,75,'green');
tower1=[d1,d2,d3]
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
g4.display();


d1.display();
d2.display();
d3.display();

}

function mouseDragged(){

    for(var i=0;i<disks.length;i++){
        d=dist(mouseX,mouseY,disks[i].body.position.x,disks[i].body.position.y)
        if(d<disks[i].width && d<disks[i].height){
           
            disks[i].move();
        }
        
    }
  
}
function mouseReleased(){



    for(var i=0;i<disks.length;i++){
        if(disks[i].body.position.x != 350 && 
            disks[i].body.position.x != 650 && 
            disks[i].body.position.x != 950 ){
                //console.log(i)
                disks[i].drop();
            }
    }

    
}