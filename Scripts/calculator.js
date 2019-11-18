var CalculatorApp = angular.module('CalculatorApp', []);

CalculatorApp.controller('CalcCtrl', ['$scope', 'CalculatorService', function ($scope, CalculatorService) {

    $scope.firstRowChars = ['+/-', '%'];
    $scope.displayNumbers = [
        { No: [7, 8, 9], Char: '*' },
        { No: [4, 5, 6], Char: '-' },
        { No: [1, 2, 3], Char: '+' }];

    $scope.expression = "0";
    $scope.output = "0";
    $scope.inOperation = false;

    $scope.updateOutput = function (btn) {
        if ($scope.newNumber) {
            $scope.output = 0;
            $scope.expression = 0;
        }
        if ($scope.expression == "0" || $scope.newNumber) {
            $scope.output = btn;
            $scope.expression = btn;
            $scope.newNumber = false;
        }
        else {
            if ($scope.inOperation) {
                $scope.output = btn;
                $scope.expression += String(btn);
            }
            else {
                if (String($scope.output).length < 9) {
                    $scope.expression += String(btn);
                    $scope.output += String(btn);
                }
            }
        }
        $scope.inOperation = false;
    };

    $scope.updateOutPutForSpecialChars = function (outputVal) {
        $scope.output = outputVal;
        $scope.expression = outputVal;
    }

    $scope.operate = function (op) {
        if ($scope.output && !$scope.inOperation) {          
            $scope.expression += op;
            $scope.inOperation = true;
        }
        else {
            $scope.output = String(eval($scope.output));
            $scope.expression = $scope.output;
            $scope.expression += op;
        }
    };

    $scope.equal = function () {
        $scope.output = CalculatorService.runCalculate('PLUS',$scope.expression);
        $scope.expression = $scope.output;
    };  

}]);







