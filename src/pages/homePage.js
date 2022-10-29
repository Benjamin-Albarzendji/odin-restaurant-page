

export function homePage() {

    //Grabs the contentDiv in the document
    const contentDiv = document.querySelector('#content')

    //HomePage Container
    const homePageContainer = document.createElement("div")
    homePageContainer.classList.add("homePageContainer")

    //Creates the image and appends it 
    const imageContainer = document.createElement("div")
    imageContainer.className = "imageContainer"

    const homeImage = document.createElement("img")
    homeImage.src = "../src/images/homePage.png"
    imageContainer.appendChild(homeImage)

    const absoluteText = document.createElement("div")
    absoluteText.innerText = "The Bite"
    imageContainer.appendChild(absoluteText)

    homePageContainer.appendChild(imageContainer)


    //Header & Subheader Text

    const headerContainer = document.createElement("div")
    headerContainer.className = "headerContainer"

    const header = document.createElement("div")
    header.innerText = "Welcome to the Bite"

    const subheader = document.createElement("div")
    subheader.innerText = "Discover your Tastes"

    headerContainer.appendChild(header)
    headerContainer.appendChild(subheader)

    homePageContainer.appendChild(headerContainer)


    
    contentDiv.appendChild(homePageContainer)



}