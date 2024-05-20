const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".important-note h4", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".important-note ul li", {
  ...scrollRevealOption,
  delay: 1100,
  interval: 500,
});
