


// 1a
const button1 = document.querySelector(`#one`);

// 1b
button1.onclick = function () {
  alert("You clicked the first button! Congrats!");
};

// 2a
const h3 = document.querySelector(`h3`);

// 2b
h3.addEventListener(`mouseover`, () => {
  alert("You hovered over the h3 element! Congrats!");
});
/* 
},{once true}); 
makes alert stop after first time. I didn't run it this way though because I remedied the problem in css by turning the div into a grid with the property of 20% width.*/

// OR
// h3.addEventListener(`mouseenter`, () => {
//   alert("You hovered over the h3 element! Congrats!");
// });

// 3a
const form = document.querySelector(`form`);

// 3b
form.addEventListener(`submit`, () => {
    const entry = form.elements.entry.value;
    alert(`${entry}`);
});
     
    




// bonus
// 4a
const darkMode = document.getElementById(`dm`);
// 4b
// const body = document.querySelector(`body`);
// darkMode.addEventListener(`click`, () => {
//     body.classList.toggle(`dark-mode`);
// });

// or

const everyElement = document.querySelectorAll(`*`);
darkMode.addEventListener(`click`, () => {
    for (element of everyElement){
        element.classList.toggle(`dark-mode`);
    }
});

// 5a
const times = document.getElementById(`times`);

// 5b
// let x = 0;
// times.addEventListener(`click`, () => {
//     x++;
//     if (x <= 2) {
//         alert(`You clicked the last button! Congrats!`);
//     } else if (x === 3) {
//         alert(`OH NO! This button is not going to work anymore!`);

//     } else {
//         times.disabled = true;
//     }
// });


// OR
let num = 1;
times.addEventListener(`click`, () => {
    if (num < 3) {
        alert(`You clicked the last button! Congrats!`);
        num++;
    } else if (num === 3) {
        alert(`OH NO! This button is not going to work anymore!`);
        num++;
    } else {
        times.disabled = true;
    }
});















