app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://api.forecast.io/forecast/d723d7ceedf6f72315ecc96454389aeb/36.8468,-76.2851') 
      .success(function(data) { 
        return data; 
      }) 
      .error(function(err) { 
        return err; 
      }); 
}]);



// return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')
  // return $http.get('http://api.openweathermap.org/data/2.5/forecast/city?id=4776242&APPID=9b37880973ffde9db4f7fefe4a1aed69') 
  //return $http.get('http://www.myweather2.com/developer/forecast.ashx?uac=lRuWgU58rS&output=json&query=SW1') 