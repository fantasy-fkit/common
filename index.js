/**
 * Created by KlimMalgin on 05.03.2015.
 */


var lambda = require('core.lambda'),
    curry = lambda.curry,
    constant = lambda.constant/*,
    Option = require('fantasy-options').Option*/;

var opt = curry(2, function (ctx, val) {
    return ctx.from(val);
});

var operationWrap = curry(2, function (operation, valueO) {
    return extract(this, operation, valueO);
});

var extract = curry(3, function (ctx, operation, valueO) {
    return ctx.fold(function (meV) {
        return valueO.fold(operation(meV), constant(ctx.None));
    }, constant(ctx.None));
});

var conditionResult = curry(3, function (ctx, cond, val) {
    return cond ? ctx.of(val) : ctx.None;
});

module.exports = {
    opt: opt,
    extract: extract,
    operationWrap: operationWrap,
    conditionResult: conditionResult
};
