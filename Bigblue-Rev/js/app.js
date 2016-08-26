/* 
Author: Jonathan Hofler
Project: Big Blue Revision
This site is a revision of the original Big Blue angular project

Whats new: 
(1) using ng-route (single page application)
(2) using 2 controllers one for app data and one for map data

*/


var app = angular.module("bigBlue", ["ngRoute", 'ui.bootstrap']); /* New module called big blue */


app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        template: '<div class="container"><div main-slide-show></div></div>' // I moved my slideshow directive into the context of the index 
    })                                          // instead of the context of the entire application.
    .when('/overview', {                        // pulling the slideshow directive out of the markup
        templateUrl : 'overview.html',
        controller : 'whaleController'
    })
     .when('/map', {
        templateUrl : 'map.html',
        controller : 'MapController',
    })

    .otherwise({
        redirectTo : '/'
    });
});


//---------------------------------

app.controller('whaleController', ['$scope', '$window', '$timeout', function($scope, $window, $timeout) { 

  $scope.headingOne = 'Blue Whale Overview';
  $scope.titleOne = 'Description';
  $scope.d_info_one ='Blue whales, are long, slender whales that are much more streamlined than other large whales. They have a pointed snout, paired blowholes, and a broad, flat (upper part of the head). The throat grooves, in addition to streamlining the shape of the whale, allow the throat area to expand tremendously during feeding taking in of tons of food-laden water which is then discarded through their baleen plates leaving the fish for swallowing.';
  $scope.d_info_two ='An average blue whale is between 23-24.5 m long, and weighs about 99,800 kg, and females are even larger than males of the same age, the largest may weigh as much as 136,000 kg! The body is long, somewhat tapered, and streamlined, with the head making up less than one-fourth of its total body length.';  
  $scope.titleTwo = 'Feeding Behavior (Ecology)';
  $scope.fb_info_one ='Blue whales are the largest predator to ever inhabit this planet, though it is thought to feed almost exclusively on tiny, shrimp-like creatures called krill. Feeding is usually at depths less than 100 m; During the summer feeding season the blue whale gorges itself, consuming up to 40 million krill a day. Blue whales have ovelapping plates consistngi of a fingernail-like material called keratin that apping out into fine hairs on the ends near their tongue. The plates are black and measure about 51cm in length toward the front of their mouth to about 102cm at the rear. During feeding, large volumes of water and food are taken into the mouth and the pleated grooves in their throat expand enormously. As their mouth closes, water is expelled through the baleen plates, which trap the food inside to be swallowed.';
  $scope.titleThree = 'Life History';
  $scope.lh_info_one = 'Recent research indicates that blue whales reach sexual maturity between the ages of 6-10 years, or when males average about 23 m and females are about 24 m. Calves are born at intervals of 2 to 3 years and gestation is about 12 months. Calves are 78.2 m long at birth and 2,722 kg. Calves nurse for 7 to 8 months and are weaned when they reach 16 m in length. At that time they weigh about 20,900 kg. During the nursing period, calves consume 379 liters of the fat-rich mothers milk each day, gain 91 kg/day, or 3.8 kg/hour, and grow 3.78 cm in length a day.';
  
  $scope.infoOne = function(){
    $window.open('http://animals.nationalgeographic.com/animals/mammals/blue-whale/', '_blank');
  }

  $scope.infoTwo = function(){
    $window.open('http://animals.nationalgeographic.com/animals/mammals/humpback-whale/', '_blank');
  }
 $scope.infoThree = function(){
    $window.open('http://animals.nationalgeographic.com/animals/mammals/gray-whale/', '_blank');
  }

 

   //-------------1st question block

  $scope.question = 'Which whale is blue ?';
  $scope.rightAns = 'blue whale';
  $scope.wrongAns = 'incorrect answer';
  $scope.ansConf = 'Blue Whale is correct!';
  // setting value of the first question variable '' open string
  $scope.myAnswer = '';


  $scope.myquestion = function(myAnswer){
  
  if(myAnswer) {
    if (myAnswer == $scope.rightAns){

      $timeout(function () {
                $scope.myAnswer = '';
            }, 4000);

      return true;
    }
    else if (myAnswer != $scope.rightAns) {
       $timeout(function () {
                $scope.myAnswer = '';
            }, 5000)
      return false;
        }
    }
  return false;
  }

  //-------------2nd question block

  $scope.questionTwo = 'Which predator is the largest predator on the planent ?';
  $scope.rightAnsTwo = 'blue whale';
  $scope.wrongAnsTwo = 'incorrect answer';
  $scope.ansConfTwo = 'Blue Whale is correct !';
  // setting value of the second question variable '' open string
  $scope.myAnswerTwo = '';

  $scope.myquestionTwo = function(myAnswerTwo){
  
  if(myAnswerTwo) {
    if (myAnswerTwo == $scope.rightAnsTwo){

      $timeout(function () {
                $scope.myAnswerTwo = '';
            }, 4000);

      return true;
    }
    else if (myAnswerTwo != $scope.rightAnsTwo) {
       $timeout(function () {
                $scope.myAnswerTwo = '';
            }, 5000)
      return false;
    }
  }
  return false;
  }
 
 // ------------- 3rd question block
  $scope.questionThree = 'Which whale reaches sexual maturity between the ages of 6-10 years ?';
  $scope.rightAnsThree = 'blue whale';
  $scope.wrongAnsThree = 'incorrect answer';
  $scope.ansConfThree = 'Blue Whale is correct !';
  // setting value of the 3rd question variable '' open string
  $scope.myAnswerThree = '';


  $scope.myquestionThree = function(myAnswerThree){
  
  if(myAnswerThree) {
    if (myAnswerThree == $scope.rightAnsThree){

      $timeout(function () {
                $scope.myAnswerThree = '';
            }, 4000);

      return true;
    }
    else if (myAnswerThree != $scope.rightAnsThree) {
       $timeout(function () {
                $scope.myAnswerThree = '';
            }, 5000)
      return false;
    }
}
return false;
}

}]);


// Google maps controller for the map.html page

app.controller('MapController', function ($scope, $http) {
              
              var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(37.0902, -95.7129),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.latitude, info.longitude),
                      title: info.location
                  });
                  marker.content = '<div class="infoWindowContent">' + info.description + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                        marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
                 $http.get('json/whale.json').success(    // getting information out of the JSON file
                  function(data){                         // and putting logitude and laditude into google maps
                     $scope.data = data;
                 

              for (var i = 0; i <  $scope.data.length; i++){ 
                  createMarker( $scope.data[i]);
                    }
              })


              //    //orca json info
              //        $http.get('json/orca.json').success(
              //     function(orcadata){
              //        $scope.orcadata = orcadata;
                 

              // for (var i = 0; i <  $scope.orcadata.length; i++){
              //     createMarker( $scope.orcadata[i]);
              //       }
              // })

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });

