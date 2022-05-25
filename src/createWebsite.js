import './style.css';
import { createHeader } from './header';
import { createImgSliderSection, createFrame } from './imgSliderPage';
import  { createImg } from './imgFrame'


import gtr from './images/gtr.jpg';
import sti from './images/sti.jpg';
import bmw from './images/bmw.jpg';
import evo from './images/evo.jpg';
import r34 from './images/r34.jpg';
import rs3 from './images/rs3.jpg';
import supra from './images/supra.jpg';
import supra2 from './images/supra2.jpg';


function generateWebsite() {

    const imgArray = [];
    let slideCount = '';
    let currentSlide = '0';
    
    imgArray.push(createImg('gtr', gtr));
    imgArray.push(createImg('sti', sti));
    imgArray.push(createImg('bmw', bmw));
    imgArray.push(createImg('evo', evo));
    imgArray.push(createImg('r34', r34));
    imgArray.push(createImg('rs3', rs3));
    imgArray.push(createImg('supra', supra));
    imgArray.push(createImg('supra2', supra2));

////////////////////////////////////////// FUNCTIONS ////////////////////////////////////
     // Updates slide count based on the img arrays
    function updateSlideCount() {
        for(let i = 0; i < imgArray.length; i++) {
            slideCount = i;
        }
    };

    function forwardArrowBtn() {
    
        const forwardArrow = document.querySelector('.forward-arrow');
        forwardArrow.addEventListener('click', () => {
            const imgSliderPage = document.querySelector('.img-section');
            const frameHolder = document.querySelector('.frame-holder');
        
    
            // if current slide is equal or greater to slide count make slide count 0
            if(currentSlide >= slideCount) {
                frameHolder.remove();
                currentSlide = '0';
                imgSliderPage.append(createFrame(imgArray, '0'));
                activeSelectorDot(currentSlide);
            } else {
                frameHolder.remove();
                // +1 on current slide
                currentSlide++;
                imgSliderPage.append(createFrame(imgArray, currentSlide));
                activeSelectorDot(currentSlide);
            }
    
    
        });
        
    };
    
    
    
    function backArrowBtn() {

        const backArrow = document.querySelector('.back-arrow');
        backArrow.addEventListener('click', function() {
            const imgSliderPage = document.querySelector('.img-section');
            const frameHolder = document.querySelector('.frame-holder');
            
    
            // if current slide is equal or greater to slide count make slide count 0
            if(currentSlide == '0') {
                frameHolder.remove();
                currentSlide = slideCount;
                imgSliderPage.append(createFrame(imgArray, slideCount));
                activeSelectorDot(currentSlide);
            } else if(currentSlide > slideCount) {
                frameHolder.remove();
                currentSlide = '0';
                activeSelectorDot(currentSlide);
            } else {
                frameHolder.remove();
                // +1 on current slide
                currentSlide--;
                imgSliderPage.append(createFrame(imgArray, currentSlide));
                activeSelectorDot(currentSlide);
            }
    
    
        });
        
    };


    function activeSelectorDot(currentSlide) {
        const dot = document.querySelectorAll('.dot-selector');

    // Removes current active dot class
        for (let i = 0; i < dot.length; i++) {
            dot[i].className = dot[i].className.replace(" active", "");
          };
          // Passes currentSlide number to the dot class as active
          dot[currentSlide].classList.add('active');

    };


    function selectorDotBtn() {
        const dot = document.querySelectorAll('.dot-selector');



        for(let i = 0; i < dot.length; i++) {
            dot[i].addEventListener('click', function() {
                const frameHolder = document.querySelector('.frame-holder');
                const imgSliderPage = document.querySelector('.img-section');
                
                for (let i = 0; i < dot.length; i++) {
                    dot[i].className = dot[i].className.replace(" active", "");
                  };
                this.classList.add('active');
                currentSlide = i;
                frameHolder.remove();
                imgSliderPage.append(createFrame(imgArray, i));
            })
        }
    };

   
    ////////////////////////////////////////// FUNCTIONS ////////////////////////////////////
    
    
    createHeader();
    createImgSliderSection(imgArray);
    updateSlideCount();
    forwardArrowBtn();
    backArrowBtn();
    activeSelectorDot(currentSlide);
    selectorDotBtn();
    
    
    

    

    

    
};

export { generateWebsite };