
var menu = document.getElementById('container-menu');

var item = document.getElementById('item');
var btnaction= document.getElementById("action");
var fuc= "mostrar";
var icono="glyphicon glyphicon-align-justify icon-menu";
  btnaction.addEventListener("click", addEv);
function addEv(){
  if (fuc=="mostrar"){
    mostrar();
  }else {
    ocultar();
  }

}
function mostrar(){

    item.style.position="absolute";
     item.style.zIndex="3";

     menu.style.padding = '26px 26px 200vw 200vw';
     menu.style.zIndex="1";
     menu.style.background= "linear-gradient(10deg, #313112, #2E2E22)";
    item.style.display = 'block';
    icono="fas fa-window-close icon-menu";
    btnaction.className=icono;
    fuc= "cerrar";
}

function ocultar(){
    menu.style.padding = '6px 6px 2px 2px';
   menu.style.background= "none";
    item.style.display = 'none';
    icono="glyphicon glyphicon-align-justify icon-menu";
      btnaction.className=icono;
    fuc= "mostrar";
}
