//Factory Function for a menu item object
const menuItem = (name, description, price) => {
  return { name, description, price };
};

//Menu Object list
const menuObjects = [];

//The Construction of the menu objects
const taco = menuItem("Swedish Taco", "The tastiest of Tacos", "325$");
menuObjects.push(taco);

const pizza = menuItem("Volcanic Pizza", "Straight outta Pompei", "500$");
menuObjects.push(pizza);

const bigMac = menuItem("Home-Made Big Mac", "The Original Big Mac", "500$");
menuObjects.push(bigMac);

const pasta = menuItem(
  "Chinese Pasta Al Fredo",
  "No better Pasta than Pasta from the Middle-Kingdom",
  "222$"
);
menuObjects.push(pasta);

const avocado = menuItem(
  "Deconstructed Avocado Toast",
  "The toast that has put millions in povety",
  "9999$"
);
menuObjects.push(avocado);

const banhmi = menuItem(
  "Banh Mi",
  "The Original, because you don't change Banh Mi",
  "1$"
);
menuObjects.push(banhmi);

export function menuPage() {
  //Grabs the contentDiv in the document
  const contentDiv = document.querySelector("#content");

  //menuPage Container
  const menuPageContainer = document.createElement("div");
  contentDiv.appendChild(menuPageContainer);
  menuPageContainer.classList.add("menuPageContainer");

  //Menu Container
  const menuPage = document.createElement("div");
  menuPageContainer.appendChild(menuPage);
  menuPage.className = "menuPage";

  //Loop through all the objects in the list
  menuObjects.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.className = "card";

    const menuItemName = document.createElement("div");
    itemCard.appendChild(menuItemName);
    menuItemName.innerText = item.name;

    const menuItemDescription = document.createElement("div");
    itemCard.appendChild(menuItemDescription);
    menuItemDescription.innerText = item.description;

    const menuItemPrice = document.createElement("div");
    itemCard.appendChild(menuItemPrice);
    menuItemPrice.innerText = item.price;

    menuPage.appendChild(itemCard);
  });
}
