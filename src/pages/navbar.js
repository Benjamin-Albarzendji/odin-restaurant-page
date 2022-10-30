import { about } from "./about";
import { homePage } from "./homePage";
import { menuPage } from "./menuPage";

export function navBar() {
    //Navbar Container
    const navBarContainer = document.createElement("div");
    navBarContainer.className = "navBarContainer";
    document.body.appendChild(navBarContainer);
  
    //Navbar elements
    const home = document.createElement("a");
    home.innerText = "Home";
    navBarContainer.appendChild(home);
  
    const menu = document.createElement("a");
    menu.innerText = "Menu";
    navBarContainer.appendChild(menu);
  
    const contactUs = document.createElement("a");
    contactUs.innerText = "About Us";
    navBarContainer.appendChild(contactUs);
  
    navBarContainer.childNodes.forEach((element) => {
      element.addEventListener("click", (e) => {
        //Grabs the contentDiv in the document
        const contentDiv = document.querySelector("#content");
        contentDiv.parentElement.removeChild(contentDiv);
        const newContentDiv = document.createElement("div");
        newContentDiv.id = "content";
        document.body.appendChild(newContentDiv);
  
        
  
        if (e.target.innerText === "About Us") {
          about();
        } else if (e.target.innerText === "Home") {
          homePage();
        } else if (e.target.innerText === "Menu") {
          menuPage();
        }
      });
    });
  }
  
