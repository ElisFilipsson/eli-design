/*
Controller for contact.html
*/
app.controller('ContactCtrl', ['$scope', '$state', '$http', '$stateParams', function($scope, $state, $http, $stateParams) {

$scope.feedbacksubmit= function (){  

  var name1 = document.getElementById("name").value;
  var email1 = document.getElementById("email").value;
  var message1 = document.getElementById("message").value;

    $http({
    url: "http://eli-design.se/app/shared/email.php", 
    method: "POST",
    data: { name: name1, email: email1, message:message1 }

    }).success(function(data, status, headers, config) {
   // this callback will be called asynchronously
   // when the response is available

    if(status == 200) {

      var return_data = data;

        if(return_data != 0){


          $scope.hide();
          //$scope.closeFeedback();
        }else{

          $scope.showEmailError();
        }
      }
    }).
  error(function(data, status, headers, config) {
   // called asynchronously if an error occurs
   // or server returns response with an error status.
   console.log(status);
   $scope.showAlertNetwork();
   $scope.hide();

    });

  };


}]);