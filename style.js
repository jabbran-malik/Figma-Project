const toggler=document.querySelector('.hamburger');
const navpages=document.querySelector('.nav-pages');

toggler.addEventListener('click', ()=>{
    navpages.classList.toggle('active');
}) 
