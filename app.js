var app = angular.module('app', ['ui.grid','ngAnimate', 'ngSanitize', 'ui.bootstrap']);

app.controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
  refresh();
  
  $scope.gridOptions = {
    columnDefs: [
      { name: 'name', cellTemplate: '<div class="ui-grid-cell-contents">{{ COL_FIELD.first }} {{ COL_FIELD.last }}</div>' },
      { name: 'email', cellTemplate: 'emailTemplate.html' },
      {name:'company', cellTemplate:'compeny.html' },
      { name: 'address', cellTemplate: 'mapAddress.html' },
    ]
  };
  
  function refresh() {
    $http.get('data.json')
    .success(function (data) {
      $scope.gridOptions.data = data;
      console.log(data);
    });
  }
  
  this.openAddress = function (address) {
    var param = address.street + ",+" + address.city + ",+" + address.state;
    window.open('https://www.google.com/maps/search/' + param);
  };
}]);