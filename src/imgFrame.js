import gtr from './images/gtr.jpg';
import sti from './images/sti.jpg';
import bmw from './images/bmw.jpg';
import evo from './images/evo.jpg';
import r34 from './images/r34.jpg';
import rs3 from './images/rs3.jpg';
import supra from './images/supra.jpg';
import supra2 from './images/supra2.jpg';


const array = [];

array.push(createImg('gtr', gtr));
array.push(createImg('sti', sti));
array.push(createImg('bmw', bmw));
array.push(createImg('evo', evo));
array.push(createImg('r34', r34));
array.push(createImg('rs3', rs3));
array.push(createImg('supra', supra));
array.push(createImg('supra2', supra2));



// Creates img object with title and url
function createImg(name, url) {
    return {name, url}
    }
    
// Displays img as img element
function imgFrame(url) {
    
    const img = new Image();
    img.src = url;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';


    const frame = document.createElement('div');
    frame.classList.add('img-frame');
    frame.style.overflow = 'hidden';
    frame.style.display = 'block';
    frame.style.position = 'relative';
    frame.style.width = '20rem';
    frame.style.height = '28rem';
    frame.style.borderRadius = '1rem';
    frame.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px';

    frame.append(img);

    return frame
}







export {imgFrame, createImg};