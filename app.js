angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Sent from my angular app!';
}]);
