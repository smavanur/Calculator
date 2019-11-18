var CalculatorApp = angular.module('CalculatorApp', []);

CalculatorApp.controller('CalcCtrl', ['$scope', 'CalculatorService', function ($scope, CalculatorService) {
    $scope.output = "0";

    $scope.ReadInput = function (keyId) {
        $scope.output = CalculatorService.ReadInput(keyId);
    }
    $scope.ShowResult = function () {
        $scope.output = CalculatorService.ShowResult($scope.expression);
        $scope.expression = $scope.output;
    };  

}]);







