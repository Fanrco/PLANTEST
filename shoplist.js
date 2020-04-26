

function createShopList(){
    listele=document.getElementById("shoplist");
     
    while(listele.firstChild) { 
            listele.removeChild(listele.firstChild); 
    } 
    
    pnames=["carrot","broccoli","cauliflower","garlic","celery","lettuce","rosebush","snapdragon","beet","daffodil"];
    
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
    pflag=false;
    totalcost=0;
    for(i=0;i<pnames.length;i++){
        if(shopa[pnames[i]]!=0){
            totalcost+=plantprice[pnames[i]] ;
        }
    }
    
    for(i=0;i<pnames.length;i++){
        if(shopa[pnames[i]]!=0){
            pflag=true;
            var link = document.createElement('a')
            
            link.href = plantbuy[pnames[i]];
            link.textContent = "Buy "+shopa[pnames[i]]+"x "+pnames[i]+" Seeds: $"+plantprice[pnames[i]];
            link.target="_blank";
            listele.appendChild(link);
            listele.appendChild(document.createElement('br'));
            listele.appendChild(document.createElement('br'));
        }
    }
    
    var para = document.createElement('H1');
    var node1 = document.createTextNode("Total Cost: $"+totalcost);
    para.appendChild(node1);
    
    listele.appendChild(para);
}