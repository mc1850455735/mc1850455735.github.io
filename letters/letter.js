// 在 DOMContentLoaded 事件中封装代码，确保 DOM 已完全加载
document.addEventListener("DOMContentLoaded", function () {
    // 检查 ID 为 "mainDisplay "的元素是否存在
    var mainDisplay = document.getElementById("mainDisplay");

    if (mainDisplay !== null) {
        // 检查用户是否使用移动设备
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
