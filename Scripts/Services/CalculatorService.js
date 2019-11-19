angular.module('CalculatorApp').factory('CalculatorService',
    function () {

        var result = {};
        var inOperation = false;
        var output = "0";
        var expression = "0";
        var newNumber;

        operator =
            {
                '0': function () { return result.expression('0') },
                '1': function () { return result.expression('1') },
                '2': function () { return result.expression('2') },
                '3': function () { return result.expression('3') },
                '4': function () { return result.expression('4') },
                '5': function () { return result.expression('5') },
                '6': function () { return result.expression('6') },
                '7': function () { return result.expression('7') },
                '8': function () { return result.expression('8') },
                '9': function () { return result.expression('9') },
                '+': function () { return result.operate('+') },
                '-': function () { return result.operate('-') },
                '*': function () { return result.operate('*') },
                '/': function () { return result.operate('/') },
                'AC': function () { return result.updateOutPutForSpecialChars('AC') },
                '+/-': function () { return result.updateOutPutForSpecialChars('+/-') },
                '%': function () { return result.updateOutPutForSpecialChars('%') }
            },


            result.ReadInput = function (input) {
                console.log(input);
                result.value = operator[input](input);
                return result.value;

            },

            result.ShowResult = function () {               
            output = String(eval(expression));
                if (String(result).length > 15) {
                    output = Number.parseFloat(result).toExponential(0);
            }
           return output;
            },

            result.expression = function (val) {
                var btn = val;
                if (newNumber) {
                    output = 0;
                    expression = 0;
                }
                if (expression == "0" || newNumber) {
                    output = btn;
                    expression = btn;
                    newNumber = false;
                }
                else {
                    if (inOperation) {
                        output = btn;
                        expression += String(btn);
                    }
                    else {
                        if (String(output).length < 9) {
                            expression += String(btn);
                            output += String(btn);
                        }
                    }
                }
                inOperation = false;
            console.log("Result of :" + expression + " : :"+ output);
                return output;
            },
            result.updateOutPutForSpecialChars = function (outputVal) {
                if (outputVal == "AC") {
                    output = "0";
                }
                else if (outputVal == "+/-") {
                    output = "-" + output;
                }
               
                else
                    if (outputVal == "%") {
                        expression += "/100";
                        output = String(eval(expression));
                    }
 
                expression = output;
                return output;
            },

            result.operate = function (op) {
                if (output && !inOperation) {
                    expression += op;
                    inOperation = true;
                }
                else {
                    output = String(eval(output));
                    expression = output;
                    expression += op;
                }
                return output;
            }
        return result;
    });