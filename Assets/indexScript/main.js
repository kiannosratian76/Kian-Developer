/////////section Home
//////Work on navbar
//// navbar togle button and transform
///get element
const barTogleElement = document.querySelectorAll(".bar");
console.log(barTogleElement);
const parentbarElement = document.querySelector(".navbar-togle-btn");
console.log(typeof parentbarElement);
//get bar element
var barOne = parentbarElement.childNodes[1];
var barTow = parentbarElement.childNodes[3];
var barTree = parentbarElement.childNodes[5];
///menu-bar-Container
const menuContainer = document.getElementById("menu-bar-container");
//menu-bar-items
const menuItems = document.querySelectorAll(".menu-bar-items");
///get event for transform childeren
// menuContainer.style.width = menuContainer.clientWidth - 830 + "px";

parentbarElement.addEventListener("click", () => {
    // check client width menu bar
    if (menuContainer.clientWidth < 830) {
        menuContainer.style.width = 98 + "%";
        barTow.style.display = "none";
        barOne.style.transform = "rotate(45deg)";
        barTree.style.transform = "rotate(-45deg)";
        menuItems.forEach((item) => {
            item.style.display = "flex";
        });
    } else {
        menuContainer.style.width = 5 + "%";
        menuItems.forEach((item) => {
            item.style.display = "none";
        });
        console.log("ssss");
        barTow.style.display = "flex";
        barOne.style.transform = "rotate(0)";
        barTree.style.transform = "rotate(0)";
    }
});
