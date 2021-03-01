import loadNav from './nav';

function loadHeader() {
    const header = document.createElement('header');

    const h1 = document.createElement('h1');
    h1.textContent = 'Some restaurant nkjxd j dcj  jec k ej cd je cedncjencje ckjecj';

    header.appendChild(h1);
    header.appendChild(loadNav());

    return header;
}

export default loadHeader;