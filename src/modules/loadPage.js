import loadHeader from './header';

function loadPage() {
    const contentContainer = document.getElementById('content');

    contentContainer.appendChild(loadHeader);
};

export default loadPage;
