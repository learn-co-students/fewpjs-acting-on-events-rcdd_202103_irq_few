// Your code here
document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";

console.log(dodger.style.left);

console.log(dodger.style.bottom);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  
  if(e.key === "ArrowLeft") {
    moveDodgerLeft();
  }else if(e.key === "ArrowRight") {
    moveDodgerRight()
  }
})


function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}

