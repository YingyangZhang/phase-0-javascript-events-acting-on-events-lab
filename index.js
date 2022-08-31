
const dodger = document.getElementById("dodger");

function moveDodgerLeft(){
    const leftNumber = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumber, 10);

    if(left > 0){
        dodger.style.left = `${left - 10}px`;
    }
}

function moveDodgerRight(){
    const rightNumber = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumber, 10);

    if(right < 360){
        dodger.style.left = `${right+ 10}px`;
    }
}

document.addEventListener("keydown", e => {
    switch(e.key){
        case ("ArrowLeft"):
            moveDodgerLeft();
            break;
        case ("ArrowRight"):
            moveDodgerRight();
            break;
    }
});