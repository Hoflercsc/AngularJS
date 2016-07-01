var cities = [
              {
                  place : 'Location 1',
                  desc :  'Game-Fly <br/> 742A W 21st St, <br/> Norfolk, VA 23517',
                   lat : 36.870467,
                   long : -76.295097
              },
              {
                  place : 'Location 2',
                  desc : 'Game-Fly <br/> 5802 E Virginia Beach Blvd <br/> Norfolk, VA ',
                  lat : 36.858309,
                  long : -76.207480
              },
              {
                  place : 'Location 3',
                  desc : 'Game-Fly <br/> 300 Monticello AVE, STE 196A <br/> Norfolk',
                  lat : 36.848903,
                  long : -76.287950
              },
              {
                  place : 'Location 3',
                  desc : 'Game-Fly <br/> 7525 Tidewater Dr, <br/> Norfolk, VA 23505',
                  lat : 36.912626,
                  long : -76.256537
              },
              {
                  place : 'Location 4',
                  desc : 'Game-Fly <br/> 700 N Military Hwy Ste 2006, <br/> Norfolk, VA 23502',
                  lat : 36.858309,
                  long : -76.209150
              }
          ];

          //Angular App Module and Controller
          var mapApp = angular.module('mapApp', []);
          mapApp.controller('MapController', function ($scope) {
              
              var mapOptions = {
                  zoom: 11,
                  center: new google.maps.LatLng(36.850769,-76.285873),
                  mapTypeId: google.maps.MapTypeId.ROADMAP
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.place
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '<br />' + info.lat + ' E,' + info.long +  ' N, </div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + 
                        marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });