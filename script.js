const folders = [
  "3D-Button",
  "3D-Card",
  "3D-Cube",
  "3D-Forms",
  "3D-Hamburger-Menu",
  "3D-Landing-Page",
  "3D-Menu",
  "3D-Room",
  "3D-Swing",
  "Animated-Earth",
  "Animated-Landing-Page",
  "Archi-Gen",
  "Atom-Animation",
  "Ball-Animation",
  "Bicycle",
  "Calendar",
  "Checkbox",
  "Circle-Progress-Bar",
  "Clock",
  "Countdown",
  "Creative-Button",
  "CSS-Grid-Gallery",
  "CSS-Loaders",
  "Dark-Mode",
  "Dashboard",
  "Decouvrez-Kyoto",
  "Dropdown-Menu",
  "Flower",
  "Follow-Us-Menu",
  "Hamburger-Menu",
  "Hamburger-Menu-2",
  "Helicopter",
  "Invisible-Card",
  "Jumping-Square",
  "Landing-CSS-Grid",
  "Landing-Page",
  "Landing-Page-Modal-Form",
  "Navbar",
  "Navbar-Rounded",
  "Navigation",
  "Nike-Card",
  "Price-Cards",
  "Profile-Card",
  "Profile-Card-2",
  "Radio-Button",
  "Ripple-Button",
  "Search-Bar",
  "Sign-Up-Form",
  "Sign-Up-Form-2",
  "Signin-&-Signup-Form",
  "Slideshow",
  "Slideshow-2",
  "Social-Media-Slideshow",
  "Tic-Tac-Toe",
  "Toggle-CheckBox",
  "Visit-Card"
];

folders.forEach((element) => {
  const section = document.querySelector(".projects");

  const newCard = document.createElement("article");
  const newContainerImg = document.createElement("div");
  const newImg = document.createElement("img");
  const newContainerInfos = document.createElement("div");
  const newTitle = document.createElement("h2");
  const newLink = document.createElement("a");

  newCard.className = "card";

  newContainerImg.className = "container-screen";
  newImg.src = `./${element}/images/screenshot.png`;
  newImg.alt = `${element} screenshot`;

  newContainerInfos.className = "container-infos";
  newTitle.innerText = element.replace(/-/g, " ");
  newLink.innerText = "Preview";
  newLink.href = `./${element}/index.html`;
  newLink.target = "_blank";
  newLink.role = "button";

  newContainerImg.appendChild(newImg);
  newContainerInfos.appendChild(newTitle);
  newContainerInfos.appendChild(newLink);

  newCard.appendChild(newContainerImg);
  newCard.appendChild(newContainerInfos);

  section.appendChild(newCard);
})
