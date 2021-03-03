function loadHome() {
    let contentElements = [];

    const h2 = document.createElement('h2');
    h2.textContent = 'Home';
    contentElements.push(h2);

    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \
    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. \
    Mauris placerat eleifend leo.'
    contentElements.push(paragraphOne);

    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. \
    Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. \
    Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. \
    Mauris placerat eleifend leo.'
    contentElements.push(paragraphTwo);

    return contentElements;
}

export default loadHome;