"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
var util = require("util");
var Middleware = /** @class */ (function () {
    function Middleware() {
    }
    Middleware.prototype.loggerMiddleware = function (req, res, next) {
        var log = "Logging Request = Method: " + req.method + " Path: " + req.path + " Body: " + req.body + " Params: " + req.params + " Query: " + req.query;
        console.log(util.inspect(log, { showHidden: false, depth: null }));
        next();
    };
    return Middleware;
}());
exports.Middleware = Middleware;
//# sourceMappingURL=middleware.js.map