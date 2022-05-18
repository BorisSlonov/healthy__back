const hamburger = () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.navigation__wrapper');
    const availableScreenWidth = window.screen.availWidth;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('navigation__wrapper_active');
       

    });

 

};

export default hamburger;