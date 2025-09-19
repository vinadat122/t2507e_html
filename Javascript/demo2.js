// kĩ thuật DOM: document opject model
var hx= document.getElementById("box"); 
//hx có vai trò như id box bên html
hx.innerText = "xin chào các bạn"; 
//thay giá trị của id box bằng giá trị mới
hx.innerHTML = "<i>xin chào các bạn in nghiêng</i>"; 
//thay đổi cả html in nghiêng
hx.style.color = "green";
hx.style.marginBottom = "20px";
hx.classList.remove("xyz"); //xóa class xyz
hx.classList.add("abc");
hx.classList.add("mno");

var dv = document.getElementById("device");
dv.style.fontSize = "50px";

//var f = 14;
//var d = setInterval(function(){
//    dv.style.fontSize = f + "px";
//    f +=2;
//},1000)
var im =document.getElementById("fan");
var r = 0;
var e = setInterval(function(){
    //im.style.transform = "rotate("+ r + "deg)";
    im.style.transform = `rotate(${r}deg)`
    r -= 5;
},10)