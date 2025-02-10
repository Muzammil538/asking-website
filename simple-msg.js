function nextPage() {
  window.location.href = "yes.html";
}

function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth -
      document.getElementById("noButton").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight -
      document.getElementById("noButton").offsetHeight);
  document.getElementById("noButton").style.left = (x > screen.width) ? `${screen.width - x}px` : `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
}
