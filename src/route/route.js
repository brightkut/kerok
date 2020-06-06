"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
var express = require("express");
var Route = /** @class */ (function () {
    function Route() {
        this.router = express.Router();
        this.createController();
    }
    Route.prototype.getRouter = function () {
        return this.router;
    };
    return Route;
}());
exports.Route = Route;
//# sourceMappingURL=route.js.map