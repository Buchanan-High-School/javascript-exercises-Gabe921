// Write your Task 1 code inside this function!
function task1() {
  console.log("Running task 1");
  // 1. Target the div
  let target = document.querySelector("#text-content")
  console.log(target)
  // 2. Set inner.Text to something new
  target.innerText = "Running Task 1"
}

// Write your task 2 code inside this function!
function task2() {
  console.log("Running task 2");
  let target = document.querySelector("#task2")
  console.log(target)
  target.classList.toggle("inverted")
}

// Write your task 3 code inside this function!
function task3() {
  console.log("Running task 3");
  let target = document.querySelector("#list")
  console.log(target)
  target.appendChild(document.createElement("li")).textContent = "Do it again the next day"
  
}
