function setup() {
    cnv = createCanvas(800,400);
    cnv.parent("cnv");
    
    background(91,191,0);
    

}

function draw(){
    
}

function mousePressed(){
    
}

function downloadGarden(){
    document.body.innerHTML+="<a id='test' href='data:text;charset=utf-8,"+encodeURIComponent("hi")+"' download='GardenSave'>Your Download</a>";
    document.getElementById('test').click();
}