function createHeader() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    h1.classList.add('header-title');
    h1.innerText = 'Infiniti Image Slider';

    header.append(h1);

    return document.body.append(header);
};


export {createHeader};