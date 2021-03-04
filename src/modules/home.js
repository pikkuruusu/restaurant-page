function loadHome() {
    let contentElements = [];

    const h2 = document.createElement('h2');
    h2.textContent = 'Home';
    contentElements.push(h2);

    const paragraphOne = document.createElement('p');
    paragraphOne.textContent = 'Croissant cookie brownie apple pie jelly beans jujubes wafer icing candy. \
    Chocolate marshmallow toffee cake candy danish candy. Jelly-o cake cookie wafer powder. Macaroon icing \
    dessert cupcake jujubes fruitcake danish muffin sweet roll. Sesame snaps liquorice caramels. Macaroon \
    fruitcake cake cheesecake jelly cake halvah. Cotton candy powder pudding soufflé cake jelly-o. Pastry \
    jelly pie sugar plum jelly beans wafer croissant donut. Croissant wafer carrot cake macaroon. Pudding \
    lemon drops ice cream cheesecake chocolate bar oat cake wafer. Marshmallow topping chocolate bar ice \
    cream sugar plum icing powder cotton candy. Jelly beans cupcake chocolate bar liquorice'
    contentElements.push(paragraphOne);

    const paragraphTwo = document.createElement('p');
    paragraphTwo.textContent = 'Sugar plum marzipan cotton candy brownie wafer. Marshmallow pudding \
    lemon drops marzipan candy marshmallow powder. Cookie tiramisu chupa chups tart biscuit liquorice. \
    Caramels jelly danish jelly jelly. Powder candy marzipan icing cake danish wafer sweet roll tart. \
    Tootsie roll candy jelly beans. Cake brownie croissant sugar plum topping sweet roll brownie lollipop. \
    Candy carrot cake chocolate bar chocolate cake chocolate gummies jelly beans bear claw macaroon. \
    Cupcake cake lemon drops bonbon carrot cake chocolate cake. Bear claw halvah jelly jelly beans. \
    Bonbon cotton candy muffin bear claw lollipop soufflé. Jelly fruitcake chocolate sugar plum \
    jujubes dragée lollipop.'
    contentElements.push(paragraphTwo);

    return contentElements;
}

export default loadHome;