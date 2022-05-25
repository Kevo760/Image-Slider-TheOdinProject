import { forwardArrow, backArrow, imageSelectorUI } from "./sliderControls";
import  { imgFrame } from './imgFrame';





function createImgSliderSection(array) {
    // Div section
    const imgSliderPage = document.createElement('div');
    imgSliderPage.classList.add('img-section');

    // Adds back arrow
    imgSliderPage.append(backArrow());

    imgSliderPage.append(createFrame(array, '0'));

    imgSliderPage.append(imageSelectorUI(array));

    // Adds forward arrow
    imgSliderPage.append(forwardArrow());

    document.body.append(imgSliderPage);
};



function createFrame(array, slide) {

    const frameHolder = document.createElement('div');
    frameHolder.classList.add('frame-holder');
    frameHolder.classList.add('fade');

    // shows image frame
   frameHolder.append(imgFrame(array[slide].url)); 

   return frameHolder
};





export { createImgSliderSection, createFrame};