/**
 * 
 * @param {*} selector String: #id or .class selector to get the DOM element
 * @returns 
 */
const el = (selector) => {
    return document.querySelector(selector);
};

/**
 * 
 * @returns String: generates a Hex random color
 */
const randomColor = () => {
    
    return `#${Math.ceil(Math.random()*16777215).toString(16)}`;
};

/**
 * 
 * @param {*} element Changes the bg-color and content of the HTML Button element
 */
const handleChangeButton = (element) => {
    
    element.style.background = randomColor();

    element.innerHTML === 'Fuel' ? element.innerHTML = 'Cyber' : element.innerHTML = 'Fuel';

    // console.log(element.dataset.name);
};

//================
//    DOM Elements
//================

const btn1 = el('#btn-1');
const btn2 = el('#btn-2');

//================
//    Events
//================

btn1.addEventListener('click', () => {

    handleChangeButton(btn2);
});

btn2.addEventListener('click', () => {
    
    handleChangeButton(btn1);
});
