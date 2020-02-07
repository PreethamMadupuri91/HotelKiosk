app.controller('ItemDetailsController', ['$scope', '$state', 'API_ENDPOINT', '$http','$stateParams','$window', function ($scope, $state,  API_ENDPOINT, $http ,$stateParams,$window) {

    $scope.item = JSON.parse($window.localStorage.getItem('selecteditem'));

}])
