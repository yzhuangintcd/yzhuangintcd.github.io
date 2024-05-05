const decreaseBtn = document.getElementById("decreaseBt")
const increaseBtn = document.getElementById("increaseBt")
const resetBn = document.getElementById("resetBt");

const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBn.onclick = function(){
    count = 0;
    countLabel.textContent = 0;
}