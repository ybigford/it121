function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = " "+newName.value+" ";

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+newName.value+"&units=metric&appid=843f63748786a76c00c8e7981c5d3394")
.then(response => response.json())
.then(data => {

    //min, max temp
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(data.list[i].main.temp_min * 1.8 + 32) .toFixed(2) + "°F";;
            
        
    }



    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(data.list[i].main.temp_max * 1.8 + 32) .toFixed(2) + "°F";
    }
   

    //icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
        data.list[i].weather[0].icon+"@4x.png";
    }
  
    console.log(data)


    //humidity
    for(i = 0; i<5; i++){
        document.getElementById("humidity" + (i+1) + "H").innerHTML = "Humidity:"  + data.list[i].main.humidity + "%";

        // + data.list[i]['main'][0]['humidity'];
    }


    //description
    for(i = 0; i<5; i++){
        document.getElementById("description" + (i+1) +"Des").innerHTML = data.list[i].weather[0].description;
    }



})

.catch(err => alert("Can't get weather!"))
}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Seattle";
    GetInfo();
}



let d = new Date();
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }




let dateWeather = document.getElementById("dateWeather");
let dateWeather2 = document.getElementById("dateWeather2");
let dateWeather3 = document.getElementById("dateWeather3");
let dateWeather4 = document.getElementById("dateWeather4");
let dateWeather5 = document.getElementById("dateWeather5");


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


dateWeather.innerText = d.toLocaleString('default', { month: 'long' }) + " " + d.getDate();


let today = new Date();
let tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

dateWeather2.innerHTML = tomorrow.toLocaleString('default', { month: 'long' }) + " " + tomorrow.getDate();



let tomorrow2 = new Date();
tomorrow2.setDate(today.getDate() + 2);

dateWeather3.innerHTML = tomorrow2.toLocaleString('default', { month: 'long' }) + " " + tomorrow2.getDate();



let tomorrow3 = new Date();
tomorrow3.setDate(today.getDate() + 2);

dateWeather3.innerHTML = tomorrow3.toLocaleString('default', { month: 'long' }) + " " + tomorrow3.getDate();



let tomorrow4 = new Date();
tomorrow4.setDate(today.getDate() + 3);

dateWeather4.innerHTML = tomorrow4.toLocaleString('default', { month: 'long' }) + " " + tomorrow4.getDate();



let tomorrow5 = new Date();
tomorrow5.setDate(today.getDate() + 4);

dateWeather5.innerHTML = tomorrow5.toLocaleString('default', { month: 'long' }) + " " + tomorrow5.getDate();