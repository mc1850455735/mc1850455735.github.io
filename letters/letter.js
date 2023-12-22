document.addEventListener("DOMContentLoaded", function () {
    var mainDisplay = document.getElementById("mainDisplay");

    if (mainDisplay !== null) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log("on mobile side");
            mainDisplay.classList.add("onMobileFont");
            mainDisplay.classList.remove("onPCFont");
        } else {
            console.log("on PC side");
        }
    } else {
        console.error("Element with ID 'mainDisplay' not found");
    }
});
