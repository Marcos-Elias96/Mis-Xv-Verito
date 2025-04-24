// script.js
const imagenes = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "niñas.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "fotojose.jpg",
    "forobello.jpg",
    
  ];
  
  let index = 0;
  const img = document.getElementById("slider-img");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    index = (index + 1) % imagenes.length;
    img.src = imagenes[index];
  });
  
  prevBtn.addEventListener("click", () => {
    index = (index - 1 + imagenes.length) % imagenes.length;
    img.src = imagenes[index];
  });

  const playButton = document.getElementById('playButton');
const backgroundMusic = document.getElementById('backgroundMusic');

playButton.addEventListener('click', () => {
  backgroundMusic.play();
  playButton.style.display = 'none'; // Ocultar el botón después de hacer clic
});
