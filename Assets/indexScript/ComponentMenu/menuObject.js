class MenuContainer {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    createContainerMenu() {
        const containerMenu = document.createElement("div");
        containerMenu.style.width = this.width + "%";
        containerMenu.style.height = this.height + "rem";
    }
}

class CreateItems extends MenuContainer {
    constructor(value, width, height) {
        super();
        this.value = value;
        this.width = width;
        this.height = height;
    }
    array = [
        "سی اس اس ",
        "بوت استرپ",
        " جی کیوری",
        "جاوا اسکریپت",
        " بوت استرپ",
    ];
    createItemsMenu() {
        for (var i = 0; i < 6; i++) {
            const itemsmenu = document.createElement("div");
            const itemsMenuLink = document.createElement("a");
            itemsMenuLink.textContent = this.array[i + 1];
        }
    }
}

export default CreateItems;
