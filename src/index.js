import loadPage from './modules/loadPage'
import loadHome from './modules/home'
import loadMenu from './modules/menu'
import loadContact from './modules/contact'

loadPage();

const main = document.querySelector('main');

const navButtons = document.querySelectorAll('.nav-btn')
navButtons.forEach(button => button.addEventListener('click', function(e) {
    e.target.classList.toggle('active');
    main.innerHTML = '';
    switch(e.target.id) {
        case 'home-btn':
            activateTab('home-btn')
            loadHome().forEach(element => {
                main.appendChild(element);
            });
            break;
        case 'menu-btn':
            activateTab('menu-btn')
            loadMenu().forEach(element => {
                main.appendChild(element);
            });
            break;
        case 'contact-btn':
            activateTab('contact-btn')
            loadContact().forEach(element => {
                main.appendChild(element);
            });
            break;
    };
}))

function activateTab(id) {
    navButtons.forEach(button => {
        if(button.id === id && !button.classList.contains('active')) {
            button.classList.add('active');
        } else if (button.id != id && button.classList.contains('active')) {
            button.classList.remove('active');
        };
    });
};