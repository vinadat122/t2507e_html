var x;
x=10; // number
console.log(x);
x="xin chao"; //string
console.log(x);
x=true; //boolean (true - false)
console.log(x);

var n = 20;
var s = "hello";
var t = n + n; //40
var m = s + n; // 20xinchao
var k = n + s; //xinchao20

if(t > 30){

}else{

}
var xyz = t>30?"A":"B"; //TOÁN TỬ 3 NGÔI
// if(t > 30){
//      xyz = "A";
//}else{
//      xyz = "B";
//}
for(var i = 0; i < 10; i++){
    console.log("i="+i);
}

var arr=[];
var abc = [1,2,"xin chao"];

arr[1] = 10;
arr[2] = 15;
arr.push(18); // arr[2] = 18;

for(var i=0; i < arr.length; i++){
    console.log(arr[i]);
}

function tinhtong(a,b){
//    return a+b;
    console.log(a+b);
}
tinhtong(5,7);
tinhtong("a",8);
tinhtong("a","b");

// alert("cấm người ít tuổi!"); //tạo cảnh báo
//var check = confirm("bạn đã đủ hay chưa"); // lệnh nổi 2 lựa chọn return:true hoặc false
//if(check == true){
//    alert("bạn đã chọn yes");
//}else{
//    alert("bạn đã chọn no");
//}

//var age = prompt("bạn bn tuổi"); //kết quả trả về là string
//age = parseInt(age);
// "20" -> 20 số
// "20ab25" -> 20
// "a20" -> NaN : NOT A NUMBER - KO LÀM GÌ CẢ
//var lk = Math.random(); //tạo 1 số thực ngẫu nhiên từ 0 ->1
//    lk = lk *100;
//    lk = parseInt(lk);
//    var num = prompt("bạn chọn số nào");
//    num = parseInt(num);
//    if(num == lk){
//        alert("chúc mừng, bạn đã may mắn");
  //  }else{
//        alert("bạn chưa may mắn");
//    }

//setTimeout(function(){ //hàm trì hoãn công việc theo thời gian 3000ms
//    alert("abcxyv");
//},3000);

var c=3;
var bom = setInterval(function(){ //lặp lại vô hạn
    alert(c);
    c--;
    if(c < 0){
        clearInterval(bom) //chạy nốt lần này không chạy lần sau
    }
},1000
);

