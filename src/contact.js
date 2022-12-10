function createContact() {
  const main = document.createElement("main");

  const contact = document.createElement("section");
  contact.classList.add("contact");
  main.appendChild(contact);

  const titleDiv = document.createElement("div");
  titleDiv.classList.add("contact-title");
  contact.appendChild(titleDiv);

  const title = document.createElement("h2");
  title.textContent = "Contact";
  titleDiv.appendChild(title);

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");
  contact.appendChild(contactContainer);

  const textDiv = document.createElement("div");
  textDiv.classList.add("contact-text");

  const company = document.createElement("h3");
  company.textContent = "Food-Place";
  textDiv.appendChild(company);

  for (let i = 0; i < 6; i++) {
    const para = document.createElement("p");

    switch (i) {
      case 0:
        para.textContent = "Lagos, Nigeria";
        break;
      case 1:
        para.textContent = "Festac, Amuwo-Odofin";
        break;
      case 2:
        para.textContent = "+2341011001";
        break;
      case 3:
        para.textContent = "food-place@eatwell.com";
        break;
      case 4:
        para.textContent = "Mon-Fri: 8am - 9pm";
        break;
      case 5:
        para.textContent = "Sat-Sun: 11am - 5pm";
        break;
      default:
        console.log(`Sorry, not available`);
    }
    textDiv.appendChild(para);
  }
  contactContainer.appendChild(textDiv);

  const location = document.createElement("div");
  location.classList.add("map");
  contactContainer.appendChild(location);

  const frame = document.createElement("iframe");
  frame.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433.61676621738!2d3.2789757500000003!3d6.445240599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b889b055dd011%3A0x61d4e55d9e59232!2sAmuwo%20Odofin%2C%20Lagos!5e0!3m2!1sen!2sng!4v1670512659736!5m2!1sen!2sng";
  frame.height = "450";
  frame.allowFullscreen = "";
  frame.loading = "lazy";
  location.appendChild(frame);

  return main;
}

export default createContact;
