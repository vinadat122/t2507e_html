
const url= `https://api.openweathermap.org/data/2.5/forecast?q=hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric`; 
    fetch(url).then(rs=>rs.json())   
    .then(function(data){
        var htmlInner= "";
        for (var i=0; i<data.list.length;i++){
            htmlInner += 
            `<div class="cell">
                <div class="left">
                    <h4>${data.list[i].dt_txt}</h4>
                    <h2>${data.list[i].main.temp}<sup>o</sup>C</h2>
                    <h5>${data.list[i].weather[0].description}</h5>
                </div>
                <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"/>
            </div>`;
        }
        document.getElementById("cell-row").innerHTML = htmlInner;
    });
