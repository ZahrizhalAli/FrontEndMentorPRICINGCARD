
function showPrice() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "Hello") {
    x.innerHTML = "Swapped text!";
  } else {
    x.innerHTML = "Hello";
  }
}

<p><button onclick="myFunction()">Click Me</button></p>

<div id="myDIV">Hello</div>
