function weather(ct){
    const url= `https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`; 
    fetch(url).then(rs=>rs.json())   
    .then(function(data){
        var w = data;
        document.getElementById("city").innerText = w.name;
        document.getElementById("temp-id").innerText = w.main.temp;
        document.getElementById("humi").innerText = w.main.humidity;
        document.getElementById("wind").innerText = w.wind.speed;
        document.getElementById("icon").src = `https://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`
});
}
weather("");
function changeCity(e){
    var city = e.value; //e là select do ở html chọn this
                        //lấy được value của select
    weather(city);
}