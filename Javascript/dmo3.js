function demoOne(){
    alert("one two three...");
}
//function demoTwo(){
//    alert("popup ghi nhận sự kiện 2");
//}

//onmouseenter:sự kiện = từ ngoài vào vùng
//onmouseleave: sự kiện = từ trong ra ngoài vùng

var flag = false;
var fanbox = null;
function turnOn(btn){ //khai biến btn hoặc gì cũng được.
    if(flag == false){
        var r = 0;
        var a = document.getElementById("fan");
        fanbox = setInterval(function(){
            a.style.transform = `rotate(${r}deg)`;
            r-=5;
        },10);
        btn.innerText = "Stop"; //có this bên html
        //  nên dùng luôn btn không cần khai báo
        flag = true;
    }else{
        clearInterval(fanbox);
        btn.innerText = "Turn on";
        flag = false;
    }
}