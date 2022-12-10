function createHome() {
  const main = document.createElement("main");

  const section = document.createElement("section");
  section.classList.add("home");
  main.appendChild(section);

  const headline = document.createElement("h2");
  headline.textContent = "The TASTE is the difference!";
  section.appendChild(headline);

  const textContainer = document.createElement("div");
  textContainer.classList.add("home-text");
  section.appendChild(textContainer);

  const firstPara = document.createElement("p");
  firstPara.textContent = `Come experience the best we have to offer. Your taste buds will thank you for it`;
  textContainer.appendChild(firstPara);

  const secondPara = document.createElement("p");
  secondPara.textContent = `Let us treat you well. Come with your friends and family. This is the experience of a lifetime. One bite is all it takes and you'll testify!`;
  textContainer.appendChild(secondPara);

  const thirdPara = document.createElement("p");
  thirdPara.textContent = `What are you waiting for? Come on down, come on all! We have all you could ever desire!`;
  textContainer.appendChild(thirdPara);

  const sidebar = document.createElement("div");
  sidebar.classList.add("left-sidebar");
  sidebar.classList.add("sidebar");
  main.appendChild(sidebar);

  const tableFood = document.createElement("img");
  tableFood.src = "./assets/images/table-food.jpeg";
  sidebar.appendChild(tableFood);

  return main;
}

export default createHome;
