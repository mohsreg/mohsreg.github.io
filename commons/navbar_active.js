const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function () {
	hamburger.classList.toggle("nav-active");
	mobile_menu.classList.toggle("nav-active");
});

var navroot = document.querySelector(".navroot");
window.addEventListener("scroll", function () {
	if (window.scrollY == 0) {
		//user is at the top of the page; no need to show the back to top button
		navroot.classList.remove("scrolled");
	} else {
		if (!navroot.classList.contains("scrolled")) {
			navroot.classList.add("scrolled");
		}
	}
});
