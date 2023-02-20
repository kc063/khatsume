//modal.ts-- modal scripts

// The window.onload callback is invoked when the window is first loaded by the browser
window.onload = () => {    
    prepareClick()
    prepareSpan()
}



/**
 * Prep for clicks regarding modal opening.
 */
function prepareClick() {
    var btn = document.getElementById("menuButton");
    if (btn == null) {
        console.log("No submit button exists.");
    }
    else if (!(btn instanceof HTMLButtonElement)) {
        console.log("Submit button exists as incorrect element.");
    }
    else {
        btn.addEventListener("click", handleButton);

    }
}


function handleButton(){
    var modal = document.getElementById("menuModal");
    if(modal == null){
        console.log("Modal doesn't exist.");
    } else{
        modal.style.display = "block";
    }
}

function prepareSpan() {
    var span = document.getElementsByClassName("close")[0];
    if (span == null) {
        console.log("No submit button exists.");
    }
    else {
        span.addEventListener("click", handleSpan);

    }
}

function handleSpan(){
    var modal = document.getElementById("menuModal");
    if(modal == null){
        console.log("Modal doesn't exist.");
    } else{
        modal.style.display = "none";
    }
}


export{prepareClick, prepareSpan}

