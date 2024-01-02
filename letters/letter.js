function onPC(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return false;
    } else {
        return true;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var preDisplay = document.getElementById("preDisplay");
    var sideMenu = document.getElementById("sideMenu");
    var addMenu = document.getElementById("addMenu");

    if (mainDisplay !== null) {
        if (!onPC()) {
            console.log("on mobile side");
            preDisplay.classList.add("onMobileFont");
            sideMenu.style.display = "none";
            addMenu.style.display = "block";
        } else {
            console.log("on PC side");
            preDisplay.classList.add("onPCFont");
        }
    } else {
        console.error("Element with ID 'mainDisplay' not found");
    }
});

function  changeShowLetter(n) {
    var target = "letter" + n;
    var showLetter = document.getElementById(target);

    const N = 3;
    const letters = [
        document.getElementById('letter1'),
        document.getElementById('letter2'),
        document.getElementById('letter3'),
    ];

    // letters 数组所有div都不可见
    for(var i = 0; i < N; i++)
    {
        if(!letters[i])
            console.log("can not found");
        else
            letters[i].style.display = "none";
    }

    showLetter.style.display = "block";

};

function showmoreletter(){
    var sideMenu = document.getElementById("sideMenu");

    if(sideMenu.style.display === "none")
        sideMenu.style.display = "block";
    else 
        sideMenu.style.display = "none";

}
