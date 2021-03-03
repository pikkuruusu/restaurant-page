import loadHeader from './header'
import loadMain from './main';

function loadPage() {
    const contentContainer = document.getElementById('content');
    
    contentContainer.appendChild(loadHeader());
    
    contentContainer.appendChild(loadMain());
};

export default loadPage;