// script.js
const imagenes = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
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
