const navMenu = document.querySelector(".nav-menu");
const links = document.querySelector(".links");

navMenu.addEventListener("click", function(){
    // links.classList.remove("links");
    // links.classList.add("show-links");
    // navMenu.classList.remove("nav-menu");
    links.classList.toggle("show-links");
});
console.log(links);

// const menuBtn = document.querySelector('.menu-btn');
// const menuLinks = document.querySelector('.menu-links');

// menuBtn.addEventListener('click', () => {
//   menuBtn.classList.toggle('open');
//   menuLinks.classList.toggle('active');
// });
