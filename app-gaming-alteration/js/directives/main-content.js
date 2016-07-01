
app.directive("mainPageNavbar", function() {
    return {
        
        templateUrl : 'views/main-page/navbar.html'

    };
});

app.directive("mainPageContent", function() {
    return {
        
        templateUrl : 'views/main-page/main-content.html'
    };
});

app.directive("mainPageGames", function() {
    return {
        
        templateUrl : 'views/main-page/index-games.html'
    };
});
app.directive("mainPageFooter", function() {
    return {
        
        templateUrl : 'views/main-page/footer.html'
    };
});

// --------------game page directives-------------------//

app.directive("gameSlideShow", function() {
    return {
        
        templateUrl : 'views/game-page/slideshow.html'
    };
});

app.directive("gameContent", function() {
    return {
        
        templateUrl : 'views/game-page/gamecontent.html'
    };
});

app.directive("gameFooter", function() {
    return {
        
        templateUrl : 'views/game-page/footer.html'
    };
});

// --------------Registration directives-------------------//

app.directive("regContent", function() {
    return {
        
        templateUrl : 'views/registration-page/registration.html'
    };
});




