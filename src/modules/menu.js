function loadMenu() {
    let contentElements = [];

    const h2 = document.createElement('h2');
    h2.textContent = 'Menu';
    contentElements.push(h2);

    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Foods.'
    contentElements.push(paragraphOne);

    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'We have it.'
    contentElements.push(paragraphTwo);

    return contentElements;
}

export default loadMenu;