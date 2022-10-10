window.addEventListener("scroll", function(){ 
    const header = document.querySelector("header"); 
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function(){ 
    const rocket = document.querySelector(".rocket");
    const rocket_fire = document.querySelector(".rocket-fire");
    rocket.classList.toggle("rocket-lunch", window.scrollY >= 1200)
    rocket_fire.classList.toggle("rocket-fire-lunch", window.scrollY >= 1200)
});


const scrollToTOP = document.querySelector(".scrollToTop");
// const scrollToTopActivate = document.querySelector(".scrollToTopActivate");

// window.addEventListener("scroll", function(){
//     scrollToTOP.classList.toggle("scrollToTopActivate", window.scrollY>= 500)
// });

scrollToTOP.addEventListener("click", function(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
});



