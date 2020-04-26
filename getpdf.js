pnames=["carrot","broccoli","cauliflower","garlic","celery","lettuce","rosebush","snapdragon","beet","daffodil"];

function downloadPDF(){
    var canvas = $('canvas')[0];
    var data=canvas.toDataURL('image/jpeg');
    
    var doc = new jsPDF();

    doc.addImage(data, 'JPEG', 5, 5, 200, 100);
     
 
    shopa=[];
    
    shopa["carrot"]=0;
    
    shopa["broccoli"]=0;

    shopa["cauliflower"]=0;
    
    shopa["garlic"]=0;
    
    shopa["celery"]=0;
    
    shopa["lettuce"]=0;
    
    shopa["rosebush"]=0;
    
    shopa["snapdragon"]=0;
    
    shopa["beet"]=0;
    
    shopa["daffodil"]=0;
    
    for(i=0;i<g.plants.length;i++){
        shopa[g.plants[i].name]+=1;
    }

    doc.setFontSize(12);
    yset=0
    for(i=0;i<pnames.length;i++){
        if(shopa[pnames[i]]!=0){
        var splitTitle = doc.splitTextToSize(plantinfoarray[pnames[i]], 200);   
        doc.text(5, 110+yset*20, splitTitle);
        yset+=1;
        }
    }

    doc.save('a4.pdf')
}