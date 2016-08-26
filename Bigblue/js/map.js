// var cities = [
//               {
//                   place : 'Location 1',
//                   desc :  'Game-Fly <br/> 742A W 21st St, <br/> Norfolk, VA 23517',
//                    lat : 36.870467,
//                    long : -76.295097
//               },
//               {
//                   place : 'Location 2',
//                   desc : 'Game-Fly <br/> 5802 E Virginia Beach Blvd <br/> Norfolk, VA ',
//                   lat : 36.858309,
//                   long : -76.207480
//               },
//               {
//                   place : 'Location 3',
//                   desc : 'Game-Fly <br/> 300 Monticello AVE, STE 196A <br/> Norfolk',
//                   lat : 36.848903,
//                   long : -76.287950
//               },
//               {
//                   place : 'Location 3',
//                   desc : 'Game-Fly <br/> 7525 Tidewater Dr, <br/> Norfolk, VA 23505',
//                   lat : 36.912626,
//                   long : -76.256537
//               },
//               {
//                   place : 'Location 4',
//                   desc : 'Game-Fly <br/> 700 N Military Hwy Ste 2006, <br/> Norfolk, VA 23502',
//                   lat : 36.858309,
//                   long : -76.209150
//               }
//           ];

          //Angular App Module and Controller
          var mapApp = angular.module('mapApp', []);
          mapApp.controller('MapController', function ($scope, $http) {
              
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
              
                 $http.get('json/whale.json')
                 .success(function(data){ $scope.data = data;
                 

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