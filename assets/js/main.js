let page = document.querySelector(".page");
let page1 = document.querySelector(".page1");
let page2 = document.querySelector(".page2");

let visible = 1;
page.addEventListener("mouseenter", swapImage);
page.addEventListener("mouseleave", swapImage);

function swapImage() {
	if (visible == 1) {
		visible = 2;
		page1.style.visibility = "none";
		page2.style.visibility = "block";
	} else {
		visible = 1;
		page1.style.display = "block";
		page2.style.display = "none";
	}
}
