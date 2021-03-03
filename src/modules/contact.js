function loadContact() {
    let contentElements = [];

    const h2 = document.createElement('h2');
    h2.textContent = 'Contact';
    contentElements.push(h2);

    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Phone home'
    contentElements.push(paragraphOne);

    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Do it.'
    contentElements.push(paragraphTwo);

    return contentElements;
}

export default loadContact;