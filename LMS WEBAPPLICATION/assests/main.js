/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav--menu');
const navToggle = document.getElementById('nav--toggle');
const navClose = document.getElementById('nav--close');



/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
    
}



// function showmenu(){
//     navMenu.classList.add('show-menu')
// }
// navToggle.addEventListener("click",showmenu)   //to show you can call an external function on addlistener


/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}




/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
