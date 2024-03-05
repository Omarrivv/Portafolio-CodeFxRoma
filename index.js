const proyectosContainer = document.getElementById("proyectosContainer");
// const titleAuto = document.getElementById("h1-title");
const aside = document.getElementsByTagName("aside")[0];
const getTecnologias = (tecnologias) => {
  let res = "";
  tecnologias.forEach((tecnologia) => {
    res += `<span class='tecnologia'>${tecnologia}</span> `;
    console.log(res)
  });
  return res;
};
const getProyecto = (proyecto) => `
  <img src='img/proyectos/${proyecto.imagen}' alt='${proyecto.titulo} loading="lazy"'>
  <div>
    <h3>${proyecto.titulo}</h3>
    <p>${proyecto.descripcion}</p>
    <hr>
    <p>${proyecto.creadores}<p/>
    <hr>
    <p>Acontinuacion Una Imagen del Desarrollo proceso atravez de la plataforma youtube</p>
    <img src='img/proyectos/${proyecto.proceso_automatizacion}'>
    <p>Tecnologías: ${getTecnologias(proyecto.tecnologias)}</p>
  </div>
  <!-- hipervínculo -->
  <a ${proyecto.link ? 'href='+proyecto.link : "class=disabled"} target="_blank">Ver proyecto</a>
`;
// proyecto.link ? 'href='+proyecto.link : "class=disabled": Esta es una expresión ternaria que verifica si proyecto.link es verdadero o falso. Si proyecto.link es verdadero, entonces se devuelve la cadena 'href='+proyecto.link, que establece el atributo href del enlace como el valor del enlace del proyecto. Si proyecto.link es falso (por ejemplo, si proyecto.link es null o undefined), entonces se devuelve la cadena "class=disabled", que establece la clase del enlace como disabled.
// target="_blank": Este atributo indica al navegador que abra el enlace en una nueva pestaña o ventana.
const makePresentacion = () => {
  const nuevaPresentación = document.createElement("div");
  nuevaPresentación.classList = "presentacion";
  nuevaPresentación.innerHTML +=`
    <img src="${informacionPersonal.imagen}">
  `
  // agregar el nombre en el icono para las partes de las tecnologias
  nuevaPresentación.innerHTML += `
  <h2>${informacionPersonal.nombre}<h2>
  `
  nuevaPresentación.innerHTML += `
  <p>${informacionPersonal.subtitulo}<p>
  `
  informacionPersonal.otros.forEach(dato => {
    nuevaPresentación.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
  })
  aside.appendChild(nuevaPresentación);
}
const makeIdiomas = () => {
  const nuevoIdiomas = document.createElement("div");
  nuevoIdiomas.classList = "idiomas";
  informacionPersonal.idiomas.forEach(dato => {
    nuevoIdiomas.innerHTML += `
    <div>
      <span>${dato[0]}:</span>
      <span>${dato[1]}</span>
    </div>
    `
  })
  aside.appendChild(nuevoIdiomas);
}
const makeTecnologias = () => {
  const nuevoTecnologias = document.createElement("div");
  nuevoTecnologias.id = "tecnologias";
  informacionPersonal.tecnologias.forEach(dato => {
    nuevoTecnologias.innerHTML += `
    <div>
      <span>${dato[0]}</span>
      <span>${dato[1]}</span>
    </div>
      <progress max="10" value="${dato[1]}">
    `
  })
  aside.appendChild(nuevoTecnologias);
}

const makeRedes = () => {
  const nuevoRedes = document.createElement("div");
  nuevoRedes.id = "redes";
  informacionPersonal.redes.forEach(dato => {
    if(dato[1]!== ""){
      nuevoRedes.innerHTML += `
      <a href=${dato[1]} target="_blank">
        <img src=${getIconoRed(dato[0])}>
      </a>
      `
    }
    })
  aside.appendChild(nuevoRedes);
}

const getIconoRed = (red)=>{
  const urlBase = "img/iconos/";
  switch(red){
    case "instagram":
      return urlBase+"instagram.svg";
    case "linkedin":
      return urlBase+"linkedin.svg";
    case "facebook":
      return urlBase+"square-facebook.svg";
    case "twitter":
      return urlBase+"twitter.svg";
    case "youtube":
      return urlBase+"youtube.svg";
    case "github":
      return urlBase+"github.svg";
    default:
      return urlBase+"globe-solid.svg";
  }
}

const getTitleNombre = ()=>{
  const titleAuto = document.getElementById("h1-title");
  titleAuto.innerHTML += `
  <h2>${informacionPersonal.nombre}<h2>
  `
}

//Ejecución
proyectos.forEach((proyecto) => {
  const nuevoProyecto = document.createElement("div");
  nuevoProyecto.classList = "proyecto tarjeta";
  nuevoProyecto.innerHTML = getProyecto(proyecto);
  proyectosContainer.appendChild(nuevoProyecto);
});
makePresentacion();
makeIdiomas();
makeTecnologias();
makeRedes();
getTitleNombre();

