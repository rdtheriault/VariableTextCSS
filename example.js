//Change these to match your style and class
var orgFontSize = 20;
var elName = "changeme";

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
function resize() {  
  let els = document.getElementsByClassName(elName);
  console.log(els);
  for (let j = 0; j < els.length;j++){
    els[j].style.fontSize=orgFontSize;
  }
  for (let j = 0; j < els.length;j++){
    //let fontSizez =(els[j].style.fontSize);
    let fontSizez = parseInt(els[j].style.fontSize);
    console.log(fontSizez);
    for (let i = fontSizez; i >= 0; i--) {
      let overflow = isOverflown(els[j]);
      if (overflow) {
        fontSizez--;
        els[j].style.fontSize = fontSizez + "px";
      }
    }
  }
}
window.addEventListener('resize', resize);
resize();
