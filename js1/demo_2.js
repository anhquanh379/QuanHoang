// lấy phần tử fan
var fan = document.getElementById("fan");
var angle = 0;
var speed = 20; // tốc độ quay (ms)

// kiểm tra fan có tồn tại mới chạy
if (fan) {
    setInterval(function () {
        angle += 10; // quay thêm 10 độ
        fan.style.transform = "rotate(" + angle + "deg)";
    }, speed);
}
