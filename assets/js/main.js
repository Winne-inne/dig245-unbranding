let page = document.querySelector(".page");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");

let debounceTimeout;
let count = 0; 

page.addEventListener("mouseenter", function() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(function() {
    count++;
    page1.style.opacity = 0;
    page2.style.opacity = 1;
  }, 100); 
});

page.addEventListener("mouseleave", function() {
  clearTimeout(debounceTimeout);
  page1.style.opacity = 1;
  page2.style.opacity = 0;
});