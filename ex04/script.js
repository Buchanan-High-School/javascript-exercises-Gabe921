function task1() {
  let myArray = [
    "Object1",
    "Object2",
    "Object3",
    "Object4",
    "Object5",
    "Object6"
  ];
  let target = document.querySelector("#task-1-target")
  // This will run when you click the button.
  myArray.forEach((item) => {
    let el = document.createElement("p");
    el.innerText = item;
    target.appendChild(el);
  });
}

function task2A() {
  let target = document.querySelectorAll("#color-list li")
  console.log(target)
}

function task2B() {
  let nameli = document.querySelector("#name-list")
  let names = nameli.querySelectorAll("li")
  let target = document.querySelector("#task3A")
  console.log(nameli)

  names.forEach(item => {
    let newEl = document.createElement("li")
    newEl.innerText = "Hi " + item.innerText;
    target.appendChild(newEl)
  })
  
}

function task3() {
  let colors = document.querySelectorAll(".item")
  console.log(colors)
  
   colors.forEach(item =>
   item.style.backgroundColor = "#" + item.innerText)
}
