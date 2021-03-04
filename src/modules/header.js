import loadNav from './nav';

function loadHeader() {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'This is a restaurant page for a restaurant that has it all';

    header.appendChild(h1);
    header.appendChild(loadNav());

    return header;
}

export default loadHeader;