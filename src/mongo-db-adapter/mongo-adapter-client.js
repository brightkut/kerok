"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoAdapterClient = void 0;
var mongo_connection_1 = require("./mongo-connection");
var mongodb_1 = require("mongodb");
var MongoAdapterClient = /** @class */ (function () {
    function MongoAdapterClient() {
        this.db = mongo_connection_1.MongoConnection.getConnection().getDB();
    }
    /**
     * ### Description
     *   - create collection
     */
    MongoAdapterClient.prototype.createCollection = function (collectionName, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.createCollection(collectionName, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        throw new mongodb_1.MongoError('error from create collection');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - delete collection
     */
    MongoAdapterClient.prototype.deleteCollection = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.dropCollection(collectionName)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        throw new mongodb_1.MongoError('error from delete collection');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - create index
     */
    MongoAdapterClient.prototype.createIndex = function (collectionName, indexField, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).createIndex(indexField, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_3 = _a.sent();
                        throw new mongodb_1.MongoError('error from create index');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - multi create index
     */
    MongoAdapterClient.prototype.multiCreateIndex = function (collectionName, indexFields) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).createIndexes(indexFields)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_4 = _a.sent();
                        throw new mongodb_1.MongoError('error from multi create index');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - find document
     */
    MongoAdapterClient.prototype.find = function (collectionName, query, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).find(query, option).toArray()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_5 = _a.sent();
                        throw new mongodb_1.MongoError('error from find document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - insert document
     */
    MongoAdapterClient.prototype.insert = function (collectionName, doc, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).insertOne(doc, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_6 = _a.sent();
                        throw new mongodb_1.MongoError('error from insert document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - multiple insert document
     */
    MongoAdapterClient.prototype.multipleInsert = function (collectionName, doc, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).insertMany(doc, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_7 = _a.sent();
                        throw new mongodb_1.MongoError('error from multiple insert document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - update document
     */
    MongoAdapterClient.prototype.update = function (collectionName, query, update, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).updateOne(query, update, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_8 = _a.sent();
                        throw new mongodb_1.MongoError('error from update document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - multi update document
     */
    MongoAdapterClient.prototype.multiUpdate = function (collectionName, query, update, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).updateMany(query, update, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_9 = _a.sent();
                        throw new mongodb_1.MongoError('error from multi update document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - delete document
     */
    MongoAdapterClient.prototype.delete = function (collectionName, query, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).deleteOne(query, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_10 = _a.sent();
                        throw new mongodb_1.MongoError('error from delete document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - multi delete document
     */
    MongoAdapterClient.prototype.multiDelete = function (collectionName, query, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).deleteMany(query, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_11 = _a.sent();
                        throw new mongodb_1.MongoError('error from multi delete document');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - transaction write
     */
    MongoAdapterClient.prototype.transactionWrite = function (collectionName, operations, option) {
        return __awaiter(this, void 0, void 0, function () {
            var e_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.db.collection(collectionName).bulkWrite(operations, option)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        e_12 = _a.sent();
                        throw new mongodb_1.MongoError('error from transaction write');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * ### Description
     *   - get collection
     */
    MongoAdapterClient.prototype.getCollection = function (collectionName) {
        return __awaiter(this, void 0, void 0, function () {
            var collection;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.listCollections({ name: collectionName }).toArray()];
                    case 1:
                        collection = _a.sent();
                        if (collection.length == 0) {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                }
            });
        });
    };
    return MongoAdapterClient;
}());
exports.MongoAdapterClient = MongoAdapterClient;
//# sourceMappingURL=mongo-adapter-client.js.map