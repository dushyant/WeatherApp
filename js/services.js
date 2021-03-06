//SERVICES
weatherApp.service('cityService', function () {
    'use strict';
    
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
   
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
        return weatherResult = weatherAPI.get({ q: city, cnt: days, APPID: "10101010101010101010101010101" });
    };
    
}]);