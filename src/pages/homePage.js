import { menuPage } from './menuPage';
import myImage from '../images/homePage.png';

export { homePage };

function homePage() {
  // Grabs the contentDiv in the document
  const contentDiv = document.querySelector('#content');

  // HomePage Container
  const homePageContainer = document.createElement('div');
  homePageContainer.classList.add('homePageContainer');

  // Creates the image and appends it
  const imageContainer = document.createElement('div');
  imageContainer.className = 'imageContainer';

  const homeImage = document.createElement('img');
  homeImage.src = myImage;
  imageContainer.appendChild(homeImage);

  homePageContainer.appendChild(imageContainer);

  // Header & Subheader Text
  const headerContainer = document.createElement('div');
  headerContainer.className = 'headerContainer';

  const header = document.createElement('div');
  header.className = 'header';
  header.innerText = 'Welcome to the Bite';

  const subHeader = document.createElement('div');
  subHeader.className = 'subHeader';
  subHeader.innerText = 'Discover your Tastes!';

  headerContainer.appendChild(header);
  headerContainer.appendChild(subHeader);
  homePageContainer.appendChild(headerContainer);

  // Menu Button
  const menuButton = document.createElement('button');
  menuButton.innerText = 'Menu';
  headerContainer.appendChild(menuButton);
  menuButton.addEventListener('click', () => {
    menuButton.parentElement.parentElement.remove();
    menuPage();
  });

  // Appends the div for it to be shown in the DOM
  contentDiv.appendChild(homePageContainer);
}
