let col= prompt(`Enter body backgroundColor`)
let or= prompt(`Enter text color`)
document.body.style.backgroundColor=col
let te = document.querySelector(".text")
if(te){
    te.style.color=or;
}
