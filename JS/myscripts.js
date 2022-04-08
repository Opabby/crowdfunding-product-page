// Get the modal
 var modal = document.getElementById("myModal");

//  Get the buttons that open the modal
var btn = document.getElementById("myBtn");

// Get the element that closes the modal
var x = document.getElementById("close");

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on (x), close the modal
x.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event){
    if(event.target == modal) {
        modal.style.display ="none";
    }
}