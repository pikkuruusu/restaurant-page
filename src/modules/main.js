import loadHome from './home'

function loadMain() {
    const main = document.createElement('main');
    
    loadHome().forEach(element => {
        main.appendChild(element);
    });

    return main;
}

export default loadMain;