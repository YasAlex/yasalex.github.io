function DataLoad() {
  loadHTML();
  setInterval(other, 500);
}
function loadHTML(){
  //fetch('https://raw.githubusercontent.com/YasAlex/Web/main/MeterV001/bdmain.html')
  fetch('https://yasalex.github.io/FMV001/bdmain.html')
  .then(response=> response.text())
  .then(text=> document.getElementById('bodie').innerHTML = text);
  
  
  
  /*var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
   
  
    document.getElementById('bodie').innerHTML = this.responseText;
   
  };
  xhttp.ontimeout = function () {
        document.getElementById('connectionLabel').innerHTML = "Device Not Connected";
    };
  
  xhttp.open("GET", "https://raw.githubusercontent.com/YasAlex/Web/main/bdmain.html");
  xhttp.timeout=80;
  xhttp.send();
  */
  
}
function other()
{
  
     var dt = new Date();
     document.getElementById('date').innerHTML=dt;
  //document.getElementById('page-logo').ondragstart = function() { return false; };
  //document.getElementById('sensor-text').ondragstart = function() { return false; };
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  
   if (this.readyState == 4 && this.status == 200) {
     document.getElementById('connectionLabel').innerHTML = "";
     var split_text = this.responseText.split('\r\n');
     document.getElementById('flujo').innerHTML=split_text[0];
     document.getElementById('litros').textContent=split_text[1];
     document.getElementById('pulsos').textContent=split_text[2];
     document.getElementById('ppl').textContent=split_text[3];
     document.getElementById('m3type').textContent=split_text[4];
     document.getElementById('input').textContent=split_text[5];
     
     /*document.getElementById('output')
                         .textContent=this.responseText;*/
   }
  };
  xhttp.ontimeout = function () {
        document.getElementById('connectionLabel').innerHTML = "Device Not Connected";
    };
  xhttp.open("GET", varFileDir);
  xhttp.timeout=450;
  try {
  xhttp.send(null);
  }catch (error) {}
}
