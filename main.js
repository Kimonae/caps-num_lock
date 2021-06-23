document.getElementById("input").addEventListener("keyup",
function(event) {
 //votre code ici

 if (event.getModifierState("CapsLock")) {

 document.getElementById("warning").style.display = "block";
 
}else 

document.getElementById("warning").style.display = "none"; 


if (event.getModifierState("NumLock")) {

    document.getElementById("warning").innerHTML = "⚠️ Num Lock is activated...";
      document.getElementById("warning").style.display = "block";

}else document.getElementById("warning").innerHTML = "⚠️ Caps Lock is activated...";

    
    



});






