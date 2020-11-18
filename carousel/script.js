const images = document.getElementById("imgs")

const img = document.querySelectorAll("#imgs img")
let idx = 0
function run() {
  idx++
  if (idx > img.length - 1) {
    idx = 0
  }
  images.style.transform = `translateX(${-idx * 500}px)`
  setTimeout(run, 2000)
}

run()
