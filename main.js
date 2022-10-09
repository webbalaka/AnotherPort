window.addEventListener("scroll", function(){ 
    const header = document.querySelector("header"); 
    header.classList.toggle("sticky", window.scrollY > 0);
});

window.addEventListener("scroll", function(){ 
    const rocket = document.querySelector(".rocket");
    const rocket_fire = document.querySelector(".rocket-fire");
    const school1Hide = document.querySelector(".school1-hide");
    const school2Hide = document.querySelector(".school2-hide");
    const school3Hide = document.querySelector(".school3-hide");
    rocket.classList.toggle("rocket-lunch", window.scrollY >= 1200)
    rocket_fire.classList.toggle("rocket-fire-lunch", window.scrollY >= 1200)
    // school1Hide.classList.toggle("school1-show", window.scrollY >= 1500)
    // school2Hide.classList.toggle("school2-show", window.scrollY >= 1500)
    // school3Hide.classList.toggle("school3-show", window.scrollY >= 1500)

});




