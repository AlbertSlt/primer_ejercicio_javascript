const perfiles = [
  {
    id: 1,
    nombre: "Rigoberto Ramirez",
    descripcion: "Me gusta el arrrrte",
    imagen: "../images/perfiles/id1.jpg",
    genero: "masculino",
  },
  {
    id: 2,
    nombre: "Tania Termidor",
    descripcion: "El amor es una ilusion y yo soy ilusionista",
    imagen: "../images/perfiles/id2.jpg",
    genero: "femenino",
  },
  {
    id: 3,
    nombre: "Filipo Filomeno",
    descripcion: "Famoso filosofo de la Filarmonica",
    imagen: "../images/perfiles/id3.jpg",
    genero: "masculino",
  },
  {
    id: 4,
    nombre: "Wara Nanda", 
    descripcion: "Los ultimos serán los primeros",
    imagen: "../images/perfiles/id4.jpg",
    genero: "femenino",
  },
  {
    id: 5,
    nombre: "Jacinto Juarez",
    descripcion: "Con el microfono grande cualquiera es cantante",
    imagen: "../images/perfiles/id5.jpg",
    genero: "masculino",
  },
  {
    id: 6,
    nombre: "D'Labuena, Ricarda",
    descripcion: "Es dura la vida del artista",
    imagen: "../images/perfiles/id6.jpg",
    genero: "femenino",
  },
];



document.querySelector('.opciones').addEventListener('change', function (event) {
  const opcionSeleccionada = document.querySelector('input[name="opcion"]:checked').value;
  
  let perfilesFiltrados = [];
  
  if (opcionSeleccionada === '1') { // Hombres
    perfilesFiltrados = perfiles.filter(perfil => perfil.genero === 'masculino');
  } else if (opcionSeleccionada === '2') { // Mujeres
    perfilesFiltrados = perfiles.filter(perfil => perfil.genero === 'femenino');
  } else { // Sorprendeme!
    perfilesFiltrados = perfiles;  
  }

  // Seleccionar un perfil aleatorio del array filtrado
  const perfilAleatorio = perfilesFiltrados[Math.floor(Math.random() * perfilesFiltrados.length)];

  // Crear la tarjeta para el perfil aleatorio
  const container = document.querySelector('.container-cards');
  container.innerHTML = `
    <div class="card2">
      <h3>${perfilAleatorio.nombre}</h3>
      <img src="${perfilAleatorio.imagen}" alt="imagen de ${perfilAleatorio.nombre}">
      <p>${perfilAleatorio.descripcion}</p>
    </div>
  `;

});







// //hacer un perfil aleatorio
// const perfilAleatorio = perfiles[Math.floor(Math.random() * perfiles.length)];

// //crear tarjeta del perfil aleatorio
//   const CARD = document.createElement('div');

//   CARD.classList.add('card2');

// CARD.innerHTML = `
  
//   <h3>${perfilAleatorio.nombre}</h3>
//   <img src="${perfilAleatorio.imagen}" alt="imagen de ${perfilAleatorio.nombre}">
//   <p>${perfilAleatorio.descripcion}</p>
// `;
// //agregar la tarjeta al contenedor

// const container = document.querySelector(`.container-cards`);
// container.appendChild(CARD);









// //crear tarjetas
// perfiles.forEach((perfil) => {
  
//   const CARD = document.createElement('div');

//   CARD.classList.add('card2')

//   CARD.innerHTML = `
//   <h3>${perfil.nombre}</h3>
//   <img src="${perfil.imagen}" alt="imagen de ${perfil.nombre}">
//   <p>${perfil.descripcion}</p>
// `;

//   const container = document.querySelector('.container-cards');
//   container.appendChild(CARD);
// });



































//---------------------COPILOT---------------
// perfiles.forEach((perfil) => {
//   const tarjeta = document.createElement("div");
//   tarjeta.className = "tarjeta";

//   const img = document.createElement("img");
//   img.src = perfil.imagen;
//   img.alt = `Imagen de ${perfil.nombre}`;

//   const nombre = document.createElement("h2");
//   nombre.textContent = perfil.nombre;

//   const descripcion = document.createElement("p");
//   descripcion.textContent = perfil.descripcion;

//   tarjeta.appendChild(img);
//   tarjeta.appendChild(nombre);
//   tarjeta.appendChild(descripcion);

//   document.body.appendChild(tarjeta); // o el contenedor que elijas
// });
