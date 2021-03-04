function loadFooter() {
    const footer = document.createElement('footer');

    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is a restaurant page. ';

    const link = document.createElement('a');
    link.href = 'https://github.com/pikkuruusu';
    link.textContent = 'Made by Staffan.'

    paragraph.appendChild(link);

    footer.appendChild(paragraph);

    return footer;
}

export default loadFooter;