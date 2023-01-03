import CreateItems from "./ComponentMenu/menuObject";
/////////section Home
//////Work on navbar
//// navbar togle button and transform
///get element
const barTogleElement = document.querySelectorAll(".bar");
console.log(barTogleElement);
const parentbarElement = document.querySelector(".navbar-togle-btn");
console.log(typeof parentbarElement);
///get event for transform childeren
parentbarElement.addEventListener("click", (event) => {
    // select child element
    console.log(event);
    if (event.type == "click") {
        var barOne = parentbarElement.childNodes[1];
        var barTow = parentbarElement.childNodes[3];
        var barTree = parentbarElement.childNodes[5];
        barTow.style.display = "none";
        barOne.style.transform = "rotate(45deg)";
        barTree.style.transform = "rotate(-45deg)";
    } else {
        console.log("false");
    }
});
// set items for menu
// set menu objec class
const menu = new CreateItems().createItemsMenu();
const menuColBox = document.createElement("div");
menuColBox.appendChild(menu);
menuColBox.className = "col-12";
menuColBox.classList.add("menuColBox");
const homeSection = document.getElementById("Home-section");
homeSection.appendChild(menuColBox);
