import './style.css';
import { createHeader } from './header';
import { createImgSliderSection } from './imgSliderPage';
import  { imgFrame, createImg } from './imgFrame';

import gtr from './images/gtr.jpg';
import sti from './images/sti.jpg';
import bmw from './images/bmw.jpg';
import evo from './images/evo.jpg';
import r34 from './images/r34.jpg';
import rs3 from './images/rs3.jpg';
import supra from './images/supra.jpg';
import supra2 from './images/supra2.jpg';


const imgArray = [];

imgArray.push(createImg('gtr', gtr));
imgArray.push(createImg('sti', sti));
imgArray.push(createImg('bmw', bmw));
imgArray.push(createImg('evo', evo));
imgArray.push(createImg('r34', r34));
imgArray.push(createImg('rs3', rs3));
imgArray.push(createImg('supra', supra));
imgArray.push(createImg('supra2', supra2));





createHeader();
createImgSliderSection(imgArray);

const imgSection = document.querySelector('.img-section');

let count = '1';
console.log(count);

function counttwo(a) {
    return a = '2'
};


counttwo(count);
console.log(count);






