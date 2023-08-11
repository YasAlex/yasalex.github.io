var currentPage="";
var sectionIndicators="";
var disconnections=0;
var latestConnectionTime;
function homeFn()
{
  loadContent('https://yasalex.github.io/LCV001/bdmain.html');
  //loadSectionDelay('https://yasalex.github.io/LCV001/indicators.html','indicators', 100);
  loadSectionFromTextDelay(sectionIndicators, 'indicators',600);
}
function newsFn()
{
  loadContent('https://yasalex.github.io/LCV001/bdtwo.html');
  //loadSectionDelay('https://yasalex.github.io/LCV001/indicators.html','indicators', 100);
  loadSectionFromTextDelay(sectionIndicators, 'indicators',600);
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
  setInterval(other, 495);
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

  //loadSectionDelay('https://yasalex.github.io/LCV001/indicators.html','indicators', 500);
  getTextFrom('https://yasalex.github.io/LCV001/indicators.html')
  .then(textoObtenido => {
     sectionIndicators = textoObtenido;
     loadSectionFromTextDelay(sectionIndicators, 'indicators',1000);
  });
  
  
}
function loadSectionDelay(page, place, delay)
{
    setTimeout(() => {
      loadSection(page,place);
      
    }, delay); // Simulamos una modificación después de 2 segundos
}
function loadSectionFromTextDelay(text, place, delay)
{
   setTimeout(() => {
      loadSectionFromText(text,place);
      
    }, delay); // Simulamos una modificación después de 2 segundos
}
function loadSectionFromText(text, place)
{
   document.getElementById(place).innerHTML="";
   document.getElementById(place).innerHTML = text;
}
function loadSection(page, place)
{
  document.getElementById(place).innerHTML="";
  
   fetch(page)
  .then(response=> response.text())
  .then(text=> document.getElementById(place).innerHTML = text);
}
function loadContent(page){
  currentPage = page;
  document.getElementById('content').innerHTML="";
  
   fetch(page)
  .then(response=> response.text())
  .then(text=> document.getElementById('content').innerHTML = text);
}
function getTextFrom(page) {
  return fetch(page)
    .then(response => response.text())
    .then(text => {
      // Asignar el texto obtenido a la variable global
      GlobalObtainedText = text;
      return text;
    })
    .catch(error => {
      console.error('Error al obtener el texto:', error);
      return null; // Opcional: Puedes manejar el error y devolver un valor por defecto
    });
}
function other()
{
  try{document.getElementById('snrtxt').innerHTML = SensorNameVar;}catch(error){}
     var dt = new Date();
     try{document.getElementById('date').innerHTML=dt;}catch(error){loadContent(currentPage);}
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  
   if (this.readyState == 4 && this.status == 200) {
     disconnections=0;
     latestConnectionTime = new Date(); //Obtener marca de tiempo de ultima conexion
     try{document.getElementById('connectionLabel').innerHTML = "";} catch(error){}

     try{var split_text = this.responseText.split('\r\n');          }catch(error){}
     try{document.getElementById('level').innerHTML=split_text[0];   }catch(error){}
     try{document.getElementById('liters').textContent=split_text[1];}catch(error){}
     try{document.getElementById('voltage').textContent=split_text[2];}catch(error){}
     try{document.getElementById('senhigh').textContent=split_text[3];   }catch(error){}
     try{document.getElementById('senlow').textContent=split_text[4];}catch(error){}
     try{document.getElementById('pump').textContent=split_text[5]; }catch(error){}
     
   }
  };
  xhttp.ontimeout = function () {
        var currentDate = new Date();
        var timeDifferenceMs = currentDate.getTime() - latestConnectionTime.getTime();

        // Calcular días, horas, minutos y segundos
        var seconds = Math.floor(timeDifferenceMs / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        document.getElementById('connectionLabel').innerHTML = "Device Not Connected, Attempts: "+ disconnections.toString() + ", " + days + ":" + hours + ":" + minutes + ":" + seconds + "<br>Since: " + latestConnectionTime;
        disconnections++;
  };
  xhttp.open("GET", varFileDir);
  xhttp.timeout=450; //450
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



// Función para simular el cambio de valor del nivel del indicador
    function updateIndicatorLevel() {
      try{
        const indicator = document.querySelector('.indicator-inner');
        const maxLevel = 100; // Nivel máximo del indicador
        const minLevel = 0;   // Nivel mínimo del indicador
        const range = maxLevel - minLevel;
        const timePeriod = 2000; // Período de tiempo para una subida y bajada completa (en milisegundos)
        const currentTime = new Date().getTime();
        const level = Math.sin(currentTime / timePeriod) * (range / 2) + (range / 2) + minLevel;
        indicator.style.height = `${level}%`;
      } catch (error){}
      requestAnimationFrame(updateIndicatorLevel);
    }

    // Iniciar la simulación del cambio de valor del indicador
    updateIndicatorLevel();
