function createFooter() {
  const footer = document.createElement("footer");

  const para = document.createElement("p");
  para.textContent = "made by ";
  footer.appendChild(para);

  const link = document.createElement("a");
  link.textContent = "Sophrone";
  link.href = "https://github.com/sophrone";
  link.target = "_blank";
  para.appendChild(link);

  return footer;
}

export default createFooter;
