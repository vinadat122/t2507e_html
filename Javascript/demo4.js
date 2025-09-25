//lấy dữ liệu về từ file json các bước dưới hầu như giống nhau khi call api
//call api
const url= `http://127.0.0.1:5500/data/product.json`; // 1 kiểu khai báo
fetch(url).then(rs=>rs.json())   //lấy dữ liệu từ link bên trên
.then(function(data){
    var sp = data;
    document.getElementById("p-name").innerText = sp.name;
    document.getElementById("p-img").src = sp.image; //thay thế ảnh dùng src, thay thế text dùng innerText
    document.getElementById("p-desc").innerText = sp.description;
    document.getElementById("p-price").innerText = sp.price;
    document.getElementById("p-qty").innerText = sp.stock.qty;

    var rvHtml="";
    for(var i=0; i<sp.reviews.length; i++){
        rvHtml = rvHtml +`<li>${sp.reviews[i].rate} sao - ${sp.reviews[i].review}</li>`;
    }
    document.getElementById("rv").innerHTML = rvHtml;
});
