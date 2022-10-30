export function about() {
  //Grabs the contentDiv in the document
  const contentDiv = document.querySelector("#content");

  //About Page Container
  const aboutPageContainer = document.createElement("div");
  contentDiv.appendChild(aboutPageContainer);
  aboutPageContainer.classList.add("aboutPageContainer");

  // About Page

  const aboutPage = document.createElement("div");
  aboutPage.className = "aboutPage";
  aboutPageContainer.appendChild(aboutPage);

  // About Header

  const aboutHeader = document.createElement("div");
  aboutHeader.className = "header";
  aboutHeader.innerHTML = "Contact Us";
  aboutPage.appendChild(aboutHeader);

  //About body

  const aboutBody = document.createElement("div");
  aboutBody.className = "aboutBody";
  aboutBody.innerHTML =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";
  aboutPage.appendChild(aboutBody);
}
