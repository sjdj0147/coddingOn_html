
window.onload = function(){
  setInterval(setWatch, 1000);

  function setWatch(){
    const date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById("demo").innerHTML = time;
  }
}