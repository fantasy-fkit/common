/**
 * Created by KlimMalgin on 05.03.2015.
 */


var lambda = require('core.lambda'),
    curry = lambda.curry,
    constant = lambda.constant,
    Option = require('fantasy-options').Option;

var opt = function (val) {
    return Option.from(val);
};

var operationWrap = curry(2, function (operation, valueO) {
    return extract(this, operation, valueO);
});

var extract = curry(3, function (ctx, operation, valueO) {
    return ctx.fold(function (meV) {
        return valueO.fold(operation(meV), constant(Option.None));
    }, constant(Option.None));
});

var conditionResult = function (cond, val) {
    return cond ? Option.of(val) : Option.None;
};

module.exports = {
    opt: opt,
    extract: extract,
    operationWrap: operationWrap,
    conditionResult: conditionResult
};
