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
const list = document.querySelector("ul");

folders.forEach((element) => {
  console.log(element);
  const newLi = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.text = element
  newLink.href = `./${element}/index.html`
  newLi.appendChild(newLink)
  list.appendChild(newLi)

});
