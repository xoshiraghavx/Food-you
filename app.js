// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', () =>{
    links.classList.toggle("show-links")
})


// modal js

const modalBtn = document.querySelector(".modal-btn");
const modal      = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

modalBtn.addEventListener('click',() =>{
    modal.classList.add('open-modal');
})
closeBtn.addEventListener('click',() =>{
    modal.classList.remove('open-modal');
})