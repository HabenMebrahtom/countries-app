 const color = document.getElementById('color');
 const body = document.getElementById('body');
 const header = document.getElementById('header');
 



 

color.addEventListener('click', () => {
   body.classList.toggle('black');
   header.classList.toggle('dark');
}) 
