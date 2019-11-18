angular.module('CalculatorApp').factory('CalculatorService',
    function () {
        return {
           
            //calculate: function (evalExpresssion) {
            //    console.log("Success");
            //    var result = String(eval(evalExpresssion));
            //    if (String(result).length > 15) {
            //        result = Number.parseFloat(result).toExponential(0);
            //    }
            //    console.log("Success1");
            //    return result;
            //},
            operator: {
                PLUS: function (evalExpresssion) {
                    console.log("Success");
                    var result = String(eval(evalExpresssion));
                    if (String(result).length > 15) {
                        result = Number.parseFloat(result).toExponential(0);
                    }
                    console.log("Success1");
                    return result;
                },
                SUBSTRACT: function () { },
                DIVIDE: function () { },
                MULTIPLY: function () { }
            },

            runCalculate: function (opValue, evalExpresssion) {
                return this.operator[opValue](evalExpresssion);
            }
            }        
    });