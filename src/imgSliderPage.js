import { forwardArrow, backArrow } from "./sliderControls";
import  { imgFrame, createImg } from './imgFrame';





function createImgSliderSection(array) {
    // Div section
    const imgSliderPage = document.createElement('div');
    imgSliderPage.classList.add('img-section');

    // Adds back arrow
    imgSliderPage.append(backArrow());

    // Adds frame holder
    imgSliderPage.append(frameHolder(array));

    // Adds forward arrow
    imgSliderPage.append(forwardArrow());



    return document.body.append(imgSliderPage);
};



function frameHolder(array) {
    const frameHolder = document.createElement('div');
    frameHolder.classList.add('frame-holder');

    
        frameHolder.append(imgFrame(array[1].url));
   


    return frameHolder;
};






export { createImgSliderSection };