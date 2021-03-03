import loadPage from './modules/loadPage'
import loadHome from './modules/home'
import loadMenu from './modules/menu'
import loadContact from './modules/contact'

loadPage();

const main = document.querySelector('main');

const navButtons = document.querySelectorAll('.nav-btn')
navButtons.forEach(button => button.addEventListener('click', function(e) {
    main.innerHTML = '';
    switch(e.target.id) {
        case 'home-btn':
            loadHome().forEach(element => {
                main.appendChild(element);
            });
            break;
        case 'menu-btn':
            loadMenu().forEach(element => {
                main.appendChild(element);
            });
            break;
        case 'contact-btn':
            loadContact().forEach(element => {
                main.appendChild(element);
            });
            break;
    };
}))