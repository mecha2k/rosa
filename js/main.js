const selectElement = function (element) {
  return document.querySelector(element)
}

let menuToggler = selectElement(".menu-toggle")
let body = selectElement("body")

menuToggler.addEventListener("click", function () {
  body.classList.toggle("open")
})

window.scrollReveal = ScrollReveal()

scrollReveal.reveal(".animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300
})

scrollReveal.reveal(".animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 600
})
scrollReveal.reveal(".animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600
})

scrollReveal.reveal(".animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600
})
