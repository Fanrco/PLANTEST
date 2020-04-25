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
}

function plantCursor(){
    if(selPlant!="NONE"){
        image(plantimg["carrots"],mouseX,mouseY);
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
    if(selPlant!="NONE"){
        console.log(selPlant);
    }
}

function downloadGarden(){
    document.body.innerHTML+="<a id='test' href='data:text;charset=utf-8,"+encodeURIComponent("hi")+"' download='GardenSave'>Your Download</a>";
    document.getElementById('test').click();
}

function Garden(){
    this.plants=[]
    
}

function Plant(plantname){
    this.name=plantname;
    
}

