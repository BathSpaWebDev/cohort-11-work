// add click event to button
// onclick add 'open' class to mobile-navigation 
// if class already exists remove the class
// use css to hide/show the navigation depending on whether class is present

//DOM Methods
// document.getElementById
// document.querySelector

const btn = document.getElementById("toggle-menu");
const mobileNav = document.querySelector(".mobile-navigation");
btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (mobileNav.classList.contains("active")){
        mobileNav.classList.remove("active");
    } else {
        mobileNav.classList.add("active");
    }
}

// btn.addEventListener('mouseover', handleMouseOver);
// btn.addEventListener('mouseout', handleMouseOut);

// window.addEventListener('scroll', () => {
//     if(window.scrollY > 100){
//         alert("scrolled 100px");
//     }
// })

// function handleMouseOver() {
//     console.log('hovered');
//     mobileNav.classList.add("active");
// }
// function handleMouseOut() {
//     mobileNav.classList.remove("active");
// }