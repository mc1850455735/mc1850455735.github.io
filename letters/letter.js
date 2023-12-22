var myElement = document.getElementById("mainDisplay");

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log("on moblie side");
    myElement.classList.remove("onPCFont");
    myElement.classList.add("onMobileFont");
} else {
    console.log("on pc side");
}

