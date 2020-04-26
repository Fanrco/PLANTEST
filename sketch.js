function preload(){
    loadPlantImgs();
}

function setup() {
    cnv = createCanvas(800,400);
    cnv.parent("cnv");
    
    background(91,191,0);
    
    gw=10;
    gh=5;
    xoff=width/gw;
    yoff=height/gh;
    
    
    populateInfo();
    
    selplant="NONE";
    
    g=new Garden();

}

function draw(){
    background(91,191,0);
    drawAxes();
    
    plantCursor();
    g.show();
}

function plantCursor(){
    if(selplant!="NONE"){
        pimg=plantimg[selplant];
        r=(plantradius[selplant]/12)*xoff;
        pimg.resize(r,0);
        image(pimg,mouseX-r/2,mouseY-r/2);
    }
}

function drawAxes(){
    push();
    
    fill(255);
    text("1 sq ft.",0,10);
    
    stroke(255,100);
    strokeWeight(3);
    line(40,5,xoff-3,5);
    line(5,15,5,yoff-3);
    strokeWeight(1);
    
    
    for(i=0; i < gw; i++){
        line(xoff*i,0,xoff*i,height);
    }
    for(i=0; i < gh; i++){
        line(0,yoff*i,width,yoff*i);
    }
    
    pop();
    
}


function mousePressed(){
    if(mouseX>width || mouseX<0 || mouseY>height || mouseY<0){
        //donothing
    }else{
    if(mouseButton === RIGHT) {
        g.delete();
        console.log("rightclick");
    }else{
        
    
    if(selplant!="NONE"){
        console.log(selplant);
        newplant=new Plant(selplant,mouseX,mouseY);
        g.plants.push(newplant);
    }
    
    }
    createShopList();
    }
}


function Garden(){
    this.plants=[]
    
    this.show = function(){
        for(i=0; i < this.plants.length; i++){
            this.plants[i].show();
        }
    }
    
    this.delete = function(){
        na=[];
       for(i=this.plants.length-1; i >=0 ; i--){
           if(dist(mouseX,mouseY,this.plants[i].x,this.plants[i].y)>this.plants[i].r/2){
               na.push(this.plants[i]);
           }
        } 
        this.plants=na;
    }
    
    this.export=function(){
        savefile=""
        for(i=0; i < this.plants.length; i++){
            savefile+=this.plants[i].name+" "+this.plants[i].x+" "+this.plants[i].y+" ";
        }
        
        return savefile;
    }
    
    this.import=function(savefile){
        this.plants=[];
        ainfo=savefile.split(" ");
        
        for(i=0;i<((ainfo.length)/3)-1;i++){
            this.plants.push(new Plant(ainfo[i*3],Number(ainfo[i*3+1]),Number(ainfo[i*3+2])));
        }
        createShopList();
    }
}

function Plant(plantname,x,y){
    this.name=plantname;
    this.img =plantimg[this.name];
    this.r=(plantradius[this.name]/12)*xoff;
    this.img.resize(this.r,0);
    this.x=x;
    this.y=y;
    
    this.show = function(){
        image(this.img,this.x-this.r/2,this.y-this.r/2);
    }
    
}

