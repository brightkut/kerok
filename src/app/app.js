"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express = require("express");
var App = /** @class */ (function () {
    function App(init) {
        var _a;
        this.app = express();
        this.port = (_a = init.port) !== null && _a !== void 0 ? _a : 8000;
        this.setMiddleWares(init.middleWares);
        this.setRoutes(init.routes);
    }
    App.prototype.setMiddleWares = function (middleWares) {
        for (var _i = 0, middleWares_1 = middleWares; _i < middleWares_1.length; _i++) {
            var middleWare = middleWares_1[_i];
            this.app.use(middleWare);
        }
    };
    App.prototype.setRoutes = function (routes) {
        for (var _i = 0, routes_1 = routes; _i < routes_1.length; _i++) {
            var route = routes_1[_i];
            this.app.use('/', route.getRouter());
        }
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log('Server listen on port: ' + _this.port);
        });
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map