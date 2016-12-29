/*
Controller for service.html
*/
app.controller('ServiceCtrl', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

    $scope.services = [
    {name:'Strategi', img:'assets/img/services/strategi.png', info:'Strategi', text:'Vi hjälper er lägga upp en strategi för hur ni ska underhålla er hemsida eller marknadsföra er själva.'},
    {name:'Design', img:'assets/img/services/design.png', info:'Design', text:'Förutom en snygg design anpassar vi även designen på er hemsida/folder/applikation för era användare. Utifrån er målgrupp gör vi användartester och tar fram den bästa designen.'},
    {name:'Varumärke', img:'assets/img/services/varumarke.png', info:'Varumärkesdesign', text:'Ett starkt varumärke och en igenomtänkt profil är viktigt för din marknadsföring. Vi gör din logotyp, grafiska profil och tar fram ditt varumärke.'},
    {name:'Tryckmaterial', img:'assets/img/services/tryck.png', info:'Tryckmaterial', text:'Bra trycksaker är en viktig del av din marknadsföring och ett naturligt komplement till hemsida och webbsatsningar. Vi hjälper dig gärna med allt från visitkort, broschyrer och vepor.'},
    {name:'Responsiva Hemsidor', img:'assets/img/services/responsiv.png', info:'Responsiva webbsidor', text:'Vi gör alla hemsidorna vi producerar responsiva. Hemsidorna anpassar sig efter din upplösning. De fungerar t.ex. för tablets, mobiler, datorer.'},
    {name:'Applikationer', img:'assets/img/services/applikation.png', info:'Applikationer', text:'Vi gör applikationer för desktop eller för mobiler, detta genom att arbeta med Ionic och AngularJS.'}
  ];

}]);