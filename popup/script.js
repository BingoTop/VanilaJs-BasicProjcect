const openBtn = document.getElementById("open")
const popUpContainer = document.getElementById("container")
const closeBtn = document.getElementById("close")

openBtn.addEventListener("click", () => {
  popUpContainer.classList.add("active")
})
closeBtn.addEventListener("click", () => {
  popUpContainer.classList.remove("active")
})
