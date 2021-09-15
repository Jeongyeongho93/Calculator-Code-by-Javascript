const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    divide: function(a, b){
        return a / b;
    },
    times: function(a, b){
        return a * b;
    },
    power: function(a, b){
        return a ** b;
    },
};

const plusResult = calculator.plus(2, 3);
const minusReult = calculator.minus(plusResult, 10);
const timesReult = calculator.times(3, minusReult);
const divideResult = calculator.divide(timesReult, plusResult);
const powerResult = calculator.power(divideResult, minusReult);
