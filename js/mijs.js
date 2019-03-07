
var menu = document.getElementById('container-menu');

var item = document.getElementById('item');
var btnaction= document.getElementById("action");
var fuc= "mostrar";
var icono="fas fa-bars icon-menu";
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

    item.style.display = 'block';
    icono="fas fa-window-close icon-menu";
    btnaction.className=icono;
    fuc= "cerrar";
}

function ocultar(){
    menu.style.padding = '26px 26px 52px 52px';

    item.style.display = 'none';
    icono="fas fa-bars icon-menu";
      btnaction.className=icono;
    fuc= "mostrar";
}
