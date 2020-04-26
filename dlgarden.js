document.addEventListener('contextmenu', event => event.preventDefault());

var fileSelector = document.createElement('input');
fileSelector.setAttribute('type', 'file');

fileSelector.onchange = e => { 

   // getting a hold of the file reference
   var file = e.target.files[0]; 

   // setting up the reader
   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');

   // here we tell the reader what to do when it's done reading...
   reader.onload = readerEvent => {
      var content = readerEvent.target.result; // this is the content!
      g.import(content);
   }

}

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function downloadGarden(){
    var gfilename = prompt("Please enter a name for your garden file", "Garden Save");
    if (gfilename != null) {
    download(gfilename+'.txt',g.export());
    }
    
}

function clearGarden(){
    cleartrue=confirm("Are you sure you want to delete your garden?");
    
    if(cleartrue){
        g=new Garden();
    }
}

function loadGarden(){ 
    fileSelector.click();
     return false;
    
}