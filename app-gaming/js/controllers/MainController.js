
app.controller('gameController', ['$scope', '$window', function($scope, $window) { 
  $scope.titleOne = 'Game On!';
  $scope.titleTwo = 'Rent over 8,000 Games & Movies'; 
  // ng-click function 
  $scope.message = "To start your free trial create an account first"
  $scope.doMessage = function(message) 
    {
  $window.alert(message);
    } 
  //image array for games

  $scope.games = [
    
    { 
     
      cover: 'img/syfy/startrek3.jpg',
      likes: 0,
      dislikes: 0 
    }, 
    {  
      cover: 'img/syfy/starocean.png',
      likes: 0,
      dislikes: 0 
    },
       { 
      cover: 'img/syfy/starwars.jpg',
      likes: 0,
      dislikes: 0 
    },
    { 
      cover: 'img/rpg/rpg4.png',
      likes: 0,
      dislikes: 0 
    }

    ];

      
    // name: increment and deincrement likes and dislikes
    $scope.plusOne = function(index) { 
    $scope.games[index].likes += 1; 
    };
    $scope.minusOne = function(index) { 
    $scope.games[index].dislikes += 1; 
    };

  
}]);

