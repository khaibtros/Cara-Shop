let mainImg = document.getElementById("MainImg");
let smallImg = document.getElementsByClassName("small-img");

for (i = 0; i < smallImg.length; i++) {
    smallImg[i].onclick = function() {
    mainImg.src = this.src;
    };
}

// Click on Products below

let inactiveImgs = document.getElementsByClassName('inactive-img');

function opentab(tabname) {
    for (inactiveImg of inactiveImgs) {
        inactiveImg.classList.remove('active-img');
    }
    document.getElementsById(tabname).classList.add('active-img');
}
