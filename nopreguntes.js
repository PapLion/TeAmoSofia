const mensajes = [
  'Gracias por permitirme estar a tu lado y ser parte de esta etapa de mi vida que disfruto tanto ❤️😊',
  'Sé que a veces puedo actuar de forma tonta, pero siempre estoy trabajando en mejorar porque tu felicidad es mi prioridad 💖',
  'Eres la casualidad más hermosa que ha llegado a mi vida. 🌟',
  'Aunque solo llevamos un mes juntos, siento como si hubiera pasado una eternidad a tu lado 💕',
  'Si me lo permites, quiero seguir creciendo a tu lado hasta que me empieces a odiar <3',
  'Deseo que no haya más días tristes para ti, solo quiero verte sonreír y ver tu linda sonrisa 😊',
  'Aunque pueda sufrir, estar vivo ya que te pude conocer. 🌺',
  'Eres el sueño que se hizo realidad sin que yo supiera que lo estaba soñando...',
  'Nunca dejaré de amarte, es como respirar, ¿cómo podría dejar de hacerlo? 💞',
  'Tu amor es el milagro que anhelé durante años...',
  'Cada día que pasa me enamoro más y más de ti 😊',
  'Eres la razón por la que mi corazón late más rápido y por la que siempre sonrío al mirar mi teléfono. uwu',
  'Quiero verte sonreír y ser la razón detrás de esa sonrisa encantadora >//<',
  'Soy feliz mientras tú lo seas',
];

let mensajesMostrados = [];

let mensajeFinalMostrado = false; // Variable de control

function mostrarVentana() {
  // Verifica si el mensaje final ya ha sido mostrado
  if (mensajeFinalMostrado) {
    return; // Si ya se mostró, no hace nada más
  }

  if (mensajes.length === mensajesMostrados.length) {
    mostrarExplosion();
    // No es necesario llamar a mostrarMensajeFinal aquí ya que se llama dentro de mostrarExplosion
    mensajeFinalMostrado = true; // Actualiza la variable de control
    return;
  }

  let mensajeAleatorio;
  do {
    mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
  } while (mensajesMostrados.includes(mensajeAleatorio));

  mensajesMostrados.push(mensajeAleatorio);

  // Elimina cualquier ventana existente antes de crear una nueva
  const ventanasExistentes = document.querySelectorAll('.ventana');
  ventanasExistentes.forEach(ventana => ventana.remove());

  const ventana = document.createElement('div');
  ventana.classList.add('ventana');
  ventana.textContent = mensajeAleatorio;
  ventana.style.top = `${Math.random() * (window.innerHeight - 100)}px`; // Asegura que esté alejado del borde
  ventana.style.left = `${Math.random() * (window.innerWidth - 200)}px`; // Asegura que esté alejado del borde
  document.body.appendChild(ventana);

  // Agrega un evento de clic para cerrar la ventana actual y permitir la aparición de una nueva
  ventana.addEventListener('click', () => {
    ventana.remove();
    mostrarVentana(); // Muestra la siguiente ventana después de cerrar la actual
  });
}

function mostrarExplosion() {
  const intervalo = setInterval(() => { // Comienza a crear corazones
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.top = `${Math.random() * window.innerHeight}px`;
    corazon.style.left = `${Math.random() * window.innerWidth}px`;
    document.body.appendChild(corazon);
  }, 25); // Ajusta este valor para controlar la rapidez con la que aparecen los corazones

  setTimeout(() => {
    clearInterval(intervalo); // Detiene la creación de corazones

    // Elimina cualquier ventana de mensaje existente
    const ventanasExistentes = document.querySelectorAll('.ventana');
    ventanasExistentes.forEach(ventana => ventana.remove());

    mostrarMensajeFinal(); // Muestra el mensaje final

    // Opcional: elimina todos los corazones después de un breve retraso
    setTimeout(() => {
      document.querySelectorAll('.corazon').forEach(corazon => corazon.remove());
    }, 5000); // Ajusta este valor según cuánto tiempo quieres que los corazones permanezcan en pantalla después de detenerse
  }, 4000); // Ajusta este valor para controlar cuánto tiempo los corazones aparecerán antes de detenerse
}

function mostrarMensajeFinal() {
  const mensajeFinal = document.createElement('div');
  mensajeFinal.classList.add('mensaje-final'); // Agrega ambas clases
  mensajeFinal.textContent = 'Te amo mucho Sofía. En serio. Mucho';

  // Configuración inicial del estilo
  mensajeFinal.style.position = 'fixed';
  mensajeFinal.style.width = '80%'; // Ajusta el ancho según necesites
  mensajeFinal.style.height = 'auto'; // Altura automática basada en el contenido
  mensajeFinal.style.fontSize = '1.2em'; // Ajusta el tamaño de fuente según necesites
  mensajeFinal.style.padding = '20px'; // Añade algo de espacio alrededor del contenido
  mensajeFinal.style.boxSizing = 'border-box'; // Asegura que el padding no afecte el ancho total
  // Estilos adicionales para asegurar la visibilidad y el diseño
  mensajeFinal.style.backgroundColor = 'white'; // Fondo blanco para el mensaje
  mensajeFinal.style.color = 'black'; // Texto en color negro
  mensajeFinal.style.border = '2px solid black';
  mensajeFinal.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  mensajeFinal.style.zIndex = '2000'; // Asegura que el mensaje esté por encima de todo

  document.body.appendChild(mensajeFinal);
}