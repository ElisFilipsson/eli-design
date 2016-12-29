/* @ngInject */
 app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
  
 // Set up the states
 //controller, loads needed controller depending on page.
 //templateUrl, page to be loaded.
 //URL: url to be displayed in url bar.
 //pageTitle.

 // For any unmatched url
 $urlRouterProvider.otherwise("/tjanster");
  
 $stateProvider
    .state('/about', {
        templateUrl: 'app/components/views/about.html',
        pageTitle: 'eli Designbyrå | Välkommen!',
        controller: 'AboutCtrl',
        url: '/om'
    })
    .state('/services', {
        templateUrl: 'app/components/views/service.html',
        pageTitle: 'eli Designbyrå | Tjänster',
        controller: 'ServiceCtrl',
        url: '/tjanster'
    })
    .state('/portfolio', {
        templateUrl: 'app/components/views/portfolio.html',
        pageTitle: 'eli Designbyrå | Portfolio',
        controller: 'PortCtrl',
        url: '/portfolio'
    })
    .state('/contact', {
        templateUrl: 'app/components/views/contact.html',
        pageTitle: 'eli Designbyrå | Kontakt',
        controller: 'ContactCtrl',
        url: '/kontakt'
    });
 }]);

