// �� DOMContentLoaded �¼��з�װ���룬ȷ�� DOM ����ȫ����
document.addEventListener("DOMContentLoaded", function () {
    // ��� ID Ϊ "mainDisplay "��Ԫ���Ƿ����
    var mainDisplay = document.getElementById("mainDisplay");

    if (mainDisplay !== null) {
        // ����û��Ƿ�ʹ���ƶ��豸
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
