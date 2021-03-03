import loadHeader from './header'
import loadMain from './main';
import loadFooter from './footer';

function loadPage() {
    const contentContainer = document.getElementById('content');
    
    contentContainer.appendChild(loadHeader());
    //Activate first tab
    document.querySelector('#home-btn').classList.add('active');
    
    contentContainer.appendChild(loadMain());

    contentContainer.appendChild(loadFooter());
};

export default loadPage;