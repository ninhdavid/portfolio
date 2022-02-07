
- text: >
    // Add OWM pyown to your enviornment variables
    owm=pyowm.OWM('2n234a6af659351d0fc58bdpm8a91mpf')
  apikey: 2n234a6af659351d0fc58bdpm8a91mpf

- text: |
    * function preload() {
     *   var url = 'http://api.openweathermap.org/data/2.5/weather?q=London,UK'+
     *    '&APPID=7bbbb47522846e8b3c26ba35c226c734';
     *   weather = loadJSON(url);
     * }

  apikey: 7bbbb47522846e8b3c26ba35c226c734


function onGeoOk(position){
    const lat= position.coords.latitude;
    const lon= position.coords.longitude;
const url=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(url)
    .then((response)=>response.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText =`${data.weather[0].main}/ ${data.main.temp}`;
        city.innerText=data.name;
    });
}

function onGeoError(){
alert("cant find you!")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
