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

function changeShowLetter(n) {
    var target = "letter" + n;
    var showLetter = document.getElementById(target);

    var container = document.getElementById("mainDisplay");

    if(onPC()){
        var children = container.querySelectorAll("*"); 
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "none";
        }

        console.log(children.length);

        showLetter.style.display = "block";
        var children = showLetter.querySelectorAll("*"); 
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "flow";
        }
    }
    else{
        var children = container.querySelectorAll("*"); 
        for (var i = 0; i < children.length; i++) {
            children[i].style.display = "none";
        }

        showLetter.style.display = "block";
    }
    
}

function showmoreletter(){
    var sideMenu = document.getElementById("sideMenu");

    if(sideMenu.style.display === "none")
        sideMenu.style.display = "block";
    else 
        sideMenu.style.display = "none";

}
