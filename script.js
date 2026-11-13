// Welcome Message

window.addEventListener("load", function() {
    console.log("Welcome to Raguram's Portfolio!");
});

// Navigation Click

const links = document.querySelectorAll("nav ul li a");

links.forEach(function(link) {
    link.addEventListener("click", function() {
        console.log("Navigation: " + link.textContent);
    });
});

// Explore More Button

const exploreButton = document.querySelector(".btn");

exploreButton.addEventListener("click", function() {
    console.log("Welcome to my portfolio!");
});

// Current Year

const footer = document.querySelector("footer");

footer.innerHTML =
    "© " + new Date().getFullYear() +
    " Raguram M. All Rights Reserved.";
