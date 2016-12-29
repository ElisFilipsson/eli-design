/*
Controller for portfolio.html
*/
app.controller('PortCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

    $scope.portfolio = [
    {name:'Kreativt Projekt | Desktop-bakgrund', img:'assets/img/portfolio/background01.jpg', info:'Desktopbakgrund', text:'Ett kreativt projekt företaget har gjort för backgrunder till datorer.'},
    {name:'Kreativt Projekt | Desktop-bakgrund', img:'assets/img/portfolio/background02.jpg', info:'Desktopbakgrund', text:'Ett kreativt projekt företaget har gjort för backgrunder till datorer.'},
    {name:'Kreativt Projekt | Desktop-bakgrund', img:'assets/img/portfolio/background04.jpg', info:'Desktopbakgrund', text:'Ett kreativt projekt företaget har gjort för backgrunder till datorer.'},
	
    {name:'CC | Pokerduk', img:'assets/img/portfolio/pokerduk_mo.jpg', info:'pokerduk - cc', text:'Pokerduk för specifikt pokerevent på CC i Malmö.'},
    {name:'CC | Inhouse logotyp', img:'assets/img/portfolio/cc_workout_logo.jpg', info:'logotyp-cc_workout', text:'Inhouse logotyp för CC i Malmö. Specifik avdelning som har med träningen för anställda.'},
    {name:'CC | Pokertavla', img:'assets/img/portfolio/cc_tavla.jpg', info:'IngetGottAttSäga', text:'Tavla för uppfostran av gäster i pokerrummet för CC i Malmö.'},
	{name:'Eciggshop | Gatupratare', img:'assets/img/portfolio/eciggshop_gatupratare.jpg', info:'gatupratare - eciggshop', text:'Eciggshop är ett litet med kraftfullt företag i centrala Malmö. De säljer e-ciggaretter och önskade marknadsföring för förbipasserande gångare.'},
    {name:'Nordic New Hair Center | Logotyp', img:'assets/img/portfolio/nnhc.jpg', info:'logotyp - NNHC', text:'NNHC är en hårtransplantationsklinik i Helsingborg. De önskade en logotyp då de ville etablera sig. Vi utvecklade utifrån lojalt, tydligt, ihågkommerligt.'},
    
    {name:'Breeze Nattklubb | Poster', img:'assets/img/portfolio/BREEZE.jpg', info:'Poster - Breeze', text:'Inför Breezes event på Halloween önskade de marknadsföring i form av en poster.'}

  ];

}]);