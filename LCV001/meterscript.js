var currentPage="";
function homeFn()
{
  loadContent('https://yasalex.github.io/LCV001/bdmain.html');
}
function newsFn()
{
  loadContent('https://yasalex.github.io/LCV001/bdtwo.html');
}
function contactFn()
{
  //document.getElementById('display').innerHTML = "CONTAC";
}
function aboutFn()
{
  //document.getElementById('display').innerHTML = "ABAU";
}



function DataLoad() {
  loadHTML('https://yasalex.github.io/LCV001/bdmain.html');
  //
  setInterval(other, 500);
}
function loadHTML(page){
  currentPage = page;
  var navBar="Holo";
  var Bodie="Manolo";
  document.getElementById('bodie').innerHTML="";
   fetch('https://yasalex.github.io/LCV001/navbar.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('bodie').innerHTML = text);
  
   fetch(page)
  .then(response=> response.text())
  .then(text=> document.getElementById('content').innerHTML = text);

  document.addEventListener("DOMContentLoaded", function() {
            document.getElementById('snrtxt').innerHTML = "Hola Mundo";
        });
}

function loadContent(page){
  currentPage = page;
  document.getElementById('content').innerHTML="";
  
   fetch(page)
  .then(response=> response.text())
  .then(text=> document.getElementById('content').innerHTML = text);
}

function other()
{
  
     var dt = new Date();
     try{document.getElementById('date').innerHTML=dt;}catch(error){loadContent(currentPage);}
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  
   if (this.readyState == 4 && this.status == 200) {
     try{document.getElementById('connectionLabel').innerHTML = "";} catch(error){}

     try{var split_text = this.responseText.split('\r\n');          }catch(error){}
     try{document.getElementById('flujo').innerHTML=split_text[0];   }catch(error){}
     try{document.getElementById('litros').textContent=split_text[1];}catch(error){}
     try{document.getElementById('pulsos').textContent=split_text[2];}catch(error){}
     try{document.getElementById('ppl').textContent=split_text[3];   }catch(error){}
     try{document.getElementById('m3type').textContent=split_text[4];}catch(error){}
     try{document.getElementById('input').textContent=split_text[5]; }catch(error){}
     
   }
  };
  xhttp.ontimeout = function () {
        document.getElementById('connectionLabel').innerHTML = "Device Not Connected";
    };
  xhttp.open("GET", varFileDir);
  xhttp.timeout=450;
  try {xhttp.send(null);}catch (error) {}
}
function N0P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X0")}
function N1P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X1")}
function N2P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X2")}
function N3P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X3")}
function N4P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X4")}
function N5P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X5")}
function N6P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X6")}
function N7P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X7")}
function N8P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X8")}
function N9P(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]+"/nw/X9")}

function BKSP(){ var spli = varFileDir.split("/");fetch("http://"+spli[2] + "/nw/xbksp"   )}
function CLR(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]  + "/nw/xci/0"  )}
function RST(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]  + "/nw/xres/1" )}
function PRST(){ var spli = varFileDir.split("/");fetch("http://"+spli[2] + "/nw/xpr/0"  )}
function PPL(){ var spli = varFileDir.split("/");fetch("http://"+spli[2]  + "/nw/xppl"   )}
function RLON(){ var spli = varFileDir.split("/");fetch("http://"+spli[2] + "/nw/xgpio/1")}
function RLOF(){ var spli = varFileDir.split("/");fetch("http://"+spli[2] + "/nw/xgpio/0")}
