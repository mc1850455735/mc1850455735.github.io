function showConfirmation() {
    // 弹出密码确认窗口
    var password = prompt("请输入密码:");

    // 假设的正确密码
    var correctPassword = "230118";

    // 验证密码
    if (password === correctPassword) {
        // 密码正确，跳转到链接指定的地址
        window.location.href = document.getElementById("myLink").href;
    } else {
        // 密码不正确，给出提示
        alert("密码不正确，请重新输入");
    }
}
