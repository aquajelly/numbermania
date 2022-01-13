// First we get the viewport height and we multiple it by 1% to get a pixel value for a single vh unit:
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document:
document.documentElement.style.setProperty('--vh', `${vh}px`);

// But what if the window height changes? We need our --vh unit to change too!

// So to do that, we listen to the resize event:
window.addEventListener('resize', () => {
  // And then we re-execute the same script as before:
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
