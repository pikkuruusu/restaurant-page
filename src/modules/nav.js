function loadNav() {
    const nav = document.createElement('nav');
    
    const ul = document.createElement('ul');

    const homeBtn = document.createElement('li');
    homeBtn.id = 'home-btn';
    homeBtn.classList.add('nav-btn');
    homeBtn.textContent = 'Home';
    ul.appendChild(homeBtn);

    const menuBtn = document.createElement('li');
    menuBtn.id = 'menu-btn';
    menuBtn.classList.add('nav-btn');
    menuBtn.textContent = 'Menu'
    ul.appendChild(menuBtn);

    const contactBtn = document.createElement('li');
    contactBtn.id = 'contact-btn';
    contactBtn.classList.add('nav-btn');
    contactBtn.textContent = 'Contact';
    ul.appendChild(contactBtn);

    nav.appendChild(ul);

    return nav;
}

export default loadNav;