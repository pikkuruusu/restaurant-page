function loadFooter() {
    const footer = document.createElement('footer');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a footer';

    footer.appendChild(paragraph);

    return footer;
}

export default loadFooter;