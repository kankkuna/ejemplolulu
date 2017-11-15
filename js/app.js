window.addEventListener('load', function(){

var title = document.getElementsByTagName("h1")[0];
title.addEventListener('mouseover', function() {
    title.classList.add('changeColor');
    title.textContent = 'Soy futuro del Perú';

})


})

/*para colocar una imagen y cambie por otra*/

window.addEventListener('load', function(){

var title = document.getElementsByTagName("h1")[0];
var image = document.getElementsByTagName('img')[0];
title.addEventListener('mouseover', function() {
    title.classList.add('changeColor');
    title.textContent = 'Soy futuro del Perú';

})

image.addEventListener('mouseover', function(event){
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target.src = 'docs/assets/images/2.jpg');
})

image.addEventListener('mouseout', function(event){
  console.log(event.target);
  event.target.src = 'docs/assets/images/3.jpg'
})
})

/*para que el cuadrado cambie de tamaño=div*/

div.addEventListener
