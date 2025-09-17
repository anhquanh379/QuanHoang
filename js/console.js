console.log("Hello world"); // Đây giống như lệnh printf trong C
// Không thể chạy js trực tiếp như C, nguyên thủy của Js: tạo hiệu ứng trong website
// Muốn chạy được file js thì phải có file html chính là môi trường cho js chạy 
// Biến trong javascipt là Dynamic Database (kiểu dữ liệu động) vì nó không xin ô nhớ trong ram mà xin bộ nhớ trên trình duyệt nên thoải mái không cần phải
// khai báo rõ kiểu dữ liệu
var x; 
x = 10; // x: number
console.log(x);
x = "xin chao"; // kiểu dữ liệu con string
// Biến động nghĩa là đang là số (10) có thể là chữ (xin chào)
x = true;// khai báo giá trị biến => kiểu dữ liệu boolean
console.log(x);// in ra giá trị biến mới 
// ưu điểm: linh hoạt kiểu dữ liệu biến
// nhược điểm: không biết biến thuộc kiểu dữ liệu nào vì không nhất quán kiểu dữ liệu biến như trong ngôn ngữ C 
// không có kiểu dữ liệu Char trong Javascript nhé, 
var n = 20;
var s = "hello";
var t = n + n //=40 số + số = số 
var k = n + s // =20hello số + chuỗi string = string nhưng tuân theo thứ tự của các biến đã khai báo trước đó 
var m = s + n //=hello20 
// khi làm đến đâu nên ktra luôn giá trị vì nó không báo lỗi, javascript vẫn chạy
// phân biệt kết quả trả về thì số màu xanh, chuỗi chữ trắng nhé
if(t>30){
    
}else{

}
// if else cấu trúc không đổi
var xyz = t>30?"A":"B"; //toán tử 3 ngôi 
// nó tương đương : if(t>30) xyz = "A" xyz ="B"
for(var i=0;i<10;i++){
    console.log("i="+i);    //vòng lặp đoạn in ra các giá trị trong vòng lặp điểm này khác so với C 
}
// mảng dữ liệu 
var arr = []; //arr là một kiểu giá trị, [] là 1 mảng rỗng
var abc = [1,2,3,"xin chao"];
arr[0] = 10;
arr[1] = 15;
arr.push(18); //arr[2] = 18 giúp dễ dùng hơn, không cần viết phần tử thứ bao nhiêu trong mảng nữa
arr.push(18); //arr[2] = 18
arr.push(18); //arr[2] = 18
arr.push(18); //arr[2] = 18
arr.push(18); //arr[2] = 18
arr.push(18); //arr[2] = 18
for(var i=0;i< arr.length;i++){ // in mảng nó khác trong C 
    console.log(arr[i]);
}

// Hàm trong Javascript: khác trong C
function tinhtong(a,b){
    // return a+b;
    console.log(a+b); // hoặc viết như thế này tương đương với return a+b; ngôn ngữ Javascript nó k quan tâm 
}
tinhtong(5,7);
tinhtong("a",8);
tinhtong("a","b");
tinhtong([1,3,4],9);
// ưu điểm: viết với người mới, nhược điểm: không báo lỗi, nhưng có thể sai mà không biết, triển khai hàm phải chú thích cẩn thận không sẽ gây khó hiểu 
// cho người đọc
// Giới thiệu 1 số hàm có sẵn trong javascript có thể nổi lên với giao diện người dùng
// 1. Alert: Cảnh báo
alert("Cấm người dưới 18 tuổi!");
// Hàm : confirm
// var check = confirm("Bạn đã đủ 18 tuổi hay chưa?"); //return True/False
// if(check == true){ //(check ==true)
    alert("Bạn đã chọn Yes");
    // }else{
    alert("Bạn đã chọn No");
    // }

var age = prompt("Bạn bao nhiêu tuổi?");// string "20"
// age = age + 10; // "2010"
// alert(age);
age = parseInt(age) ;
// "20" => 20
// " 20ab48"=> 20
// "a20" => NaN : not number 
var lk = Math.random(); // tạo 1 số thực ngẫu nhiên từ 0-1
lk = lk * 100;
lk = parseInt(lk);
var num = prompt("Bạn chọn số nào ?");
num = parseInt(num);
if(num == lk){
    alert("chúc mừng");
}else{
    alert("Chúc bạn may mắn lần sau");
}

// s
