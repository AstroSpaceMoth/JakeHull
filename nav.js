const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
  document.body.dataset.about = "false";
  document.body.dataset.contact = "false";
}

const toggleAbout = () => {
  document.body.dataset.nav = "false";
  document.body.dataset.about = document.body.dataset.about === "true" ? "false" : "true";
  document.body.dataset.contact = "false";
}

const toggleContact = () => {
  document.body.dataset.nav = "false";
  document.body.dataset.about = "false";
  document.body.dataset.contact = document.body.dataset.contact === "true" ? "false" : "true";
}