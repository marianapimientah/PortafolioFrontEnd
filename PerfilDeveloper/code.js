let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);

function obtenerDatosDelUsuario() {
  datosPersona.nombre = prompt(`Ingresa tu nombre: `);
  fechaNacimiento = prompt(`Ingresa tu año de nacimiento: `);
  datosPersona.edad = 2022 - fechaNacimiento;
  datosPersona.ciudad = prompt(`Ingresa la ciudad donde vives: `);
  confirmJs = confirm(`¿Te interesa JavaScript?: `);
    if (confirmJs == true){
      datosPersona.interesPorJs = "Sí";
    } else if (confirmJs == false) {
      datosPersona.interesPorJs = "No";
    } 
}

function renderizarDatosUsuario() {

  obtenerDatosDelUsuario();

  let nom = document.getElementById("nombre");
  let contenidoNom = document.createTextNode(datosPersona.nombre);
  nom.appendChild(contenidoNom);

  let ed = document.getElementById("edad");
  let contenidoEd = document.createTextNode(datosPersona.edad);
  ed.appendChild(contenidoEd);

  let ciu = document.getElementById("ciudad");
  let contenidoCiu = document.createTextNode(datosPersona.ciudad);
  ciu.appendChild(contenidoCiu);

  let js = document.getElementById("javascript");
  let contenidoJs = document.createTextNode(datosPersona.interesPorJs);
  js.appendChild(contenidoJs);

}

function recorrerListadoYRenderizarTarjetas() {

function crearCard (lista){
  const cardU = document.createElement('div');
  const imagen = document.createElement('img');
  const leng = document.createElement('p');
  const bim = document.createElement('p');
  
  cardU.setAttribute(
    'style',
    'border-radius: 20px; border: 1px solid #d0d0d0; margin: 15px; padding: 15px; box-shadow: 5px 5px 4px #d0d0d0; width: 350px; height: 250px'
  )
  imagen.setAttribute('src', lista.imgUrl);
  imagen.setAttribute(
    'style',
    'width: 150px'
  );
  leng.innerText = "Lenguajes: " + lista.lenguajes;
  leng.setAttribute(
    'style',
    'margin: 15px 0px 15px 0px'
  );
  bim.innerText = "Bimestre: " + lista.bimestre;

  const box = document.getElementById('fila');
  box.appendChild(cardU)
  cardU.appendChild(imagen);
  cardU.appendChild(leng);
  cardU.appendChild(bim);
}

for (const lista of listado){
  crearCard(lista);
}

document.getElementById("obtener-materias").disabled = true;

}

function alternarColorTema() {
 
  function cambiarTema(){
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}

  cambiarTema();
}


function visibilizar() {
  const parrafo = document.getElementById('sobre-mi');
  parrafo.style.visibility = 'visible';
}

window.addEventListener('keypress', function(e) {
  if (e.key == 'f' | e.key == 'F') {
      visibilizar();
  }
})
