import loadHeader from './header'
import loadMain from './main';

function loadPage() {
    const contentContainer = document.getElementById('content');
    
    contentContainer.appendChild(loadHeader());
    //Activate first tab
    document.querySelector('#home-btn').classList.add('active');
    
    contentContainer.appendChild(loadMain());
};

export default loadPage;