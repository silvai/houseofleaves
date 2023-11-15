function changeColor() {
  var mes = document.getElementById("mes");
  mes.style.fontSize = "45";
  mes.style.color = "green";
}


function displayDate() {
    document.getElementById("mes").style.color = "green";
  }

function randomFooter() {
    var footerPadding = Math.random() * 100;
    var padValue = footerPadding + "%";
    var footer = document.getElementsByClassName("footer");
    footer[0].style.paddingBottom = padValue;
}