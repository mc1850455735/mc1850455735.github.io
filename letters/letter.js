document.addEventListener("DOMContentLoaded", function () {
    var preDisplay = document.getElementById("preDisplay")

    if (mainDisplay !== null) {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            console.log("on mobile side");
            preDisplay.classList.add("onMobileFont");
        } else {
            console.log("on PC side");
            preDisplay.classList.add("onPCFont");
        }
    } else {
        console.error("Element with ID 'mainDisplay' not found");
    }
});
